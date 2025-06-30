import {Prisma, prisma} from "../../prisma.js";
import {Api, TelegramClient} from "telegram";
import { StringSession } from "telegram/sessions/index.js";
import {inject, injectable} from "tsyringe";
import {SessionService} from "./sessionService.js";

@injectable()
export class AccountService {
  private pendingVerification = new Map<number, {phone: string, client: TelegramClient, phoneCodeHash: string, apiId: string, apiHash: string}>()

  constructor(
    @inject(SessionService) private sessionService: SessionService
  ) {}

  getAll () {
    return prisma.tg_account.findMany({
      include: {
        proxy: true, // включаем связанный объект Proxy и Session
        session: true
      }
    })
  }
  create ( accountData: Prisma.Tg_accountCreateInput) {
    const { phone, username, firstname, lastname, session} = accountData

    return prisma.tg_account.create({
      data: {
        phone,
        username,
        firstname,
        lastname,
        session
      }
    })
  }
  updateOne (id: number, data: Pick<Partial<Prisma.Tg_accountCreateInput>, 'phone' | 'username' | 'firstname' | 'lastname'>) {
    return prisma.tg_account.update({
      where: {id: Number(id)},
      data
    })
  }
  updateProxy (id: number, proxyId: number) {
    return prisma.tg_account.update({
      where: {id}, //ищем прокси по id
      data: { //данные, которые будем обновлять
        proxy: { //выбираем поле proxy у аккаунта
          connect: { //находим по proxyId запись прокси и привязываем к аккаунту
            id: proxyId
          }
        }
      },
      include: {
        proxy: true
      }
    })
  }
  disconnectProxy (id: number) {
    return prisma.tg_account.update({
      where: {id},
      data: {
        proxy: {
          disconnect: true
        }
      },
      include: {
        proxy: true
      }
    })
  }
  async updateSession (id: number, apiId: number, apiHash: string) {
    const stringSession = new StringSession('')
    const client = new TelegramClient(stringSession, apiId, apiHash, {})

    const account = await prisma.tg_account.findFirst({
      where: {id}
    })
    if (!account) {
      throw new Error('account not found')
    }

    try {
      await client.connect()
      const { phoneCodeHash } = await client.sendCode({
        apiId,
        apiHash,
      }, account.phone)

      this.pendingVerification.set(id, {
        phone: account.phone, client, phoneCodeHash, apiId: String(apiId), apiHash
      })

      return {status: 'success'}
    } catch (e) {
      return e
    }
  }
  async verifySession (id: number, code: string) {
    const pending = this.pendingVerification.get(id)
    if (!pending) {
      throw new Error('Not found')
    }
    const {phone, client, phoneCodeHash, apiId, apiHash} = pending

    try {
      await client.invoke(
        new Api.auth.SignIn({
          phoneNumber: phone,
          phoneCodeHash,
          phoneCode: code
        })
      )
      const sessionString = (client.session as StringSession).save()
      return this.sessionService.updateOrCreate(id, {sessionString, apiId, apiHash})
    } catch (e) {
      return e
    }
  }
}