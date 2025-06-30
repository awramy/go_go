import {prisma} from "../../prisma.js";
import {injectable} from "tsyringe";

@injectable()
export class SessionService {
  updateOrCreate (accountId: number, session: {sessionString: string, apiId: string, apiHash: string}) {
    //если у аккаунта уже есть sessionId, то просто обновляем сессию
    //если нет, то создаем сессию и привязываем к акканту
    try {
      return prisma.$transaction(async (trx) => {
        const account = await prisma.tg_account.findUnique({
          where: { id: accountId },
        });
        if (!account) {
          return new Error('Account not found');
        }
        if (account.sessionId) {
          return trx.session.update({
            where: {id: account.sessionId},
            data: session
          })
        }

        const newSession = await trx.session.create({
          data: session
        })

        return trx.tg_account.update({
          where: {id: accountId},
          data: {
            sessionId: newSession.id
          }
        })
      })
    } catch (e) {
      throw e
    }
  }
}