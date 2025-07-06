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
router.post('/parsingTest/:id', parsingController.parsingTest.bind(parsingController))

//warming
router.post('/warming/createData/:id', warmingController.createWarmingData.bind(warmingController))
router.get('/warming/:id', warmingController.warming.bind(warmingController))
router.post('/warming/createFakeRole', warmingController.createFakeRole.bind(warmingController))
router.get('/test/:id', warmingController.test.bind(warmingController))

export default router