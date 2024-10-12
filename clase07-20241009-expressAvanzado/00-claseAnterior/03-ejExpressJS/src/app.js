const express=require("express")
const { UsuariosManager } = require("./dao/UsuariosManager.js")

const PORT=3000

const usuariosManager=new UsuariosManager("./src/data/Usuarios.json")

const app=express()

app.get("/", (req, res)=>{   // controller de la ruta "/" o function Handler

    res.send(`Server express - Home Page`)
})
app.get("/saludo", (req, res)=>{   // controller de la ruta "/" o function Handler

    res.send(`<h2 style="color:blue;">Bienvenidos...!!!</h2>`)
})

app.get("/usuarios", async(req, res)=>{
    try {
        let usuarios=await usuariosManager.getUsuarios()
        console.log(usuarios)
    
        res.send(usuarios)
        
    } catch (error) {
        res.send(`Error interno del server...!!!`)
    }
})



app.listen(PORT, ()=>{
    console.log(`Server up en puerto ${PORT}`)
})