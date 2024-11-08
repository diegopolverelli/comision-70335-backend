import { alumnosModelo } from "./models/alumnosModel.js"

export class AlumnosMongoManager{

    static async getAlumnos(){
        return await alumnosModelo.find().lean()
    }

    static async createAlumno(alumno={}){
        let nuevoAlumno=await alumnosModelo.create(alumno)
        return nuevoAlumno.toJSON()
    }

    static async updateAlumno(id, alumno){
        return await alumnosModelo.findByIdAndUpdate(id, alumno, {new:true})
   }

} // fin class