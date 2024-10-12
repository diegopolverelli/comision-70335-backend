import express from 'express';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let nombres=["Juan", "Luca", "Mariana", "Matilde"]
app.get('/api/nombres',(req,res)=>{

    res.status(200).send(nombres)
})

app.put('/api/nombres/:pos',(req,res)=>{
    let {pos}=req.params
    pos=Number(pos)
    if(isNaN(pos)){
        return res.status(400).send({error:`pos debe ser numerico`})
    }
    res.status(200).send({message:`modifico nombre ${pos}`})
})

app.delete('/api/nombres/:pos',(req,res)=>{
    let {pos}=req.params
    pos=Number(pos)
    if(isNaN(pos)){
        return res.status(400).send({error:`pos debe ser numerico`})
    }
    res.status(200).send({message:`elimino nombre ${pos}`})
})

app.get('/api/nombres/:pos',(req,res)=>{

    let {pos}=req.params
    pos=Number(pos)
    if(isNaN(pos)){
        return res.status(400).send({error:`pos debe ser numerico`})
    }

    // validaciones varias...
    if(pos<1 || pos>nombres.length){
        return res.status(400).send({error:`pos debe estar entre 1 y ${nombres.length}`})
    }


    res.status(200).send({nombre: nombres[pos-1]})
})

app.post('/api/nombres',(req,res)=>{
    let {nombre}=req.body
    if(!nombre){
        return res.status(400).send({error:`nombre es requerido`})
    }

    // validaciones...!!!

    nombres.push(nombre)

    res.status(200).send({nombreAgregado:nombre, nombres })
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
