import { Router } from 'express';
export const router=Router()

router.get('/',(req,res)=>{

    let users=`usuarios`
    
    res.setHeader('Content-Type','application/json')
    res.status(200).json({users})
})
router.get('/:id',(req,res)=>{
    let {id}=req.params
    let users=`lista usuario ${id}`
    
    res.setHeader('Content-Type','application/json')
    res.status(200).json({users})
})
router.put('/:id',(req,res)=>{
    let {id}=req.params
    let users=`modifica usuario ${id}`
    
    res.setHeader('Content-Type','application/json')
    res.status(200).json({users})
})
router.delete('/:id',(req,res)=>{
    let {id}=req.params
    let users=`elimina usuario ${id}`
    
    res.setHeader('Content-Type','application/json')
    res.status(200).json({users})
})
router.post('/',(req,res)=>{

    let users=`crea usuario`

    res.setHeader('Content-Type','application/json')
    res.status(200).json({users})
})