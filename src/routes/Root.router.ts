import userouter from "$/routes/User.route.js";
import {Router} from "express"
const RootRouter = Router();

RootRouter.use("/auth",userouter)
export default  RootRouter