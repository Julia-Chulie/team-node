
import express from "express";
import {getUserById, getCurrentUser} from "../controllers/UserController.js";
import { verifyToken } from "../middleware/AuthenticatorGuard.js";


const userRouter = express.Router();

userRouter.get("/api/users/user/:id", verifyToken, getUserById); 
userRouter.get("/api/users/:token", getCurrentUser);


export default userRouter;

