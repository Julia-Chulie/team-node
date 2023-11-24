import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

export const createToken = (_id,roles,email) => {

    dotenv.config()
    const token = jwt.sign({_id,roles,email}, process.env.SECRET_KEY, {expiresIn: '48h'})
    return token
}