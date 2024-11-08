import mongoose from "mongoose";

export const cursosModelo=mongoose.model(
    "cursos", 
    new mongoose.Schema(
        {
            nombre: String, 
            docente: String, 
            horas: Number
        },
        {
            timestamps:true
        }
    )
)