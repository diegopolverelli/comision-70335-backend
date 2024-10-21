import express from 'express';
import {Server} from "socket.io"
import { router as heroesRouter } from './routes/heroesRouter.js';
const PORT=3000;

let serverWebSocket
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.use(
    '/api/heroes', 
    (req, res, next)=>{
        req.serverSocket=serverWebSocket

        next()
    },
    heroesRouter
)

app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get("/oferta",(req, res)=>{
    let{oferta}=req.query
    if(!oferta){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete oferta...!!!`})
    }

    serverWebSocket.emit("oferta", oferta)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Oferta retransmitida"});
})

const serverHTTP=app.listen(PORT,()=>{   
    console.log(`Server escuchando en puerto ${PORT}`);
});

// const serverWebSocket=new Server(serverHTTP)   // const io=new Server(server)
serverWebSocket=new Server(serverHTTP)   // const io=new Server(server)

// .on escucha
// .emit hablar (emitir mensajes o evento)

serverWebSocket.on("connection", socket=>{
    console.log(`Se conectó un cliente con id ${socket.id}`)

    socket.emit("saludo", {emisor: "Server", mensaje:"Bienvenido al server webSockets. Identificate"})

    socket.on("id", nombre=>{
        console.log(`El cliente con id ${socket.id} se ha identificado como ${nombre}`)
        socket.broadcast.emit("nuevoUsuario", nombre)
    })

} )


let temperatura=0
setInterval(() => {
    temperatura=Math.floor(Math.random()*(7)+27)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    serverWebSocket.emit("nuevaTemperatura", temperatura)

}, 1000);
