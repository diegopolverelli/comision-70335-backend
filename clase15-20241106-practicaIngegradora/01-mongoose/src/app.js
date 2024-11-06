import express from 'express';
import mongoose from "mongoose"
import {engine} from "express-handlebars"

import { router as vistasRouter } from './routes/vistasRouter.js';
import { router as usuariosRouter } from './routes/usuariosRouter.js';

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.engine("handlebars", engine({}))
app.set("view engine", "handlebars")
app.set("views", "./src/views")

app.use("/api/usuarios", usuariosRouter)
app.use("/", vistasRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});


const conectaDB=async()=>{
    try {
        await mongoose.connect(
            "mongodb+srv://backend70335:CoderCoder@cluster0.jnfai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
            {
                dbName: "clase14"
            }
        )
        console.log(`DB online...!!!`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}
conectaDB()