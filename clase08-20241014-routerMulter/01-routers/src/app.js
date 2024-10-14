import express from 'express';
import { router as personajesRouter } from './routes/personajesRouter.js';
// import { PersonajesManager } from './dao/PersonajesManager.js';
// import { procesaErrores } from './utils.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/personajes", personajesRouter)

// PersonajesManager.setPath("./src/data/demonSlayer.json")

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})



const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});


