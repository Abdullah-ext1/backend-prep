import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema(
    {
        description:{
            type: string,
            required:true
        },
        name: {
            type: string,
            required: true,
        },
        quantity:{
            type: Number,
            default: 0
        },
        price: {
            type: Number,
            default: 0
        },
        producctImage: {
            type : string
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        


        

    },
    {timestamps: true}
)

export const Product = mongoose.model("Product" , productSchema)