import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
            lowercase: true,

        }
    },
    { timestamps: true }
)

export const User = mongoose.model("User", userSchema)
//both name should be sameeee or diff but make it same {User}
// "U"should be capital and in database is stores as users (plural and small letter)