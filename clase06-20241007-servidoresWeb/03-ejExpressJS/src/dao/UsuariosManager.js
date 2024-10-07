const fs=require("fs")
// let rutaArchivo="./archivos/Usuarios.json"
console.log(`Cargando clase UsuariosManager`)
class UsuariosManager{

    #path=""
    constructor(rutaArchivo){
        this.#path=rutaArchivo
    }
    
    async getUsuarios(){
        if(fs.existsSync(this.#path)){
            console.log("ingreso al if (encontro el archivo...)")
            return JSON.parse(await fs.promises.readFile(this.#path, {encoding:"utf-8"}))
        }else{
            return []
        }
    }

    async addUser(nombre, email){
        if(!nombre || !email){
            throw new Error("nombre / email son requeridos")
        }

        let usuarios=await this.getUsuarios()
        // validar lo que corresponda... 
        let id=1
        if(usuarios.length>0){
            id=Math.max(...usuarios.map(d=>d.id))+1
        }

        let nuevoUsuario={
            id,
            nombre, 
            email
        }

        usuarios.push(nuevoUsuario)

        await fs.promises.writeFile(this.#path, JSON.stringify(usuarios, null, 5))

        return nuevoUsuario
        
    }
}

module.exports={UsuariosManager}


// const archivos=async()=>{
//     try {
//         // const usuariosManager=new UsuariosManager("./archivos/Usuarios.json")
//         const usuariosManager=new UsuariosManager(rutaArchivo)
//         console.log(await usuariosManager.getUsuarios())
//         // usuariosManager.path
//         await usuariosManager.addUser("Rafael", "rafa@test.com")
//         await usuariosManager.addUser("Luciana", "lu1990@test.com")
//         console.log(await usuariosManager.getUsuarios())
        
//     } catch (error) {
//         console.log(`Error: ${error.message}`)
//     }
    

// }

// archivos()

