const fs=require("fs")

const rutaArchivo="./archivos/archivoSinc.txt"
let texto1=`La división internacional del trabajo consiste en que unos países se especializan
en ganar y otros en perder. Nuestra comarca del mundo, que hoy llamamos América Latina, fue
precoz: se especializó en perder desde los remotos tiempos en que los europeos del Renacimiento
se abalanzaron a travéz del mar y le hundieron los dientes en la garganta. Pasaron los siglos
y América Latina perfeccionó sus funciones.

Eduardo Galeano - Capítulo introductorio de "Las venas abiertas de Latinoamérica"`

// c:\mis documents\archivos  //ruta absoluta

// fs.writeFileSync(rutaArchivo, texto1, {encoding:"utf-8"})
if(fs.existsSync(rutaArchivo)){
    console.log(`El archivo existe...!!!`)
}else{
    console.log(`no existe archivo ${rutaArchivo}`)
}
fs.writeFileSync(rutaArchivo, texto1)
let textoDelArchivo=fs.readFileSync(rutaArchivo, {encoding:"utf-8"})
console.log(textoDelArchivo)

// fs.appendFileSync(rutaArchivo, "\n\nEditorial Planeta", {encoding:"utf-8"})
fs.appendFileSync(rutaArchivo, "\n\nEditorial Planeta")

setTimeout(() => {
    fs.unlinkSync(rutaArchivo)
    console.log(`archivo eliminado...!!!`)
}, 2000);

