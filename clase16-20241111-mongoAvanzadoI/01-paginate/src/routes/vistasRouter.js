import { Router } from 'express';
import { UsuariosManager } from '../dao/UsuariosManager.js';
export const router=Router()

router.get('/usuarios',async(req,res)=>{

    let {page, limit}=req.query

    let {docs:usuarios, totalPages, hasNextPage, hasPrevPage, prevPage, nextPage}=await UsuariosManager.getUsuarios(page, limit)
    // console.log(usuarios)

    res.render("usuarios", {
        usuarios,
        totalPages, 
        hasNextPage, 
        hasPrevPage, 
        prevPage, 
        nextPage
    })
    
})