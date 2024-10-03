const Persona = require("./Persona.js")
const varios = require("./varios.js")
const {Heroe, f2:resta} = require("./varios.js")
const usuarios=require("./varios.js").usuarios
const fs=require("fs")
const path=require("path")

const {readFileSync:leerArchivo, existsSync:verificaArchivo} = require("fs")
const {join}=require("path")

// join()

let rutaArchivo="./archivos/datos.txt"  // relativa
rutaArchivo=__dirname+"/archivos/datos.txt"  // absoluta
rutaArchivo=path.join(__dirname, "archivos", "datos.txt")  // absoluta
console.log("ruta:", rutaArchivo)
let datos=fs.readFileSync(rutaArchivo, {encoding:"utf-8"})
console.log(datos)

console.log(leerArchivo(rutaArchivo, {encoding:"utf-8"}))

console.log("__dirname:", __dirname)

let persona01 = new Persona("Juan", "Lopez")
console.log(persona01.saludo())

console.log(varios.f1(5, 5))
let heroe01 = new varios.Heroe("Hulk", "Bruce Banner")
console.log(heroe01.verIdentidad())

console.log(resta(10,3))
let heroe02 = new Heroe("Batman", "Bruce Wayne")
console.log(heroe02.verIdentidad())

console.log(usuarios)
console.log(varios.usuarios)