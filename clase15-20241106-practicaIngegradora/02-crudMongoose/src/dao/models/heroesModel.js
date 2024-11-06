import mongoose from "mongoose";

export const heroesModelo=mongoose.model(
    "heroes",
    new mongoose.Schema(
        {
            name: {
                type: String, unique: true
            },
            alias: String,
            team: String, 
            publisher: String
        },
        {
            timestamps: true,
            strict: false
        }
    )
)