import { jwtDecode } from "jwt-decode";
import dotenv from  'dotenv'
import UserModel from "../../models/UserModel";
export const verifyToken = async (req, res, next) => {
    try {
        const token = req.body.token;
        const headerToken = req.header('Authorization');

        const decodedToken = jwtDecode.verify(token, process.env.SECRET_HASH);
        const userId = decodedToken._id;
        const userExist = await UserModel.findOne({ _id: userId }).exec();
        if (userExist) {
            req.user = userExist; 
            next();
        } else {
            return res.status(401).json({ message: 'Accès non autorisé, utilisateur non trouvé' });
        }
    } catch (error) {
        // En cas d'erreur de vérification du token
        console.error('Erreur de vérification du token :', error.message);
        return res.status(401).json({ message: 'Accès non autorisé, token non valide' });
    }
};