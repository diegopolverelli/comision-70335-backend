import { usuarioModelo } from "./models/usuariosModelo.js";

export class UsuariosManager{
    static async getUsers(){
        return await usuarioModelo.find().lean()
    }

    static async getUserBy(filtro={}){    // {_id:"888dadfkdfadfasdf8daf"}    o   {email:"juan@test.com", edad:{$gte:30}}
        return await usuarioModelo.findOne(filtro).lean()
    }

    static async createUser(usuario={}){
        let nuevoUsuario=await usuarioModelo.create(usuario)
        return nuevoUsuario.toJSON()
    }

    static async updateUser(id, aModificar){
        // return await usuarioModelo.updateOne({_id: id}, aModificar)
        return await usuarioModelo.findByIdAndUpdate(id, aModificar, {new:true}).lean()
    }

    static async deleteUser(id){
        // return await usuarioModelo.deleteOne({_id:id})  // {deletedCound:1}
        return await usuarioModelo.findByIdAndDelete(id).lean()
    }
}