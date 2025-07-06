import {inject, injectable} from "tsyringe";
import {Request, Response} from "express";
import {WarmingService} from "../services/actionServices/warmingService.js";
import {BodyWarmingData} from "../types/types.js";
import {FireworksAI} from "@fireworksai/sdk";

@injectable()
export class WarmingController {
  constructor(@inject (WarmingService) private warmingService: WarmingService) {
  }

  async createWarmingData (req: Request<{id: number}, {}, BodyWarmingData>, res: Response) {
    try {
      const {id} = req.params
      console.log(req.body)

      const result = await this.warmingService.createWarmingData(Number(id), req.body)
      res.status(200).send(result)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async warming (req: Request<{id: number}>, res: Response) {
    try {
      const {id} = req.params
      const result = await this.warmingService.warmingEngine()
      res.status(200).send(result)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async createFakeRole (req: Request<{}, {}, {role: string, description: string}>, res: Response) {
    try {
      const { role, description } = req.body
      const result = await this.warmingService.createFakeUserRole(role, description)
      res.status(200).send(result)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async test (req: Request, res: Response) {
      const {id} = req.params
      console.log('control')
      const result = await this.warmingService.test(Number(id))
      if(result)
        res.status(200).json(result)
  }
}