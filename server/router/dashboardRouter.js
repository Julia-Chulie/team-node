import express from "express"
import { verifyToken } from "../middleware/AuthenticatorGuard.js";
const router = express.Router()

router.get("/dashboard",verifyToken, (req, res) => {
})

export default router;