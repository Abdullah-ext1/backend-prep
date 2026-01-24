import mongoose from "mongoose";
import { Patient } from "./patient.models";
const medicalrecordSchema = mongoose.Schema(
    {
       name: {
        type: String,
        required: true
       },
       patientRecord: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
       },
       docterRecord: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Docter"
       }
    },{timestamps: true}
)
export const MedicalRecord = mongoose.model("MEdicalRecord" , medicalrecordSchema)