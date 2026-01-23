import mongoose from "mongoose";

//orderItem//
const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    }
})

//Customer//
const customerSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    Address: {
        type: String,
        required: true,
        trim: true
    },
    pincode: {
        type: Number,
        required: true
    }
})

//Payment//
 const paymentSchema = new mongoose.Schema({
    method: {
        type: String,
        enum: ["COD" , "UPI" , "Card"],
        required: true
    },
    status: {
        type: String,
        enum: ["Pending","Paid","Failed"],
        default: Pending,
    },
    transactionId: {
        type: String
    }
 })




const orderSchema = new mongoose.Schema({
   
    customer: customerSchema,

    items: {
        type: [orderItemSchema],
        required: true
    },

    totalPrice: {
        type: Number,
        require:true
    },
    orderStatus: {
        type: String,
        enum: ["placed", "confirmed", "shipped", "delivered", "cancelled"],
        required: true,
        default: "placed"
    },
    payment: paymentSchema

    

    },{timestamps: true}

)
export const Order = mongoose.model("Order", orderSchema )