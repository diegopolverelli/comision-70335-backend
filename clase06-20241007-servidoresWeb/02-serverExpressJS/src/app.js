const express=require("express")

const PORT=3000

const app=express()

app.get("/", (req, res)=>{

    res.send(`Server con express (no más módulo HTTP)...!!!`)
})

app.get("/contacto", (req, res)=>{
    console.log(req.url)

    res.send("Contacto...!!!")
})

app.get("/usuarios", (req, res)=>{

    let usuarios=[
        {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
        {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
        {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
    ]

    res.send(usuarios)
})


app.listen(PORT, ()=>{
    console.log(`Server on line en puerto ${PORT}`)
})