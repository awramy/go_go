import { Request, Response } from "express";
import { Prisma } from "../prisma.js";
import {AccountService} from "../services/settingServices/accountService.js";
import {inject, injectable} from "tsyringe";

@injectable()
export class AccountController {

  constructor(@inject(AccountService) private accountService: AccountService) {}

  //получения списка аккаунтов, включая связанный объект proxy
  getAccounts = async (req: Request, res: Response) => {
    try {
      const result = await this.accountService.getAll()
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
      const result = await this.accountService.create(accountData)
      res.status(200).json(result)
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json(e.message)
      } else res.status(500).json('unknown error')
    }
  }
  //обновление данных аккаунта по id
  updateAccount = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const data = req.body //поля должны принадлежать Tg_account(нельзя преедавать proxy, comments)
      const result = await this.accountService.updateOne(Number(id), data)

      res.status(200).json(result)
    } catch (e) {
      if (e instanceof Error) {
        res.status(400).json(e.message)
      } else res.status(500).json('unknown error')
    }
  }
  //привязка/пере-привязка прокси к аккаунту
  linkProxyToAccount = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const proxyId = req.body.proxyId

      if (!id || !proxyId) {
        res.status(400).json('proxy or account id not found')
      }

      const result = await this.accountService.updateProxy(Number(id), Number(proxyId))
      res.status(200).json(result)

    } catch (e) {
      if (e instanceof Error) {
        res.status(400).json(e.message)
      } else res.status(500).json('unknown error')
    }
  }
  //отвязка прокси от аккаунта
  disconnectProxy = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const result = await this.accountService.disconnectProxy(Number(id))
      res.status(200).json(result)
    } catch (e) {
      if (e instanceof Error) {
        res.status(400).json(e.message)
      } else res.status(500).json('unknown error')
    }
  }
  //контроллер на создание неподтвержденной сессии, в res - {status: success}
  updateSession = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const {apiId, apiHash} = req.body
      if(!apiId || !apiHash) {
        res.status(400).json('proxy or account id not found')
      } else {
        const result = await this.accountService.updateSession(Number(id), Number(apiId), String(apiHash))
        console.log(result)
        res.status(200).json(result)
      }
    } catch (e) {
      if (e instanceof Error) {
        res.status(400).json(e.message)
      } else res.status(500).json('unknown error')
    }
  }
  //контроллер на подтверждение + готовая сессия, в res - IAccount
  verifySession = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const {code} = req.body
      if (!id || !code) {
        res.status(400).json('code or account id not found')
      } else {
        const result = await this.accountService.verifySession(Number(id), String(code))
        res.status(200).json(result)
      }
    } catch (e) {
      if (e instanceof Error) {
        res.status(400).json(e.message)
      } else res.status(500).json('unknown error')
    }
  }
}
