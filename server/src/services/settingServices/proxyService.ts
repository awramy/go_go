import {Prisma, prisma} from "../../prisma.js";
import {injectable} from "tsyringe";

@injectable()
export class ProxyService {
  getAll () {
    return prisma.proxy.findMany({
      include: { //включаем поле Tg_account, которе либо null, либо с объектом аккаунта
        Tg_account: {
          select: {//выбираем только нужные нам поля
            id: true,
            phone: true,
          }}}
    })
  }
  create (proxyData: Prisma.ProxyCreateInput) {
    const {type, host, port, login, password, isIPv6} = proxyData

    return  prisma.proxy.create({
      data: {
        type, host, port: Number(port), login, password, isIPv6
      }
    })
  }
  deleteAll () {
    return  prisma.proxy.deleteMany()
  }
}
