
import express from "express";
import {getUserById, getCurrentUser} from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.get("/api/users/user/:id",getUserById); 
userRouter.get("/api/users/:token", getCurrentUser);


export default userRouter;

