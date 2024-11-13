import mongoose from 'mongoose';
import { mongourl } from './utils.js';

const usuariosEsquema = new mongoose.Schema(
    {
        first_name: {
            type: String, index:true
        }, 
        last_name: String,
        email: String, 
        gender: String, 
        code: Number
    },
    { 
        collection: 'bigUsers' 
    }
)

const usuariosModelo = mongoose.model('usuarios', usuariosEsquema)

const entorno=async()=>{
    try {
        await mongoose.connect(mongourl)
        console.log(`Conexión a DB establecida`)

        // let resultado=await usuariosModelo.find()
        // let resultado=await usuariosModelo.find().explain()
        // let resultado=await usuariosModelo.find({first_name:"Bill"}).explain()
        // let resultado=await usuariosModelo.findOne({first_name:"Bill"}).explain()
        let resultado=await usuariosModelo.findOne({first_name:"Marcellina"}).explain()



        console.log(JSON.stringify(resultado.executionStats, null, 5))


        process.exit()
        
    } catch (error) {
        console.log(error.message)
    }
}

entorno()