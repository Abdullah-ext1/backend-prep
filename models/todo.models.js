import mongoose, { Types } from "mongoose"

const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        complete: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"     //.......this user came fromm usermodel.....
        },
        subTodo: [
            {
            tpye: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
            }
        ] //............Array of subtodo..............

    },
    { timestamps: true }
)

export const Todo = mongoose.model("Todo", todoSchema)