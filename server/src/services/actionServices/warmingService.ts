import {inject, injectable} from "tsyringe";
import {ClientService} from "./clientService.js";
import {BodyWarmingData, ChatHistory} from "../../types/types.js";
import {prisma} from "../../prisma.js";
import {Api} from "telegram";
import {sleep} from "telegram/Helpers.js";
import {FireworksAI, Role} from "@fireworksai/sdk";
import {NewMessage, NewMessageEvent} from "telegram/events";

@injectable()
export class WarmingService {
  constructor(@inject(ClientService) private clientService: ClientService) {
  }

  async createFakeUserRole (role: string, description: string) {
    try {
      return await prisma.fakeUserRole.create({
        data: {
          role, description
        }
      })
    } catch (e) {
      console.error(e)
      throw e
    }
  }
  async createWarmingData (accountId: number, warmingData: BodyWarmingData) {

    try {
      const res = await prisma.warmingData.create({
        data: {
          tg_accountId: accountId,
          userListId: Number(warmingData.userListId),
          fakeUserRoleId: Number(warmingData.fakeUserRoleId),
          timeLastStep: new Date(),
          timeStop: new Date(warmingData.timeStop),
          messagesPerHour: Number(warmingData.messagesPerHour),
          answersPerHour: Number(warmingData.answersPerHour),
          reactionsPerHour: Number(warmingData.reactionsPerHour),
          commentsPerHour: Number(warmingData.commentsPerHour),

          startDelay: Number(warmingData.startDelay),
        }
      })
      return res
    } catch (e) {
      console.error(e)
      throw e
    }

  }
  //основной метод - получение warmingData аккаунов по очереди и прогрев
  async warmingEngine () {
    try {
      console.log('START WARMING_ENGINE')
      //проверка, есть ли еще аккаунты с актуальной датой
      const checkToStop = await this.checkToStopWarming()
      if(checkToStop) {
        return {
          status: 'completed',
          message: 'Прогрев аккаунтов завершен'
        }
      }
      //получение warmingData аккаунта
      const targetData = await this.findWarmingData()
      //инициализируем счетчики
      let sendMessagesCounter = 0
      let sendAnswerCounter = 0
      let sendCommentsCounter = 0
      let sendReactionCounter = 0

      await this.clientService.connect(targetData.tg_accountId).then(async() => {
        while (sendAnswerCounter < targetData.answersPerHour || sendMessagesCounter < targetData.messagesPerHour) {
          if (sendAnswerCounter < targetData.answersPerHour) {
            const answers = await this.sendAnswer(undefined, targetData.startDelay, targetData.fakeUserRole.description, sendReactionCounter, targetData.reactionsPerHour)
            sendAnswerCounter += answers.answerCounter
            sendReactionCounter += answers.reactionCounter
            if (answers.answerCounter !== 0) {
              await sleep((targetData.startDelay || 10) * 2 * 1000)
            }
          }
          if (sendMessagesCounter < targetData.messagesPerHour) {
            const sendMessages = await this.sendNewMessages(targetData.userListId, 3, targetData.startDelay)
            sendMessagesCounter += sendMessages.sendCounter
            if (sendMessages.sendCounter !== 0) {
              await sleep((targetData.startDelay || 10) * 2 * 1000)
            }
          }
          if (sendCommentsCounter < targetData.commentsPerHour) {
            const sendComments = await this.sendComments(targetData.startDelay)
            sendCommentsCounter += sendComments.commentsCounter
            if (sendComments.commentsCounter !== 0) {
              await sleep((targetData.startDelay || 10) * 2 * 1000)
            }
          }
          console.log(`Цикл завершен, 
          сообщений: ${sendMessagesCounter}, 
          ответов: ${sendAnswerCounter}, 
          комментариев: ${sendCommentsCounter}, 
          реакций: ${sendReactionCounter}`)
        }
      })

      console.log(`Проходка окончена, сохраняю результаты...`)

      const updateWarmingData = await prisma.warmingData.update({
        where: {
          id: targetData.id
        },
        data: {
          timeLastStep: new Date(),
          stepCounter: {
            increment: 1
          },
          messagesCounter: {
            increment: sendMessagesCounter
          },
          answersCounter: {
            increment: sendAnswerCounter
          },
          commentsCounter: {
            increment: sendCommentsCounter
          },
          reactionsCounter: {
            increment: sendReactionCounter
          }
        }
      })

      await this.warmingEngine()
    } catch (e) {
      console.error(e)
    }
  }

