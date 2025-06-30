import { Router } from 'express'
import { ProxyController } from "../controllers/proxyController.js";
import { ProxyService } from "../services/settingServices/proxyService.js"

const router = Router()
const proxyController = new ProxyController(new ProxyService())

router.get('/', proxyController.getProxy.bind(proxyController))
router.post('/', proxyController.createProxy.bind(proxyController))
router.delete('/', proxyController.deleteAllProxy.bind(proxyController))

export default router;