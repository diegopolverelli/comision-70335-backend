import {Router} from "express" 
import { UsuariosManager } from "../dao/UsuariosManager.js"
export const router=Router()

router.get("/usuarios", async(req, res)=>{

    let usuarios=await UsuariosManager.getUsers()
    // console.log(usuarios)
    console.log(usuarios[0])
    console.log(Object.keys(usuarios[0]))
    // console.log(Object.keys(usuarios[0].toJSON()))

    // usuarios=[
    //     {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    //     {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    //     {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
    // ]
    // console.log(usuarios)
    

    res.render("usuarios", {
        usuarios
    })
})