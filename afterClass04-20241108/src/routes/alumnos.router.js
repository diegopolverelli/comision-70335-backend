import { Router } from 'express';
import { procesaErrores } from '../utils.js';
// import { AlumnosManager } from '../dao/AlumnosManager.js';
// import { CursosManager } from '../dao/CursosManager.js';
import { AlumnosMongoManager as AlumnosManager} from '../dao/AlumnosMongoManager.js';
import { CursosMongoManager as CursosManager} from '../dao/CursosMongoManager.js';
import { isValidObjectId } from 'mongoose';
export const router = Router()

// AlumnosManager.path = "./src/data/alumnos.json"

router.get('/', async (req, res) => {
    try {
        let alumnos = await AlumnosManager.getAlumnos()

        res.setHeader('Content-Type', 'application/json')
        res.status(200).json({ alumnos })
    } catch (error) {
        procesaErrores(res, error)
    }
})

router.get('/:aid', async (req, res) => {
    let { aid } = req.params
    // aid = Number(aid)
    // if (isNaN(aid)) {
    //     res.setHeader('Content-Type', 'application/json');
    //     return res.status(400).json({ error: `El id debe ser numérico` })
    // }
    if(!isValidObjectId(aid)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Id alumno inválido`})
    }

    try {
        let alumnos = await AlumnosManager.getAlumnos()

        let alumno = alumnos.find(a => a._id == aid)
        if (!alumno) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({ error: `No existen alumnos con id ${aid}` })
        }

        res.setHeader('Content-Type', 'application/json')
        res.status(200).json({ alumno })
    } catch (error) {
        procesaErrores(res, error)
    }
})

router.post("/", async (req, res) => {
    let { nombre, email } = req.body
    if (!nombre || !email) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({ error: `Complete nombre | email` })
    }
    let regExNombre = /[0-9]/
    if (regExNombre.test(nombre)) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({ error: `Nombre no puede contener números` })
    }

    // validaciones 
    let regExMail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    if (!regExMail.test(email)) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({ error: `email formato inválido` })
    }

    try {
        let alumnos = await AlumnosManager.getAlumnos()
        let existe = alumnos.find(a => a.email === email)
        if (existe) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({ error: `Ya existe un alumno con email ${email}` })
        }

        let nuevoUsuario = await AlumnosManager.createAlumno({ nombre, email })
        res.setHeader('Content-Type', 'application/json');
        return res.status(201).json({ nuevoUsuario });
    } catch (error) {
        procesaErrores(res, error)
    }

})

router.post("/:aid/curso/:cid", async (req, res) => {
    let { aid, cid } = req.params
    // validar
    // aid = Number(aid)
    // cid = Number(cid)
    // if (isNaN(aid) || isNaN(cid)) {
    //     res.setHeader('Content-Type', 'application/json');
    //     return res.status(400).json({ error: `aid | cid inválidos` })
    // }
    if(!isValidObjectId(aid)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Id alumno inválido`})
    }
    if(!isValidObjectId(cid)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Id curso inválido`})
    }


    try {
        let alumnos = await AlumnosManager.getAlumnos()
        let alumno = alumnos.find(a => a._id == aid)
        if (!alumno) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({ error: `No existen alumnos con id ${aid} ` })
        }

        let cursos = await CursosManager.getCursos()
        let curso = cursos.find(c => c._id == cid)
        if (!curso) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({ error: `No existe curso con id ${cid}` })
        }

        let indiceCurso = alumno.cursando.findIndex(c => c.id == cid)
        if (indiceCurso === -1) {
            alumno.cursando.push({
                id: cid,
                reinscripciones: 0
            })
        } else {
            alumno.cursando[indiceCurso].reinscripciones++
        }

        let alumnoModificado = await AlumnosManager.updateAlumno(aid, alumno)
        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({ alumnoModificado });
    } catch (error) {
        procesaErrores(res, error)
    }
})

router.put("/:aid", async (req, res) => {
    let { aid } = req.params
    // aid = Number(aid)
    // if (isNaN(aid)) {
    //     res.setHeader('Content-Type', 'application/json');
    //     return res.status(400).json({ error: `aid inválidos` })
    // }
    if(!isValidObjectId(aid)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Id alumno inválido`})
    }

    try {

        let alumnos = await AlumnosManager.getAlumnos()
        let alumno = alumnos.find(a => a._id == aid)
        if (!alumno) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({ error: `Alumno inexistente con id ${aid}` })
        }

        let cursando = req.body
        if (!Array.isArray(cursando)) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({ error: `Debe enviar un arreglo válido de cursos x body` })
        }

        let cursos = await CursosManager.getCursos()
        let error = false
        let cursosInscribir=[]

        cursando.forEach(c => {
            let existe = cursos.find(curso => curso._id == c.id)
            if (!existe) {
                error = true
            }
            if(cursosInscribir.includes(c.id)){
                error=true
            }else{
                cursosInscribir.push(c.id)
            }
            if (!c.reinscripciones) {
                c.reinscripciones = 0
            }
        })

        if (error) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({ error: `Error en los cursos indicados. Verifique...!!!` })
        }

        cursando = cursando.map(c => {
            return {
                id: c.id,
                reinscripciones: c.reinscripciones
            }
        })

        alumno.cursando = cursando
        let alumnoModificado=await AlumnosManager.updateAlumno(aid, alumno)
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({alumnoModificado});

    } catch (error) {
        procesaErrores(res, error)
    }

})