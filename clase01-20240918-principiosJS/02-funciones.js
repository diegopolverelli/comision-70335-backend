
function suma(a, b){
    // codigo...
    // codigo...
    // codigo...
    // console.log(a+b)
    let resultado=a+b
    return resultado
}

let resultado=suma(3, 5)
console.log(resultado)

console.log(suma(10,2))

// suma="es tomar 2 valors y sumarlos..."


// console.log(suma(10,2))
const suma2=function(a, b){
    if(typeof a!="number"  || typeof b!="number"){
        // console.log(`Error en los args. Solo admite numéricos`)
        return `Error en los args. Solo admite numéricos`
    }
    //adfasfd


    return a+b
    // a+b
    // return undefined
}

const saludar=function(){
    console.log("buen día...!!!")
}
// suma2="la suma es..."

console.log(suma2(10,10))

saludar()
console.log(saludar())

console.log(suma2())
console.log(suma2("juan", " y pinchame"))
console.log(suma2("juan", 245))

// const sumaFlecha=(a, b)=>{

//     //codigo
//     //codigo
//     //codigo
//     //codigo
//     return a+b
// }

const sumaFlecha=(a, b)=>a+b

console.log(sumaFlecha(9,9))

// const cuadrado=(a)=>a*a
const cuadrado=a=>a*a
console.log(cuadrado(9))

let nombre="Mariana   "
console.log(nombre.trim().length)

let usuarios=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
]

console.log(usuarios.length)





