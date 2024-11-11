import mongoose from "mongoose";

try {
    await mongoose.connect(
        "mongodb+srv://backend70335:CoderCoder@cluster0.jnfai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", 
        {
            dbName: "clase17"
        }
    )    
    console.log(`DB online!`)
} catch (error) {
    console.log(`Error en DB: ${error.message}`)
    process.exit()
}

// const conectar=async()=>{
    
// }

const cursosModelo=mongoose.model(
    "cursos",
    new mongoose.Schema(
        {
            nombre: String, 
            horas: Number, 
            docente: String
        },
        {
            timestamps: true
        }
    )
)

const alumnosModelo=mongoose.model(
    "alumnos",
    new mongoose.Schema(
        {
            nombre: String, 
            email: {
                type:String, uniquie: true
            },
            cursando:{
                type: [
                    {
                        curso: {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: "cursos", // un modelo valído existente en el proyecto
                        },
                        notaPromedio: Number, 
                    }
                ]
            },
            // aprobadas:{
            //     type: [
            //         {
            //             curso: {
            //                 type: mongoose.Schema.Types.ObjectId,
            //                 ref: "cursos", // un modelo valído existente en el proyecto
            //             },
            //             notaPromedio: Number, 
            //         }
            //     ]
            // },
        },
        {
            timestamps: true,
            // strict: false,
            // collection: "alumnosTurnoTarde",
        }
    )
)

// await cursosModelo.deleteMany()
// await alumnosModelo.deleteMany()

// let curso01=await cursosModelo.create({
//     nombre: "Matemática Discreta II", horas: 14, docente: "Diana Marino"
// })
// let curso02=await cursosModelo.create({
//     nombre: "Probabilidad y Estadística", horas: 26, docente: "Manual Ortega"
// })

// let alumno01=await alumnosModelo.create(
//     {
//         nombre: "Soledad Acuña",
//         email: "sole1990@test.com",
//         cursando: [
//             {curso: curso01._id, notaPromedio: 8.5},
//             {curso: curso02._id, notaPromedio: 7},
//         ]
//     }
// )

let resultado=await cursosModelo.find()
console.log(resultado)

// resultado=await alumnosModelo.find().populate("cursando.curso")
resultado=await alumnosModelo.find().populate({
    path: "cursando.curso",
    // populate: {
    //     path: "docente"
    // }
})
// .populate("aprobadas.curso")

console.log(JSON.stringify(resultado, null, 5))

process.exit()




