import { Router } from 'express'
import accountController from "../controllers/accountController.js";

const router = Router()

router.get('/', accountController.getAccounts)
router.post('/', accountController.createAccount)
router.put('/:id/proxy', accountController.linkProxyToAccount)
router.delete('/:id/proxy', accountController.disconnectProxy)

export default router;