  async test (id: number) {

    try {
      console.log('start')
      await this.clientService.connect(id)
      const res = await this.sendComments()
      return res
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  //метод для тестирования LLM
  async testGenerate (id: number, username: string) {
    await this.clientService.connect(id).then(async () => {
      if (!this.clientService.client) throw new Error('Client does not exist')

      const chat = await this.clientService.client.getEntity(username)
      if(!chat) return null
      const chatId = await this.clientService.client.getPeerId(chat)

      this.clientService.client.addEventHandler(async (event: NewMessageEvent) => {

        if(event.isPrivate && Number(chatId) === Number(event.message.senderId)) {
          if (!this.clientService.client) throw new Error('Client does not exist')

          const messages = await this.clientService.client.getMessages(chat, {})
          const cutMessages = messages.map((message) => {
            let role: Role
            message.fromId ? role = 'assistant' : role = 'user'
            return {
              role: role,
              content: message.message,
            }
          }).reverse()
          const context = 'Отвечай на запросы кратко, одним предложением. Исполняй роль музыкального исполнителя, который ищет поддержку. На вопросы отвечай в молодежном стиле, неформально и кратко, дпускаются ошибки в тексте и нецензурные слова. Веди себя как человек. Насроение - пасмурное. Для справки: Твое имя - Артем, псевдоним - Seroxy'
          const textMessage = await this.generateAnswer(cutMessages, context)

          await this.clientService.client.sendMessage(chatId, {
            message: String(textMessage) || 'Привет',
          });
        }
      }, new NewMessage())

    })

  }

  async checkToStopWarming () {
    const currentData = new Date(Date.now())
    const actualWarmingData = await prisma.warmingData.findFirst({
      where: {
        timeStop: {
          gt: currentData
        }
      }
    })
    return !actualWarmingData;
  }

  private async findWarmingData () {
    while (true) {
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000)
      // const oneHourAgo = new Date(Date.now())
      const targetData = await prisma.warmingData.findFirst({
        where: {
          timeLastStep: {
            lt: oneHourAgo
          }
        }, include: {
          fakeUserRole: true
        }
      })

      if (targetData) {
        return targetData
      }
      console.log('Готовые к прогреву аккаунты не найдены, жду 60 секунд')
      await sleep(60 * 1000)
    }
  }

  private async sendAnswer(limit: number = 100, delaySeconds: number = 10, fakeRoleContext: string, reactionsFullCounter: number, reactionsPerHour: number) {
    if (!this.clientService.client) throw new Error('Client does not exist')

    try {
      const dialogs = await this.clientService.client.getDialogs({
        limit: limit,
      });
      const filterDialogs = dialogs.filter(dialog => dialog.unreadCount > 0 && dialog.isUser)

      console.log(`Найдено ${dialogs.length} чатов с непрочитанными сообщениями`);

      let answerCounter = 0
      let reactionCounter = 0

      // Отправляем сообщения с задержкой
      for (const [index, dialog] of filterDialogs.entries()) {
        try {
          if (dialog.entity && dialog.entity instanceof Api.User) {
            console.log(`[${index + 1}/${filterDialogs.length}] Отправляю сообщение для ${dialog.entity.firstName || dialog.entity.username || dialog.entity.id}`);

            const messages = await this.clientService.client.getMessages(dialog.entity, {
              limit: 25
            })
            const cutMessages = messages.map(message => {
              let role: Role
              message.fromId ? role = 'assistant' : role = 'user'
              return {
                role: role,
                content: message.message,
              }
            }).reverse()

            const textMessage = await this.generateAnswer(cutMessages, fakeRoleContext)

            console.log(messages[0].text)
            console.log(textMessage)

            // if ((Math.floor(Math.random() * 3) === 0) && ((reactionsFullCounter + reactionCounter) < reactionsFullCounter)) {
            //   await this.sendReactions(dialog.entity, messages[0].id, '🤔')
            //   reactionCounter++
            // }

            await this.clientService.client.invoke(
              new Api.messages.ReadHistory({
                peer: dialog.entity,
                maxId: 0
              })
            );


            await this.clientService.client.sendMessage(dialog.entity, {
              message: String(textMessage) || 'Привет',
            });
            answerCounter++
          }

          // Не отправляем задержку после последнего сообщения
          if (index < filterDialogs.length - 1) {
            console.log(`Жду ${delaySeconds} секунд...`);
            await sleep(delaySeconds * 1000);
          }
        } catch (err) {
          console.error(`Ошибка при отправке в чат ${dialog?.entity?.id}:`);
        }
      }
      return {answerCounter: answerCounter, reactionCounter: reactionCounter}
    } catch (e) {
      console.error(e)
      return {answerCounter: 0, reactionCounter: 0}
    }
  }

  private async generateAnswer (messages: ChatHistory[], context: string) {
    let cutMessages: ChatHistory[]
    messages.length > 25 ? cutMessages = messages.slice(-25) : cutMessages = messages

    try {
      const fireworksAI = new FireworksAI({
        apiKey: 'fw_3Zf3MXvFp3WfdUVT1TRSXTxJ',
      });
      const completion = await fireworksAI.chat.completions.create({
        messages: [{ role: "system", content: `(${context})` }, ...cutMessages],
        model: "accounts/fireworks/models/llama-v3p3-70b-instruct",
      });

      return completion.choices[0].message.content
    } catch (e) {
      console.error(e)
    }
  }

  private async sendNewMessages (userListId: number, limit: number, delaySeconds: number = 10) {
    if (!this.clientService.client) throw new Error('Client does not exist')
    let sendCounter = 0
    while (sendCounter < limit) {
      try {
        const targetUser = await this.getNewDialogUser(userListId)
        if(!targetUser || !targetUser.username) {
          console.log('Проблемы с юзером, перехожу к следующему')
          continue
        }

        await this.clientService.client.sendMessage(targetUser.username, {
          message: 'Привет'
        })

        console.log(`Сообщение отправлено в новый чат ${targetUser.username}`)

        if(sendCounter < limit-1) {
          console.log(`Жду ${delaySeconds} секунд`)
          await sleep(delaySeconds * 1000)
        }
        sendCounter++
      } catch (e) {
        console.error(e)
      }
    }
    return { sendCounter: sendCounter }
  }

  private async sendComments (delaySeconds: number = 10) {
    if (!this.clientService.client) throw new Error('Client does not exist')
    try {
      let commentsCounter: number = 0
      //для начала получаем последние диалоги юзера по limit
      const dialogs = await this.clientService.client.getDialogs({});
      //проходкой map фильтруем диалоги, формируем запись {channel: канал(где будем брать пост), commentsChat: привязанный к нему чат-обсуждение}
      const commentsChats = await Promise.all(dialogs.map(async dialog => {
        if(dialog.entity && dialog.entity instanceof Api.Channel && !dialog.entity.megagroup) {
          if (!this.clientService.client) throw new Error('Client does not exist')
          const fullChannel = await this.clientService.client.invoke(
            new Api.channels.GetFullChannel({
              channel: dialog.id,
            })
          );
          if (!(fullChannel.fullChat instanceof Api.ChatFull) && fullChannel.fullChat.linkedChatId) {
            const commentsChat = await this.clientService.client.getEntity(fullChannel.fullChat.linkedChatId)
            if(commentsChat instanceof Api.Channel) {
              return {
                channel: dialog,
                commentsChat: commentsChat,
              }
            }
          }
        }
      }))
      //фильтруем, избавляя массив записей от null всяких там
      const filterChats = commentsChats.filter(chat => chat && chat.commentsChat.id)
      //проходкой по массиву каналов/обсуждений пишем комментарий в чат-обсуждение, привязывая к сообщению id двойника поста
      for (const [index, chat] of filterChats.entries()) {
        if(!chat) continue
        console.log(`[${index+1}/${filterChats.length}] Отправляю комментарий к посту в группе ${chat.channel.title}`)

        const [lastPost] = await this.clientService.client.getMessages(chat.channel.entity, { limit: 1 });
        if (lastPost instanceof Api.MessageEmpty) continue

        // Получаем сообщение-двойник в обсуждении
        const discussion = await this.clientService.client.invoke(
          new Api.messages.GetDiscussionMessage({
            peer: chat.channel.entity,
            msgId: lastPost.id,
          })
        );
        // discussion.messages[0] — это сообщение в чате обсуждений
        const discussionMsgId = discussion.messages[0]?.id;
        if (!discussionMsgId) throw new Error('Не найдено сообщение в обсуждении!');
        //генерируем комментарий (!ДОРАБОТАТЬ)
        const message = await this.generateAnswer([{role: Role.User, content: lastPost.message}], 'Исполняй роль парня, интересующегося соревновательным Counter Strike 2(киберспорт). Ответь на последнее сообщение так, как бы написал комментарий под постом, никому не адресуя. Выскажи свое мнение касательно ситуации, описанной в сообщении. Твой комментарий должен быть кратким и без эмоций. Следи за орфографией, не допускай символов на другом языке, кроме русского')
        //отправляем комментарий
        await this.clientService.client.sendMessage(chat.commentsChat, {
          message: String(message),
          replyTo: discussionMsgId,
        });
        commentsCounter++
        if(index < filterChats.length) {
          console.log(`Комментарий оставлен, жду ${delaySeconds} секунд`)
          await sleep(delaySeconds * 1000)
        }
      }
      return {commentsCounter: commentsCounter}
    } catch (e) {
      console.error(e)
      return {commentsCounter: 0}
    }
  }

  private async sendReactions (peerUser: Api.User, msgId: number, emoji: string) {
    if (!this.clientService.client) throw new Error('Client does not exist')
    try {
      await this.clientService.client.invoke(
        new Api.messages.SendReaction({
          peer: peerUser,
          msgId: msgId,
          reaction: [new Api.ReactionEmoji({ emoticon: emoji })],
          addToRecent: true,
        })
      );
    } catch (e) {
      console.error(e)
    }
  }

  private async getNewDialogUser (userListId: number) {
    try {
      return await prisma.$transaction(async tx => {
        const userList = await tx.chatUserList.findUnique({
          where: {id: userListId},
          include: {
            users: {
              orderBy: {id: 'desc'},
              take: 1
            }
          }
        })

        if (!userList || !Array.isArray(userList.users) || userList.users.length === 0) {
          return null
        }

        const [lastUser] = userList.users

        await tx.userData.delete({
          where: {id: lastUser.id}
        })

        return lastUser
      })
    } catch (e) {
      console.error(e)
      return null
    }
  }
}