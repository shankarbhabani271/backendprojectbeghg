import { Router } from "express";
import { loginController } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/login", loginController);

export default authRouter;