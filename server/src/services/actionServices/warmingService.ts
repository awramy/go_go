import {inject, injectable} from "tsyringe";
import {ClientService} from "./clientService.js";
import {BodyWarmingData} from "../../types/types.js";
import {prisma} from "../../prisma.js";
import {Api} from "telegram";
import {sleep} from "telegram/Helpers.js";
import {FireworksAI} from "@fireworksai/sdk";

@injectable()
export class WarmingService {
  constructor(@inject(ClientService) private clientService: ClientService) {
  }

  async createWarmingData (accountId: number, warmingData: BodyWarmingData) {

    try {
      const res = await prisma.warmingData.create({
        data: {
          tg_accountId: accountId,
          timeLastStep: new Date(),
          timeStop: new Date(warmingData.timeStop),
          messagesPerHour: Number(warmingData.messagesPerHour),
          answersPerHour: Number(warmingData.answersPerHour),
          reactionsPerHour: Number(warmingData.reactionsPerHour),
          commentsPerHour: Number(warmingData.commentsPerHour),
        }
      })
      return res
    } catch (e) {
      console.error(e)
      throw e
    }

  }

  async warmingEngine (accountId: number) {
    try {
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000)
      const targetData = await prisma.warmingData.findFirst({
        where: {
          timeLastStep: {
            lt: oneHourAgo
          }
        }
      })

      if(!targetData) return null

      await this.clientService.connect(accountId).then(async() => {
        await this.sendAnswer()
      })

      return targetData
    } catch (e) {
      console.error(e)
    }
  }

  async sendAnswer(limit: number = 100, delaySeconds: number = 10) {
    if (!this.clientService.client) throw new Error('Client does not exist')

    try {
      const dialogs = await this.clientService.client.getDialogs({
        limit: limit,
      });
      const filterDialogs = dialogs.filter(dialog => dialog.unreadCount > 0 && dialog.isUser)

      console.log(`Найдено ${dialogs.length} чатов с непрочитанными сообщениями`);

      // Отправляем сообщения с задержкой
      for (const [index, dialog] of filterDialogs.entries()) {
        try {
          if (dialog.entity && dialog.entity instanceof Api.User) {
            console.log(`[${index + 1}/${filterDialogs.length}] Отправляю сообщение для ${dialog.entity.firstName || dialog.entity.username || dialog.entity.id}`);

            const messages = await this.clientService.client.getMessages(dialog.entity, {
              limit: 1
            });

            const textMessage = await this.generateAnswer(messages[0].text)

            console.log(messages[0].text)
            console.log(textMessage)

            await this.clientService.client.invoke(
              new Api.messages.ReadHistory({
                peer: dialog.entity,
                maxId: 0
              })
            );


            await this.clientService.client.sendMessage(dialog.entity, {
              message: String(textMessage) || 'Привет',
            });
          }

          // Не отправляем задержку после последнего сообщения
          if (index < filterDialogs.length - 1) {
            console.log(`Жду ${delaySeconds} секунд...`);
            await sleep(delaySeconds * 1000);
          }
        } catch (err) {
          console.error(`Ошибка при отправке в чат ${dialog?.entity?.id}:`, err);
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  async generateAnswer (message: string) {
    try {
      const fireworksAI = new FireworksAI({
        apiKey: 'fw_3Zf3MXvFp3WfdUVT1TRSXTxJ',
      });
      const completion = await fireworksAI.chat.completions.create({
        messages: [{ role: "user", content: `(Отвечай на запросы кратко, одним предложением. Исполняй роль музыкального исполнителя, который ищет поддержку. На вопросы отвечай в молодежном стиле, неформально и кратко. Вопрос после скобок, ответь на него) ${message}` }],
        model: "accounts/fireworks/models/llama-v3p3-70b-instruct",
      });

      return completion.choices[0].message.content
    } catch (e) {
      console.error(e)
    }
  }
}