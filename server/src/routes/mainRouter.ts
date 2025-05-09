import { Router } from "express";
import accountRouter from "./accountRouter.js";

const router = Router();

router.use('/account', accountRouter)

export default router