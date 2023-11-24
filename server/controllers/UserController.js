import UserModel from "../models/UserModel.js"
import jsonwebToken from 'jsonwebtoken'
import {SECRET_KEY} from '../utils/const/constant.js'


export const getUserById = async (req,res) => {
    const {id} = req.params
    const user = await UserModel.findById(id).exec()
    if(!user){
        res.status(401).send("L'utilisatteur n'existe pas")
    }else{
        const userObject = {
            _id:user._id,
            lastname:user.lastname,
            firstname:user.firstname,
            email:user.email,
        }
        return res.status(200).json(userObject)
    }
}
export const getCurrentUser = async (req,res) => {
    const {token} = req.params
    console.log(req.params);
    const decodedToken = jsonwebToken.verify(token,SECRET_KEY);
        const user =await UserModel.findById(decodedToken._id).exec()
        console.log('user',user);
        if(!user){
          res.status(401).send("L'utilisatteur n'existe pas")
        }else{
          
          const userObject = {
            _id:user._id,
            lastname:user.lastname,
            firstname:user.firstname,
            email:user.email,
        }
            res.status(200).send(userObject);
        }
}