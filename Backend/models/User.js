import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        FullName: {
            type: String,
            

        },
        Email: {
            type: String,
            


        },
        Password: {
            type: String,
            

        },

        Photo: {
            type: String,
            

        },

    },
    { timestamps: true },
)

export default mongoose.model("User", userSchema)

 