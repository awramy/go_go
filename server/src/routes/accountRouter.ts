import { Router } from 'express'
import {container} from "tsyringe";
import {AccountController} from "../controllers/accountController.js";

const accountController = container.resolve(AccountController);


const router = Router()

router.get('/', accountController.getAccounts)
router.post('/', accountController.createAccount)

router.put('/:id', accountController.updateAccount)

router.put('/:id/proxy', accountController.linkProxyToAccount)
router.delete('/:id/proxy', accountController.disconnectProxy)

router.post('/:id/session', accountController.updateSession)
router.post('/:id/session/verify', accountController.verifySession)

export default router;