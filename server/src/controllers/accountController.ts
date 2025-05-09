import { Request, Response } from "express";
import { prisma, Prisma } from "../prisma.js";
class AccountController {

  getAccounts = async (req: Request, res: Response) => {
    try {
      const result = await prisma.tg_account.findMany()
      res.status(200).json(result)
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).json(e.message)
      } else res.status(500).json('unknown error')
    }
  }

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

}

export default new AccountController()