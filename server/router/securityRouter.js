import express from "express";
import { register, login } from "../controllers/SecurityController.js";


const securityRouter = express.Router()

securityRouter.post('/api/register', register);
securityRouter.post('/api/login',login);


export default securityRouter;