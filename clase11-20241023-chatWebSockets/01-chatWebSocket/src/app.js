import express from 'express';
import {engine} from "express-handlebars"
import {Server} from "socket.io"

import { router as vistasRouter } from './routes/vistasRouter.js';

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static("./src/public"))

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

app.use("/", vistasRouter)


const server=app.listen(PORT,()=>{   // server HTTP
    console.log(`Server escuchando en puerto ${PORT}`);
});

const usuariosConectados=[]
const mensajes=[]

const io=new Server(server)  // server WebSockets

io.on("connection", socket=>{
    console.log(`Se conectó un cliente con id ${socket.id}`)

    socket.emit("saludo", `Hola desde el server. Identificate...!!!`, mensajes)

    socket.on("id", nombre=>{
        usuariosConectados.push({
            id: socket.id, nombre
        })
        socket.broadcast.emit("nuevoUsuario", nombre)
    })

    socket.on("mensaje", (nombre, mensaje)=>{
        mensajes.push({
            nombre, mensaje
        })
        io.emit("nuevoMensaje", nombre, mensaje)
    })

    socket.on("disconnect", ()=>{
        let usuario=usuariosConectados.find(u=>u.id===socket.id)
        if(usuario){
            io.emit("saleUsuario", usuario.nombre)
        }
    })
})

// io.emit() // a todos los users conectados
