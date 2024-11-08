import { cursosModelo } from "./models/cursosMolde.js"

export class CursosMongoManager{

    static async getCursos(){
        return await cursosModelo.find().lean()
    }

    static async createCurso(curso={}){
        let nuevoCurso=await cursosModelo.create(curso)
        return nuevoCurso.toJSON()
    }
}