import { Router } from 'express';
import { HeroesManager } from '../dao/HeroesManager.js';
export const router=Router()

router.get('/',(req,res)=>{
    let {nombre}=req.query
    if(!nombre) nombre="indeterminado"
    
    res.render("home", {
        nombre
    })
})

router.get("/heroe", (req, res)=>{

    let heroes=HeroesManager.getHeroes()
    let numero=Math.floor(Math.random()*(20)+0)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)

    let heroe=heroes[numero]

    res.render("heroes",{
        heroe
    })
})

router.get("/heroes", (req, res)=>{
    let {nombre}=req.query
    let heroes=HeroesManager.getHeroes()

    res.render("listadoheroes", {heroes, nombre})
})