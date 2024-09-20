// operador Spread:
let defensa={
    primerCentral:'Romero',
    lateralIzquierdo:'Montiel',
    lateralDerecho:'Tagliafico',
    segundoCentral:'Otamendi'
}

let medio={
    nro5:'Paredes',
    nro8:'DePaul',
    nro7:'DiMaria',
    nro14:'Enzo'
}

let ataque={
    el10:'Lio',
    el9:'Julian',
}

const equipo={
    arquero:"Martinez",
    // lateralDerecho: defensa.lateralDerecho,
    // lateralIzquierdo: defensa.lateralIzquierdo, 
    // atacante10: ataque.el10
    ...defensa,
    ...medio, 
    ...ataque,
    lateralDerecho: "Acuña",
    lateralDerecho: "Montiel",
    lateralDerecho: "Chiche Soñora",
    lateralDerecho: "Hernan Díaz",

}



// let equipoArray=[...defensa]

console.log(equipo)




let numeros=[1,2,3,4]
let numeros2=[5,6,7,8]
let todosLosNumeros



const suma=(a, b, c, d)=>{
    return a+b+c+d
}





// operador Rest: ...



// desestructuracion:
// desestructuracion de Objetos:




const utilidades=()=>{
    let pi=3.14
    let numerosPrimos=[2,3,5,7,11,13,17,19,23]
    function suma(a,b){
        console.log(a+b)
    }
    return {
        pi,
        numerosPrimos,
        suma,
        abc:90000
    }
}




// desestructuracion de Arrays:
let heroes=["Superman", "Hulk", "Black-Widow", "Mujer Maravilla", "Batman"]



const useContador=()=>{
    let contador={valor:0}
    const setContador=(valor)=>{
        contador.valor=valor
    }
    return [contador, setContador]
}

