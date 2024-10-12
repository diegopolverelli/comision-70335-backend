import express from "express"

const PORT = 3000

const app=express()

app.get("/", (req, res)=>{

    res.send("Home Page...!!!")
})

// app.get("/", (req, res)=>{

//     res.send("otro Home Page...!!!")
// })

app.get("/usuarios/:id/:nombre", (req, res)=>{
    // let id=req.params.id
    let {id, nombre}= req.params
    console.log(typeof id, id)

    res.send(`Usuario con id ${id} | ${nombre}`)
})

app.get("/usuarios/listar/facturacion", (req, res)=>{

    // nunca entraría...!!!
    res.send("facturas")
})



app.listen(PORT, ()=>{
    console.log(`Server up in port ${PORT}`)
})