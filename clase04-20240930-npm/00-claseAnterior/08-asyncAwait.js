const suma=(a, b)=>{
    return new Promise((res, rej)=>{   // resolve / rejected
        if(typeof a!="number" || typeof b!="number"){
            rej(`Argumentos invalidos... :(`)
        }

        res(a+b)
        // res("Martin")
    })
}

const multiplica=(a, b)=>{
    return new Promise((res, rej)=>{   // resolve / rejected
        if(typeof a!="number" || typeof b!="number"){
            rej(`Argumentos invalidos... :(`)
        }

        res(a*b)
        // res("Martin")
    })
}

async function operacion2(){
    // prueba
}

// 5x4 + 3x3
const operacion=async()=>{
    try {
        let res1=await multiplica(5, 4)
        let res2=await multiplica(3, 3)
        let resFinal= await suma(res1, res2)
        console.log(resFinal, "operacion")
    } catch (error) {
        console.log(`Ocurrió un error... :(`)
    }
}

operacion()

const consultaApi=async(url)=>{
    try {
        let respuesta=await fetch(url)
        let data=await respuesta.json()
        return data
        
    } catch (error) {
        console.log(`Error en consultaApi...`)
    }
}

class UsuariosManager{

    static async getUsuarios(){
        let usuarios=await consultaApi("https://reqres.in/api/users?page=2")
        return usuarios
    }
}

const imprimirUsuarios=async()=>{
    try {
        console.log(await UsuariosManager.getUsuarios())
    } catch (error) {
        console.log(`error...!!!`)
    }
    // esto siempre ejecuta
}

imprimirUsuarios()