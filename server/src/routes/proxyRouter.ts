import { Router } from 'express'
import ProxyController from "../controllers/proxyController.js";
const router = Router()

router.get('/', ProxyController.getProxy)
router.post('/', ProxyController.createProxy)
router.delete('/', ProxyController.deleteAllProxy)

export default router;