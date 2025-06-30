import { Router } from 'express'
import { ParsingController } from "../controllers/parsingController.js";
import {container} from "tsyringe";
import {WarmingController} from "../controllers/warmingController.js";

const router = Router()
const parsingController = container.resolve(ParsingController)
const warmingController = container.resolve(WarmingController)

//parsing
router.get('/getChats/:id', parsingController.getChats.bind(parsingController))
router.post('/parsing/:id', parsingController.parsingChat.bind(parsingController))
router.post('/saveDB/:id', parsingController.saveDB.bind(parsingController))

//warming
router.post('/warming/createData/:id', warmingController.createWarmingData.bind(warmingController))
router.get('/warming/:id', warmingController.warming.bind(warmingController))
router.get('/test', warmingController.test.bind(warmingController))

export default router