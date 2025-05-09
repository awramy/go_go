import {Request, Response} from "express";
import { prisma, Prisma } from "../prisma.js";

class ProxyController {
  //получения списка всех прокси со связанным объектом аккаунта
  async getProxy(req: Request, res: Response) {
    const result = await prisma.proxy.findMany({
      include: { //включаем поле Tg_account, которе либо null, либо с объектом аккаунта
        Tg_account: {
          select: {//выбираем только нужные нам поля
            id: true,
            phone: true,
          }
        }
      }
    })
    res.status(200).json(result)
  }
  //создание прокси, арг-ты передаем в body, isIPv6 и инф-ию об аккаунте можно не передавать
  async createProxy (req: Request, res: Response) {
    try {
      const proxyData: Prisma.ProxyCreateInput = req.body;
      const {type, host, port, login, password, isIPv6} = proxyData;

      console.log(typeof port)

      const result = await prisma.proxy.create({
        data: {
          type, host, port: Number(port), login, password, isIPv6
        }
      })
      res.status(200).json(result);
    } catch (e) {
      if (e instanceof Error) {
        res.status(400).json(e.message)
      } else res.status(500).json('unknown error')
    }
  }
  //просто удаляет все прокси
  async deleteAllProxy (req: Request, res: Response) {
    const result = await prisma.proxy.deleteMany()
    res.status(200).json(result)
  }
}

export default new ProxyController()