import mongoose from "mongoose";    

const userSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim :true
        },
        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim :true
        },
        password : {
            type : String,
            required: true,
            select: false,
            minlength : 8,
            trim :true,
            select : false //prevet from password to leak
        },
         role: {
            type : String,
            enum: ["user", "admin","seller","moderator"],
            default: "user",
        },
        isActive : {
            type : Boolean,
            default : false
        }

    },{timestamps :true}
)

export const User = mongoose.model("User" , userSchema)