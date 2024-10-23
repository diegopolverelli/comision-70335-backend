import { Router } from 'express';
export const router=Router()

router.get('/',(req,res)=>{

    // res.send("hola")
    res.render("home", {})
})

router.get('/chat',(req,res)=>{

    res.render("chat", {})
})