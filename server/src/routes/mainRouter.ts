import { Router } from "express";
import accountRouter from "./accountRouter.js";
import proxyRouter from "./proxyRouter.js";

const router = Router();

router.use('/account', accountRouter)
router.use('/proxy', proxyRouter)

export default router