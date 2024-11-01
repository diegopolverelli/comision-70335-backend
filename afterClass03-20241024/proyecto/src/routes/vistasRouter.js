import { Router } from 'express';
import { AlumnosManager } from '../dao/AlumnosManager.js';
import { CursosManager } from '../dao/CursosManager.js';
import { procesaErrores } from '../utils.js';
export const router=Router()

AlumnosManager.path="./src/data/alumnos.json"
CursosManager.path="./src/data/cursos.json"

router.get("/alumnos", async(req, res)=>{
    try {
        let alumnos=await AlumnosManager.getAlumnos()
        res.render("alumnos", {alumnos})
    } catch (error) {
        procesaErrores(res, error)
    }
})

router.get('/alumno/:aid',async(req,res)=>{
    let {aid}=req.params
    aid=Number(aid)
    if(isNaN(aid)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Error con alumno id ${aid}`})
    }
    try {
        let alumnos=await AlumnosManager.getAlumnos()
        let alumno=alumnos.find(a=>a.id===aid)
        if(!alumno){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Error con alumno id ${aid}`})
        }
        // recorrer alumno.cursando y completar nombre del curso
        let cursos=await CursosManager.getCursos()
        
        res.render("alumno",{
            cursos, alumno
        })
        
    } catch (error) {
        procesaErrores(res, error)
    }
})