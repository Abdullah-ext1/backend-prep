import mongoose from "mongoose";
const patientSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        diadnosedWith: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        hospitalVisited: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        },
        address: {
            type: String,
            required: true
        },
        lastVisit: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MedicalRecord",
            default: "FirstVisit"
        },

    },{timestamps: true}
)
export const Patient = mongoose.model("Patient" , patientSchema)