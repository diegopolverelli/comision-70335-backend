import { usuarioModelo } from "./models/usuariosModelo.js";

export class UsuariosManager{
    static async getUsers(){
        return await usuarioModelo.find()
    }

    static async createUser(usuario={}){
        return await usuarioModelo.create(usuario)
    }

    static async updateUser(id, aModificar){
        // return await usuarioModelo.updateOne({_id: id}, aModificar)
        return await usuarioModelo.findByIdAndUpdate(id, aModificar, {new:true})
    }
}