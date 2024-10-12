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
            return res.send(`Error: el limit debe ser numérico`)
        }
    }
    if(!skip){
        skip=0
    }else{
        skip=Number(skip)
        // "juan" NaN
        if(isNaN(skip)){
            return res.send(`Error: el skip debe ser numérico`)
        }
    }
    usuarios=usuarios.slice(skip, limit+skip)
    res.send(usuarios)
})

app.get("/usuarios/:id", async(req, res)=>{

    let {id}=req.params
    id=Number(id)
    // "juan" NaN
    if(isNaN(id)){
        return res.send(`Error: el id debe ser numérico`)
    }    

    let usuarios=await usuariosManager.getUsuarios()
    let usuario=usuarios.find(u=>u.id===id)

    if(!usuario){
        return res.send(`No existen usuarios con id ${id}`)  
    }

    res.send(usuario)

})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
