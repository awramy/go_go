import {inject, injectable} from "tsyringe";
import {Request, Response} from "express";
import {ParsingService} from "../services/actionServices/parsingService.js";

@injectable()
export class ParsingController {
  constructor(@inject(ParsingService) private parsingService: ParsingService) {}

  async getChats(req: Request<{id: number}>, res: Response) {
    const {id} = req.params
    const result = await this.parsingService.getChats(Number(id))
    res.status(200).json(result)
  }
  async parsingChat(req: Request<{id: number}, {}, {chatUsername: string, tableTitle: string}>, res: Response) {
    const {id} = req.params
    const {chatUsername, tableTitle = 'nameless_table'} = req.body
    const result = await this.parsingService.parsing(Number(id), chatUsername, tableTitle)
    res.status(200).json(result)
  }
  async saveDB(req: Request<{id: number}, {}, {tableId: number}>, res: Response) {
    const {id} = req.params
    const {tableId} = req.body
    const buffer = await this.parsingService.saveDB(Number(id), Number(tableId))
    res.setHeader('Content-Disposition', `attachment; filename=${'chat_users'}.xlsx`)
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')

    res.end(buffer)
  }


}