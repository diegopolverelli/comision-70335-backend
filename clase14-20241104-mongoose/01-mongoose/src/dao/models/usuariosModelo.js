import mongoose from "mongoose";

const usuarioSchema=new mongoose.Schema(
    {
        nombre: String, 
        email: {
            type: String, 
            unique: true
        }, 
        rol: {
            type: String, 
            default: "user"
        }, 
        edad: Number,
        password: String
    },
    {
        timestamps: true, 
        strict: false
    }
)

export const usuarioModelo=mongoose.model(
    "usuarios",
    usuarioSchema
    // new mongoose.Schema({},{})
)

// usuarioModelo.find({nombre:"Juan"},{nombre:1, _id:0}).sort({nombre:-1})
// usuarioModelo.find({_id: "asdfadfasdf9d8d8d8", nombre:"Juan"},{nombre:1, _id:0}).sort({nombre:-1})
// usuarioModelo.findById("adf8asd9flasdfadf8")