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


const cursosModelo = mongoose.model(
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

const alumnosSchema = new mongoose.Schema(
    {
        nombre: String,
        email: {
            type: String, uniquie: true
        },
        cursando: {
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
    },
    {
        timestamps: true,
        // strict: false,
        // collection: "alumnosTurnoTarde",
    }
)

alumnosSchema.pre("find", function(){
    this.populate("cursando.curso").lean()
    // this.lean()
})
alumnosSchema.pre("findOne", function(){
    this.populate("cursando.curso").lean()
})


const alumnosModelo = mongoose.model(
    "alumnos",
    alumnosSchema
)


let resultado=await alumnosModelo.find()
console.log(JSON.stringify(resultado, null, 5))

resultado=await alumnosModelo.findOne()
console.log(JSON.stringify(resultado, null, 5))
console.log(Object.keys(resultado))

process.exit()
