
const miMap=(argArray=[], callback)=>{
    if(!Array.isArray(argArray)){
        console.log(`El primer arg tiene que ser de tipo array`)
        return
    }

    let resultado=[]

    for(let i=0; i<argArray.length; i++){
        let resultadoCallback=callback(argArray[i])
        resultado.push(resultadoCallback)
    }

    return resultado
}

let numeros=[1,2,3,4,5]
console.log(numeros.map(elemento=>elemento**2))
console.log(miMap(numeros, elemento=>elemento**2))