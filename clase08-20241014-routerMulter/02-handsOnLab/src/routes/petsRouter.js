import {Router} from "express"

export const router=Router()

router.get("/", (req, res)=>{
    let pets=`Mascotas`

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({pets});
})

router.put("/:id", (req, res)=>{
    let {id}=req.params
    let pets=`modifica mascota ${id}`

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({pets});
})

router.get("/:id", (req, res)=>{
    let {id}=req.params
    let pets=`lista mascota ${id}`

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({pets});
})

router.delete("/:id", (req, res)=>{
    let {id}=req.params
    let pets=`elimina mascota ${id}`

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({pets});
})

router.post("/", (req, res)=>{
    let pets=`crea mascota`

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({pets});
})