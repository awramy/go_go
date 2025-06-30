import {inject, injectable} from "tsyringe";
import {ClientService} from "./clientService.js";
import {Api} from "telegram";
import {Entity} from "telegram/define.js";
import {chatUser, simplifyUsers} from "../../types/types.js";
import {prisma} from "../../prisma.js";
import * as XLSX from "xlsx";

@injectable()
export class ParsingService {

  constructor(@inject(ClientService) private clientService: ClientService) {
  }

  async getChats (accountId: number) {
    try {
      await this.clientService.login(accountId)

      const res = await this.getUserChats()
      if (res) return res

      return null
    } catch (e) {
      throw e
    }
  }
  async parsing (accountId: number, chatUsername: string, tableTitle: string) {
    try {
      await this.clientService.login(accountId)

      const chat = await this.findChatByUsername(chatUsername)
      if(chat) {
        const users = await this.getParticipants(Number(chat.id))
        if (users) {
          const res = await this.saveChatUsers(tableTitle, accountId, users)
          if(res) {
            console.log(res)
            return {tableId: res.id, usersCount: res.users.length}
          }
        }
      }
      return null
    } catch (e) {
      throw e
    }
  }
  async saveDB (accountId: number, tableId: number,) {
    // id: 20,
    //   name: 'nameless_table',
    //   tg_accountId: 3,

    try {
      const res = await prisma.chatUserList.findFirst({
        where: {
          id: tableId,
          tg_accountId: accountId,
        },
        include: {
          users: true
        }
      })
      if(!res) return null
      return this.sendXLSX(res.users)
    } catch (e) {
      throw e
    }

  }

  //получение всех чатов клиента
  private async getUserChats () {
    if (!this.clientService.client) throw new Error('Client does not exist')
    const result: Api.Channel[] = []

    try {
      const dialogs = await this.clientService.client.getDialogs({
        limit: 100,
      })

      for (const dialog of dialogs) {
        const entity = dialog.entity as Entity

        if (entity instanceof Api.Channel && entity.megagroup) {
          result.push(entity)
        }
      }
      await this.clientService.disconnect()
      return result
    } catch (e) {
      console.log(e)
    }
  }

  //получение чата для парсинга по юзернейму
  private async findChatByUsername (username: string) {
    if (!this.clientService.client) throw new Error('Client does not exist')
    const result = await this.clientService.client.invoke(
      new Api.contacts.ResolveUsername({
        username,
      })
    );

    if(result.chats.length > 0 && result.chats[0] instanceof Api.Channel) {
      return result.chats[0]
    } else {
      return null
    }
  }
  //парсинг чата
  private async getParticipants(chatId: number) {
    if (!this.clientService.client) throw new Error('Client does not exist')

    const simplifyUsers: simplifyUsers = {
      count: 0,
      users: [],
    }
    let offset = 0
    const limit = 200
    let hasMore = true

    while (hasMore) {
      try {
        const participants = await this.clientService.client.invoke(
          new Api.channels.GetParticipants({
            channel: chatId,
            filter: new Api.ChannelParticipantsRecent(), // Все участники
            offset,
            limit,
          })
        )

        if (participants instanceof Api.channels.ChannelParticipants) {

          if(participants.users.length === 0) {
            hasMore = false
            break
          }
          if (offset === 0) simplifyUsers.count = participants.count
          offset += limit

          const newUsers = participants.users.map(user => {
            if (!(user instanceof Api.UserEmpty)) {
              return {
                id: user.id,
                username: user.username || '',
                firstname: user.firstName || '',
                phone: user.phone || ''
              }
            }
          })

          simplifyUsers.users = [...simplifyUsers.users, ...newUsers]

          await new Promise(resolve => setTimeout(resolve, 300));
        }
      } catch (e) {
        console.log('Неизвестный тип ошибки:', e);
      }
    }
    await this.clientService.disconnect()
    return simplifyUsers
  }
  //сохранение массива пользователей в таблицу с привязкой к аккаунту
  private async saveChatUsers (listName: string, accountId: number, users: simplifyUsers) {
    try {
      return await prisma.chatUserList.create({
        data: {
          name: listName,
          tg_accountId: accountId,
          users: {
            createMany: {
              data: users.users.map(user => ({
                username: user?.username,
                phone: user?.phone,
              }))
            }
          }
        },
        include: {
          users: true
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  //формирование и отправка таблицы с пользователями чата
  private async sendXLSX (data: chatUser[]) {
    const workbook = XLSX.utils.book_new()
    const worksheet = XLSX.utils.json_to_sheet(data)
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users')
    return XLSX.write(workbook, {type: 'buffer', bookType: 'xlsx'})
  }
}