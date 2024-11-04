import { Router } from 'express';
import { UsuariosManager } from '../dao/UsuariosManager.js';
import { isValidObjectId } from 'mongoose';
export const router=Router()

router.get('/',async(req,res)=>{

    try {
        let usuarios=await UsuariosManager.getUsers()
        res.setHeader('Content-Type','application/json')
        res.status(200).json({usuarios})
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`${error.message}`})
    }

})

router.post("/", async(req, res)=>{
    let {nombre, email, password, rol, edad}=req.body
    if(!nombre || !email || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Faltan datos`})
    }

    // validaciones...

    // operaciones pertinentes... hash password...

    try {
        let nuevoUsuario=await UsuariosManager.createUser({nombre, email, password, rol, edad})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoUsuario});
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`${error.message}`})
    }
})


router.put("/:id", async(req, res)=>{
    let {id}=req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Id inválido`})
    }

    let datosAModificar=req.body

    // validaciones pertinentes...

    try {
        let usuarioModificado=await UsuariosManager.updateUser(id, datosAModificar)
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({usuarioModificado});
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`${error.message}`})
    }
})