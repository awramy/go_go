import {Request, Response} from "express";
import { Prisma } from "../prisma.js";
import {ProxyService} from "../services/settingServices/proxyService.js";

export class ProxyController {

  //пробрасываем сервис в конструктор (указываем инстанс сервиса при создании экземпляра контроллера)
  constructor(private proxyService: ProxyService) {}

  //получение списка всех прокси со связанным объектом аккаунта
  async getProxy(req: Request, res: Response) {
    try {
      const result = await this.proxyService.getAll()
      // const result = 'ok'
      res.status(200).json(result)
    } catch (e) {
      if (e instanceof Error) {
        res.status(400).json(e.message)
      } else res.status(500).json('Unknown error')
    }
  }
  //создание прокси, арг-ты передаем в body, isIPv6 и инф-ию об аккаунте можно не передавать
  async createProxy (req: Request, res: Response) {
    console.log('createProxy')
    try {
      const proxyData: Prisma.ProxyCreateInput = req.body;
      const result = await this.proxyService.create(proxyData)

      res.status(200).json(result);
    } catch (e) {
      if (e instanceof Error) {
        res.status(400).json(e.message)
      } else res.status(500).json('unknown error')
    }
  }
  //просто удаляет все прокси
  async deleteAllProxy (req: Request, res: Response) {
    const result = await this.proxyService.deleteAll()
    res.status(200).json(result)
  }
}