import { Request, Response } from "express";
import { prisma, Prisma } from "../prisma.js";
class AccountController {
  //получения списка аккаунтов, включая связанный объект proxy
  getAccounts = async (req: Request, res: Response) => {
    try {
      const result = await prisma.tg_account.findMany({
        include: {
          proxy: true // включаем связанный объект Proxy
        }
      })
      res.status(200).json(result)
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json(e.message)
      } else res.status(500).json('unknown error')
    }
  }
  //создание аккаунта
  createAccount = async (req: Request, res: Response) => {
    try {
      const accountData: Prisma.Tg_accountCreateInput = req.body;
      const { phone, username, firstname, lastname, session} = accountData

      console.log(accountData)

      const account = await prisma.tg_account.create({
        data: {
          phone,
          username,
          firstname,
          lastname,
          session
        }
      })

      res.status(200).json(account)
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json(e.message)
      } else res.status(500).json('unknown error')
    }
  }
  //привязка/пере-привязка прокси к аккаунту
  linkProxyToAccount = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      console.log(id)
      const proxyId = req.body.proxyId

      if (!id || !proxyId) {
        res.status(400).json('proxy or account id not found')
      } else {
        //обновление прокси у аккаунта
        const result = await prisma.tg_account.update({
          where: {id: Number(id)}, //ищем прокси по id
          data: { //данные, которые будем обновлять
            proxy: { //выбираем поле proxy у аккаунта
              connect: { //находим по proxyId запись прокси и привязываем к аккаунту
                id: Number(proxyId)
              }
            }
          }
        })
        res.status(200).json(result)
      }
    } catch (e) {
      if (e instanceof Error) {
        res.status(400).json(e.message)
      } else res.status(500).json('unknown error')
    }
  }
  //отвязка прокси от аккаунта
  disconnectProxy = async (req: Request, res: Response) => {
    const id = req.params.id

    const result = await prisma.tg_account.update({
      where: {id: Number(id)},
      data: {
        proxy: {
          disconnect: true
        }
      },
      include: {
        proxy: true
      }
    })
    res.status(200).json(result)
  }
}

export default new AccountController()