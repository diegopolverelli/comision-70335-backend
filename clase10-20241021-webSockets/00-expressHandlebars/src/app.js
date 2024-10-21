import express from 'express';
import {engine} from "express-handlebars"
import { suma } from './functions/varios.js';

import { router as vistasRouter } from './routes/vistasRouter.js';

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// suma

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

app.use(express.static("./src/public"))

app.use("/", vistasRouter)


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
