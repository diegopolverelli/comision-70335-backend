let alumno01={
    nombre:'Jimena',
    apellido:'Martinez',
    fechaNacimiento:new Date(1990,2,4),
    email: 'jmartinez@test.com',
    domicilio:'Las Bases 1974, Haedo'
}

const propsValidas=Object.keys(alumno01)
const aModificar={email:"jimemartinez@hotmail.com", nombre:"Jimena Soledad"}
const propsAModificar=Object.keys(aModificar)
console.log(propsValidas, propsAModificar)
let ok=propsAModificar.every(p=>propsValidas.includes(p))
if(!ok){
    console.log(`Alguna propiedad es invalida; props validas: ${JSON.stringify(propsValidas)}`)
    return
}

alumno01={
    ...alumno01,
    ...aModificar
}
console.log(alumno01)




console.log(Object.keys(alumno01))
let propiedadesAlumno=Object.keys(alumno01)
let apellido=propiedadesAlumno.find(p=>p=="apellido")
if(!apellido){
    console.log(`apellido es requerido`)
    return 
}

console.log(Object.values(alumno01))
console.log(Object.entries(alumno01))



let factura={
    numero:107998,
    codigoCliente:'A005',
    fecha: new Date(2023,0,10),
    idTributario:'30333333331',
    subtotal:10000,
    impuestos:{
        tasasGenerales:1.2,
        iibb:2.4,
        iva:21,
        otros:0.5
    }
}

// subtotal  +  impuestos   
// impuestos cada tasa * subotatal, la suma de eso


let tasasImpuestos=Object.values(factura.impuestos)
console.log(tasasImpuestos)
const total=tasasImpuestos.reduce((acum, tasa)=>acum+=factura.subtotal*tasa/100 , factura.subtotal)
console.log(total)

