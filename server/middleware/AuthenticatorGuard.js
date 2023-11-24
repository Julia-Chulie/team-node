import { jwtDecode } from "jwt-decode";
import dotenv from  'dotenv'

export const verifyToken = (req,res,next) => {
    const token = req.body.verifyToken;
    const token1 = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Accès non autorisé' });
    }

    try {
        const decodedtoken = jwtDecode.verify(token,process.env.SECRET_HASH)
        if(decodedtoken.roles = ['ROLE_ADMIN']) {
            next()
        }
    } catch (error) {
        
    }

}