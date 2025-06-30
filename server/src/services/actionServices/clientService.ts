import {prisma} from "../../prisma.js";
import {TelegramClient} from "telegram";
import {injectable} from "tsyringe";
import {StringSession} from "telegram/sessions/index.js";

@injectable()
export class ClientService {
  client: TelegramClient | null = null;

  async connect (id: number) {
    await this.createActiveSession(id)
      .then(() => this.login()
        .then(() => {
          if (!this.client) throw new Error('Client does not exist')
          this.getMe()
        })).catch(e => {throw e})
    console.log(this.client?.connected)
  }
  async disconnect () {
    if (!this.client) throw new Error('Client does not exist')
    await this.client.disconnect()
  }

  private async createActiveSession (id: number) {
    const account = await prisma.tg_account.findUnique({
      where: {id}
    })
    if (!account?.sessionId) {
      throw new Error('Account or SessionID does not exist')
    }
    const session = await prisma.session.findUnique({
      where: {id: account.sessionId}
    })
    if (!session) {
      throw new Error('Account or SessionID does not exist')
    }

    try {
      const sessionString = new StringSession(session.sessionString)
      this.client = new TelegramClient(
        sessionString,
        Number(session.apiId),
        session.apiHash,
        {}
      )
      if(this.client) {
        console.log('Экземпляр клиента успешно создан')
      }
    } catch (e) {
      throw e
    }
  }
  private async login () {
    if (!this.client) throw new Error('Client does not exist')

    await this.client.connect()

    if (await this.client.checkAuthorization()) {
      console.log(`Успешная авторизация с готовой сессией`)
      return this.client
    } else throw new Error('Not authorized')
  }
  private async getMe () {
    if (!this.client) throw new Error('Client does not exist')
    const me = await this.client.getMe()
    console.log(`Авторизован как ${me.username}`)
    return me
  }
}