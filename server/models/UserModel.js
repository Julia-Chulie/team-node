import mongoose from "mongoose";
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    lastname: {
        type: String,
         required: true,
          minLength: 2 ,
          validate: value => {
        if(value ==="" || value.length <= 3){
            throw  new Error('Nom trop court')
        }
    }},
    firstname: {
        type: String,
        required: true,
        minLength: 2,
        validate: value => {
        if(value ==="" || value.length <= 3){
            throw  new Error('Prénom trop court')
        }
    }},
    email: {
        type: String,
        required: true ,
        trim:true ,
        unique:true
        },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Array,
        default: ["ROLE_USER"]},
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
},{
    timestamps: true
    });

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;