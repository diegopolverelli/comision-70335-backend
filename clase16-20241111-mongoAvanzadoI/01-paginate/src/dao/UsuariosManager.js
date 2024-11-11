import { usuariosModelo } from "./models/usuariosModelo.js";

export class UsuariosManager{
    static async getUsuarios(page=1, limit=10){
        // return await usuariosModelo.find().lean()
        return await usuariosModelo.paginate(
            {},   // filtro válido de mongodb, por ej: {code:{$gt:2500}}
            {page, limit, lean:true, sort:{code:1}}
        )
    }
}