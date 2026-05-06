import productRoutes from "./product.routes";
import authRouter from "./auth.route";
import { Router } from "express";

const RootRouter = Router();

RootRouter.use("/auth", authRouter);
RootRouter.use("/product", productRoutes);

export default RootRouter;