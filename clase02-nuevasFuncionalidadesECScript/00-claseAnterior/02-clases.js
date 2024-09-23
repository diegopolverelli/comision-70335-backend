// class AdministradorDeArchivos{}
class Persona{
    static especie="humano"
    static cantPersonasDefinidas=0
    // nombre
    // apellido
    #password
    #edad
    // email
    constructor(nombre, apellido, email){
        this.nombre=nombre
        this.apellido=apellido.toUpperCase()
        this.email=email
        Persona.cantPersonasDefinidas++
        // this.
    }

    static verCantidadPersonas(){
        return this.cantPersonasDefinidas
    }

    static modificaEspecie(nuevaEspecie){
        this.especie=nuevaEspecie
    }

    static verEspecie(){
        return this.especie
    }

    setearPassword(password){
        // validaciones... etc...
        this.#password=password
    }

    login(email, password){
        if(email!=this.email || password!=this.#password){
            console.log(`Credenciales invalidas`)
            return 
        }

        console.log(`Login exitoso para ${this.nombre}`)
    }

    #prueba(){
        console.log("esta es una prueba")
    }

    saludar(){
        this.#prueba()
        return `Buen dia. Me llamo ${this.nombre}`
    }

    modificarNombre(nuevoNombre){
        let nombreRE=/[0-9]+/i
        if(nombreRE.test(nuevoNombre)){
            console.log(`El nombre es invalido (no puede contener numeros)`)
            return
        }
        if(nuevoNombre.trim().length==0){
            console.log(`No se admiten nombres vacíos`)
            return 
        }
        this.nombre=nuevoNombre.trim()
        console.log(`nombre modificado`)
    }

}

let persona01=new Persona("Juan", "Lopez", "jlopez@test.com")
let persona02=new Persona("Romina", "Moralez", "rmoralez@test.com")
let persona03=new Persona("Jimena", "Quiroga", "jquiroga@test.com")
console.log(persona01)
console.log(persona02)
console.log(persona03)
// let persona04={
//     nombre:"Julian", 
//     apellido:"Alvarez", 
//     email:"jalvarez@test.com"
// }
// console.log(persona04)

console.log(persona01.saludar())
console.log(persona03.saludar())
persona01.modificarNombre("      Cristina142     ")
// persona01.nombre="Carlos"
console.log(`\n\n\n\n\n\n\n\n\n`)
console.log(persona01.saludar())
// persona01.

// console.log(persona04.)
persona02.setearPassword("123")
persona02.login("rmoralez@test.com", "abc")
persona02.login("rmoralez@test.com", "123")
console.log(persona01.saludar())


class Alumno extends Persona{

}

let alumno01 = new Alumno("Juan", "Martinez", "jmartinez@test.com")

console.log(alumno01)
console.log(Persona.especie)
Persona.modificaEspecie("ser humano")
console.log(Persona.verEspecie())
console.log(Persona.cantPersonasDefinidas)
