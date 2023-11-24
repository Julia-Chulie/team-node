

import dotenv from 'dotenv';
dotenv.config()


export const SECRET_HASH = process.env.SECRET_HASH;

export const SECRET_KEY = process.env.SECRET_KEY;



export const ROLE_USER = ["ROLE_USER"]

export const ROLE_ADMIN = ["ROLE_ADMIN","ROLE_USER"]