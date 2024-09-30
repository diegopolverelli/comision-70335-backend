const moment=require("moment")
console.log("hola")

let fechaActual=moment()
console.log(fechaActual)

let fechaCumple=moment("19780323")
if(!fechaCumple.isValid()){
    console.log(`fecha de cumple invalida`)
    return 
}

console.log(`Usted ha nacido hace ${fechaActual.diff(fechaCumple, "year")} años`)
