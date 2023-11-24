import crypto, { createHmac } from 'crypto'
import dotenv from 'dotenv'

dotenv.config()
const {SECRET_HASH} = process.env
 const hashPassword = (password) => {
  
    const hash = createHmac('sha256',SECRET_HASH)
                .update(password)
                .digest('hex')

    return hash;
}

export default hashPassword;