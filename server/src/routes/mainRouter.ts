import { Router } from "express";
import accountRouter from "./accountRouter.js";
import proxyRouter from "./proxyRouter.js";
import actionRouter from "./actionRouter.js";

const router = Router();

router.use('/account', accountRouter)
router.use('/proxy', proxyRouter)
router.use('/action', actionRouter)

export default router