import express from 'express';
import { uploader } from './utils.js';
import fs from "fs"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.post("/api/usuarios", uploader.single("foto"), (req, res)=>{
    let {nombre}=req.body
    if(!nombre){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`complete nombre`})
    }
    if(!req.file){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`complete imagen`})
    }

    let {originalname, path, size, mimetype}=req.file
    let tipoArchivo=mimetype.split("/")[0]
    if(tipoArchivo!=="image"){
        // eliminar archivo
        fs.unlinkSync(path)
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`solo se admiten imagenes...!!!`})
    }

    // validaciones varias
    // grabar usuario en DB... 

    res.status(201).send({
        message:`Usuario creado: ${nombre}`,
        datosImagen:{
            originalname, path, size, mimetype
        }
    })


})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
