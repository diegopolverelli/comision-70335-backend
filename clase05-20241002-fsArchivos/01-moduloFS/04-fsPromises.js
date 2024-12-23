const fs = require("fs")

let rutaArchivo = "./archivos/archivoPromesas.txt"
let texto3 = `
“Debe trabajar el hombre
Para ganarse su pan;
Pues la miseria, en su afán
De perseguir de mil modos,
Llama a la puerta de todos
Y entra en la del haragán”.

“Muchas cosas pierde el hombre
Que a veces la vuelve a hallar;
Pero los debo enseñar,
Y es güeno que lo recuerden:
Si la vergüenza se pierde,
Jamás se la vuelve a encontrar”.

José Hernandez - fragmento del Martin Fierro`

// fs.promises.writeFile(rutaArchivo, texto3, {encoding:"utf-8"})
// fs.promises.writeFile(rutaArchivo, texto3)
//     .then(() => {
//         console.log(`Archivo generado...!!!`)
//         fs.promises.readFile(rutaArchivo, { encoding: "utf-8" })
//             .then(datoLeido => {
//                 console.log(datoLeido)
//                 // fs.promises.appendFile()
//             })
//             .catch(error => {
//                 console.log(error.message)
//             })
//     })
//     .catch(error => {
//         console.log(error.message)
//     })

// fs.promises.writeFile(rutaArchivo, texto3)
//     .then(() => {
//         console.log(`Archivo generado...!!!`)
//         return fs.promises.readFile(rutaArchivo, { encoding: "utf-8" })
//     })
//     .then(datoLeido => {
//         console.log(datoLeido)
//         return fs.promises.appendFile(rutaArchivo, "\n\nEditorial Alfaguara")
//     })
//     .then(()=>{
//         console.log(`Editorial agregada...!!!`)
//     })
//     .catch(error => {
//         console.log(error.message)
//     })

const archivos=async()=>{
    try {
        await fs.promises.writeFile(rutaArchivo, texto3)
        console.log(`Archivo guardado`)
        let datosLeidosDeArchivo=await fs.promises.readFile(rutaArchivo, {encoding:"utf-8"})
        console.log(datosLeidosDeArchivo)
        await fs.promises.appendFile(rutaArchivo, "\n\nEditorial Alfaguara")
        console.log("Editorial agregada...!!!")
        setTimeout(async() => {
            await fs.promises.unlink(rutaArchivo)
            console.log(`Archivo eliminado...!!!`)
        }, 2000);
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

archivos()