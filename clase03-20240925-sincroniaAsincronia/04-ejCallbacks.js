const operacion=(a, b, callback)=>{

    return callback(a, b)
}

const sumar=(o1, o2)=>o1+o2
const restar=(o1, o2)=>o1-o2
const multiplicar=(o1, o2)=>o1*o2
const dividir=(o1, o2)=>o1/o2


console.log(operacion(10,3, sumar))
console.log(operacion(10,3, multiplicar))
console.log(operacion(10,3, dividir))
console.log(operacion(10,3, restar))
