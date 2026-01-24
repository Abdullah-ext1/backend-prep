import mongoose from "mongoose";
const docterSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        workInHospital: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Hospital"
            }
        ],
        experianceInYear: {
            type: String,
            default: 0 
        },
        qualification: {
            type: String,
            required: true 
        },
        salary: {
            type: String,
            rewuired: true 
        },
        workingHours: {
            type: Number,
            required: true
        },
        specialisedIn: {
            type: String,
            enum: ["Cardiologists","Dermatologists","Endocrinologists","Gastroenterologists","Neurologists","Ophthalmologists",
                "Pathologists","Physiatrists","Plastic Surgeons","Radiologists","Urologists",],
            required: true    
        }

    },{timestamps: true}
)
export const Docter = mongoose.model("Docter" , docterSchema)