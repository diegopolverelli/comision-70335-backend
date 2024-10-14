import {Router} from "express"
import { PersonajesManager } from "../dao/PersonajesManager.js"
import { procesaErrores } from "../utils.js"

export const router=Router()

PersonajesManager.setPath("./src/data/demonSlayer.json")

router.get("/", async(req, res)=>{
    try {
        let personajes=await PersonajesManager.getPersonajes()
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({personajes});
    } catch (error) {
        procesaErrores(res, error)
    }
})

router.get("/:id", async(req, res)=>{
    let {id}=req.params
    id=Number(id)  // "25" -> 25   // "juan" -> NaN  
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El id debe ser numérico`})
    }
    // Array
    // Object
    // String
    try {
        let personaje=await PersonajesManager.getPersonajeById(id)
        if(!personaje){
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error:`No existe personajes con id ${id} en DB`})
        }
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({personaje});
    } catch (error) {
        procesaErrores(res, error)
    }
})

router.post("/", async(req, res)=>{
    let {name, id, ...otros}=req.body  //... es en este caso operador rest 
    if(id){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No se puede indicar id`})
    }

    if(!name){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`name es requerido`})
    }

    try {
        // validaciones necesarias / pertinentes
        let personajes=await PersonajesManager.getPersonajes()
        let existe=personajes.find(p=>p.name.toLowerCase()===name.trim().toLowerCase())
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`${name} ya existe en DB`})
        }
        let nuevoPersonaje=await PersonajesManager.addPersonaje({name, ...otros})  // ... es spread
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoPersonaje});
    } catch (error) {
        procesaErrores(res, error)
    }
})

router.put("/:id", async(req, res)=>{
    let {id}=req.params
    id=Number(id)  // "25" -> 25   // "juan" -> NaN  
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El id debe ser numérico`})
    }

    let aModificar=req.body

    // validar ciertas cosas
    if(aModificar.id){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`no se puede modificar el id`})
    }
    // delete aModificar.id
    try {
        let personaje=await PersonajesManager.getPersonajeById(id)
        if(!personaje){
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error:`No existe personajes con id ${id} en DB`})
        }
        let personajeModificado=await PersonajesManager.modificaPersonaje(id, aModificar)
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({personajeModificado});
    } catch (error) {
        procesaErrores(res, error)
    }
})

router.delete("/:id", async(req, res)=>{
    let {id}=req.params
    id=Number(id)  // "25" -> 25   // "juan" -> NaN  
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El id debe ser numérico`})
    }
    // Array
    // Object
    // String
    try {
        let personaje=await PersonajesManager.getPersonajeById(id)
        if(!personaje){
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error:`No existe personajes con id ${id} en DB`})
        }
        let personajeEliminado=await PersonajesManager.eliminaPersonaje(id)
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({personajeEliminado});
    } catch (error) {
        procesaErrores(res, error)
    }
})
