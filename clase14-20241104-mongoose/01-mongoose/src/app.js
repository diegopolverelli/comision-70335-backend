import express from 'express';
import mongoose from "mongoose"

import { router as usuariosRouter } from './routes/usuariosRouter.js';

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/usuarios", usuariosRouter)

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