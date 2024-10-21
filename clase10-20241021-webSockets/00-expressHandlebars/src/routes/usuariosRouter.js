import { Router } from 'express';
import { suma } from '../functions/varios.js';
export const router=Router()

// suma

router.get('/',(req,res)=>{

    

    res.setHeader('Content-Type','application/json')
    res.status(200).json({})
})