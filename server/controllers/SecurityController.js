import UserModel from '../models/UserModel.js';
import { createToken } from '../utils/createToken.js';
import hashPassword  from '../utils/hashPassword.js';
import testRegister from '../utils/securityTest.js';

export const register = async (req,res) => {
    const { password , email , lastname,firstname} = req.body
    console.log(req.body);
    const user = new UserModel(req.body);
    const userExist = await UserModel.findOne({ email}).exec();
    if(userExist) {
        res.status(403).send({error:true,message:'Ce compte existe déja'});
        return;
    }

    if(testRegister.testEmail(email) === false){
        res.status(401).send({error : true, message:'Le mot de passe doit contenir au moins une majuscule, une minuscule , un chiffre , un caractère special et faire au minimum 8 caractères'});
    }else if(testRegister.testPassword(password) === false){
        res.status(401).send({error : true, message:'L\'email n\'est pas valide'});
    }else if(testRegister.testNames(lastname) === false){
        res.status(401).send({error : true, message:'Le nom doit contenir au moins 2 caractères'});
    }else if(testRegister.testNames(firstname) === false){
        res.status(401).send({error : true, message:'Le prénom doit contenir au moins 2 caractères'});
    }
    else{
        user.password = hashPassword(password)
        await user.save()
        res.send({message:'Votre compte a bien été créé'});
    }
}


export const login = async (req,res) => {
        console.log(req.body);
    const {password,email} = req.body

    const user = await UserModel.findOne({email}).exec();

    if(!user || hashPassword(password) !== user.password){
        res.status(403).send({message:'Identifiants incorrects'});
    }else{console.log(user.role);
        const token = createToken(user._id,user.role,user.email);
        console.log(token)
        res.status(200).send({message:'Succès de la connexion',token:token});
    }
}
