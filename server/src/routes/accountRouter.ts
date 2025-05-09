import { Router } from 'express'
import accountController from "../controllers/accountController.js";

const router = Router()

router.get('/', accountController.getAccounts)
router.post('/', accountController.createAccount)

export default router;