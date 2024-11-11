import { Router } from 'express';
import { UsuariosManager } from '../dao/UsuariosManager.js';
export const router=Router()

router.get('/',async(req,res)=>{
    let {page, limit}=req.query

    let usuarios=await UsuariosManager.getUsuarios(page, limit)
    console.log(usuarios)
    usuarios={
            usuarios:usuarios.docs, 
            ...usuarios
        }
    delete usuarios.docs

    res.setHeader('Content-Type','application/json')
    res.status(200).json(usuarios)
})