import Persona from "./Persona.js"
import * as varios from "./varios.js"
import {Heroe, f2 as resta} from "./varios.js"
import Villano, {saludos, Heroe as ClaseHeroes} from "./varios.js"

import __dirname from "./utils.js"

import fs from "fs"
import path from "path"
import {join} from "path"

console.log("dirname del ES Modules:", import.meta.dirname)
let rutaArchivo=join(__dirname, "archivos", "datos.txt")

console.log(fs.readFileSync(rutaArchivo, {encoding:"utf-8"}))


let villano01=new Villano("Thanos", "sin alias")
console.log(villano01.nombre)
saludos.despedida()

let persona01=new Persona("Maria", "Gonzalez")
let persona02=new Persona("Carlos", "Gonzalez")
console.log(persona01.saludo())
console.log(persona02.saludo())

console.log(varios.usuarios)
varios.saludos.saludo()

let heroe01=new Heroe("Robin", "Dick Grayson")
console.log(heroe01.verIdentidad())


console.log(resta(100, 74))