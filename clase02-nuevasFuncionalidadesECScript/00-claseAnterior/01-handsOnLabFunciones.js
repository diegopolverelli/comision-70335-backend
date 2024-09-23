
const mostrarLista=(lista=[])=>{
    if(!Array.isArray(lista)){
        console.log(`El argumento debe ser de tipo array`)
        return 
    }

    if(lista.length==0){
        console.log(`Lista vacía`)
        return 
    }
    
    lista.forEach(elemento=>console.log(elemento))
    console.log(`La lista tiene ${lista.length} elementos`)
}

// mostrarLista()
// mostrarLista([1,2,3])
let usuarios=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
]
// mostrarLista(usuarios)


try {
    mostrarLista(100)
    // console.log(apellido)
} catch (error) {
    console.log(`ocurrio un error... :(  Detalle error: ${error.message}`)
}
console.log("FIN PROGRAMA")
