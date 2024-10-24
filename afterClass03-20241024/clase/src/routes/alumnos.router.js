import { Router } from 'express';
import { procesaErrores } from '../utils.js';
import { AlumnosManager } from '../dao/AlumnosManager.js';
export const router=Router()

AlumnosManager.path="./src/data/alumnos.json"

router.get('/',async(req,res)=>{
    try {
        let alumnos=await AlumnosManager.getAlumnos()  
    
        res.setHeader('Content-Type','application/json')
        res.status(200).json({alumnos})
    } catch (error) {
        procesaErrores(res, error)
    }
})

router.get('/:aid',async(req,res)=>{
    let {aid}=req.params
    aid=Number(aid)
    if(isNaN(aid)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El id debe ser numérico`})
    }
    try {
        let alumnos=await AlumnosManager.getAlumnos()
        
        let alumno=alumnos.find(a=>a.id===aid) 
        if(!alumno){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existen alumnos con id ${aid}`})
        }
    
        res.setHeader('Content-Type','application/json')
        res.status(200).json({alumno})
    } catch (error) {
        procesaErrores(res, error)
    }
})

router.post("/", async(req, res)=>{
    let {nombre, email}=req.body
    if(!nombre || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete nombre | email`})
    }
    let regExNombre=/[0-9]/
    if(regExNombre.test(nombre)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Nombre no puede contener números`})
    }

    // validaciones 
    let regExMail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    if(!regExMail.test(email)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`email formato inválido`})
    }

    try {
        let alumnos=await AlumnosManager.getAlumnos() 
        let existe=alumnos.find(a=>a.email===email)
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Ya existe un alumno con email ${email}`})
        }

        let nuevoUsuario=await AlumnosManager.createAlumno({nombre, email})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoUsuario});
    } catch (error) {
        procesaErrores(res, error)
    }

})