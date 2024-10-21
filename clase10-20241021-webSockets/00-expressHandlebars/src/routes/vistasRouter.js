import { Router } from 'express';
import { UsuariosManager } from '../dao/UsuariosManager.js';
export const router=Router()

router.get('/',(req,res)=>{

    let {nombre}=req.query

    res.render("home", {
        nombre, estilo:"styles"
    })
})
router.get('/usuarios',(req,res)=>{

    let usuarios=UsuariosManager.getUsers()

    res.render("usuarios", {
        usuarios,
        estilo:"usuarios"
    })
})