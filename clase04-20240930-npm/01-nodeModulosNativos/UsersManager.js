const crypto=require("crypto")
const SECRET="CoderCoder123"

class UsuariosManager{
    static #usuarios=[]

    static addUser(nombre, email, password){
        // validaciones
        if(!nombre || !email || !password){
            console.log(`Error: complete los datos...!!!`)
            return 
        }

        let existe=this.#usuarios.find(u=>u.email===email)
        if(existe){
            console.log(`Ya existe un usuario con email ${email}`)
            return 
        }

        let regExMail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
        // let res=reCorto.test('prueba@correo.com') // true
        if(!regExMail.test(email)){
            console.log(`Formato email inválido: ${email}`)
            return 
        }
        // resto validaciones pertinentes
        let regExDigitos=/[0-9]+/
        if(regExDigitos.test(nombre)){
            console.log(`Nombre no puede contener números: ${nombre}`)
            return 
        }

        let id=1
        if(this.#usuarios.length>0){
            id=Math.max(...this.#usuarios.map(d=>d.id))+1
        }
        
        // password=crypto.createHmac("sha256", SECRET).update(password).digest("hex")
        password=this.#creaHash(password)


        let nuevoUsuario={
            id,
            nombre, 
            email,
            password
        }

        this.#usuarios.push(nuevoUsuario)
        return nuevoUsuario
    }

    static getUsers(){
        return this.#usuarios
    }

    static #creaHash(dato){
        return crypto.createHmac("sha256", SECRET).update(dato).digest("hex")

    }

    static login(email, password){
        password=this.#creaHash(password)
        let usuario=this.#usuarios.find(u=>u.email===email && u.password===password)
        if(!usuario){
            console.log(`Credenciales invalidas`)
            return 
        }
        console.log(`Login exitoso para ${usuario.nombre}`)
    }
}

UsuariosManager.addUser("carlos", "carlos@test.com", "123")
UsuariosManager.addUser("carlos", "carlos10hotmail.com", "123")
UsuariosManager.addUser("carlos", "carlos@test.com", "123")
UsuariosManager.addUser("jimena", "jime32@test.com", "123")
UsuariosManager.addUser("jimena90", "jime90@test.com", "123")
console.log(UsuariosManager.getUsers())

UsuariosManager.login("carlos100@test.com", "123")
UsuariosManager.login("carlos@test.com", "999999")
UsuariosManager.login("carlos@test.com", "123")
// UsuariosManager.