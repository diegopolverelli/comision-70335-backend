class Prueba{
    static prueba(error){
        // console.log(`prueba`)
        if(error){
            return 
        }

        return "datos"
        // return undefined
        // return "juan"
    }
}

// console.log(Prueba.prueba())
let resultado=Prueba.prueba(true)
if(!resultado){
    console.log(`algo fallo...!!!`)
}else{
    console.log(resultado)
}