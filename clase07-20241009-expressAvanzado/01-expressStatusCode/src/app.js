import express from 'express';
// import { UsuariosManager } from './dao/UsuariosManager.js';
import {UsuariosManager} from "./dao/UsuariosManager.js"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const usuariosManager=new UsuariosManager("./src/data/Usuarios.json")

app.get('/',(req,res)=>{

    res.send("Home Page")
})

app.get("/usuarios", async(req, res)=>{

    let {nombre, limit, skip}=req.query
    
    let usuarios=await usuariosManager.getUsuarios()
    if(nombre){
        usuarios=usuarios.filter(u=>u.nombre.toLowerCase()===nombre.trim().toLowerCase())
    }
    if(!limit){
        limit=usuarios.length
    }else{
        limit=Number(limit)
        // "juan" NaN
        if(isNaN(limit)){
            return res.status(400).send({error:`Error: el limit debe ser numérico`})
        }
    }
    if(!skip){
        skip=0
    }else{
        skip=Number(skip)
        // "juan" NaN
        if(isNaN(skip)){
            return res.status(400).send({error:`Error: el skip debe ser numérico`})
        }
    }
    usuarios=usuarios.slice(skip, limit+skip)
    res.status(200).send({usuarios})
})

app.get("/usuarios/:id", async(req, res)=>{

    let {id}=req.params
    id=Number(id)
    // "juan" NaN
    if(isNaN(id)){
        return res.status(400).send({error:`Error: el id debe ser numérico`})
    }    

    let usuarios=await usuariosManager.getUsuarios()
    let usuario=usuarios.find(u=>u.id===id)

    if(!usuario){
        return res.status(404).send({error:`No existen usuarios con id ${id}`})  
        // return res.send(404, {error:`No existen usuarios con id ${id}`})  
    }
   

    res.status(200).send({usuario})
})

app.get("/suma", (req, res)=>{

    let resultado=2+2
    // res.send(resultado)  // error
    res.send(`resultado= ${resultado}`)
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
