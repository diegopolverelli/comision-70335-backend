import express from 'express';
import {engine} from "express-handlebars"
import {Server} from "socket.io"
import { router as alumnosRouter } from './routes/alumnos.router.js';
import { router as cursosRouter } from './routes/cursos.router.js';
import { router as vistasRouter } from './routes/vistasRouter.js';
const PORT=3000;
let io

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

app.use("/api/alumnos", alumnosRouter)
app.use(
    "/api/cursos",
    (req, res, next)=>{
        req.io=io

        next()
    }, 
    cursosRouter
)
app.use("/", vistasRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{    // server HTTP
    console.log(`Server escuchando en puerto ${PORT}`);
});

io=new Server(server)  // server webSocket