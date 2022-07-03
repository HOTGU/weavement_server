import express from "express";
import { get, refresh, signin, signup } from "../controllers/userController.js";
import { verifyIsAdmin, verifyUser } from "../middleware/verify.js";

const userRouter = express.Router();

userRouter.post("/signin", signin);

userRouter.post("/signup", signup);

userRouter.post("/refresh", refresh);

userRouter.get("/get", verifyUser, verifyIsAdmin, get);

export default userRouter;
