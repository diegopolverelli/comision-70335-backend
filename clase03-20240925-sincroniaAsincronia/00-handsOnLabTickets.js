class TicketManager{
    static #precioBaseDeGanancia=0.15
    #eventos
    constructor(){
        this.#eventos=[]  // [{id:1, nombre...}, {id:2, nombre...}, {id:3, nombre...}, {id:4, nombre...},]
    }

    getEventos(){
        return this.#eventos
    }

    #generaID(){
        let id=1
        if(this.#eventos.length>0){
            id=this.#eventos[this.#eventos.length - 1].id + 1
        }
        return id
    }

    agregarEvento(nombre, lugar, precio, capacidad=50, fecha=new Date()){
        let existe=this.#eventos.find(evento=>evento.nombre===nombre && evento.lugar===lugar)
        if(existe){
            console.log(`Error, ya existe el evento, con id ${existe.id}`)
            return 
        }

        // let id=1
        // if(this.#eventos.length>0){
        //     id=this.#eventos[this.#eventos.length - 1].id + 1
        // }
        let id=this.#generaID()

        let nuevoEvento={
            id, 
            nombre, 
            lugar,
            precio: precio+precio*TicketManager.#precioBaseDeGanancia,
            capacidad, 
            fecha,
            participantes:[]
        }

        this.#eventos.push(nuevoEvento)
        return nuevoEvento
    }

    agregarUsuario(idEvento, idUsuario){
        let indiceEvento=this.#eventos.findIndex(e=>e.id===idEvento)
        if(indiceEvento===-1){
            console.log(`No existen eventos con id ${idEvento}`)
            return 
        }

        let registrado=this.#eventos[indiceEvento].participantes.find(p=>p==idUsuario)
        if(registrado){
            console.log(`El usuarios ${idUsuario} ya esta registrado en el evento ${idEvento}`)
            return 
        }

        this.#eventos[indiceEvento].participantes.push(idUsuario)
    }

    // const buscarIndice=(e)=>e.id
    
    ponerEventoEnGira(idEvento, lugar, fecha){
        let indiceEvento=this.#eventos.findIndex(e=>e.id===idEvento)
        if(indiceEvento===-1){
            console.log(`No existen eventos con id ${idEvento}`)
            return 
        }   

        let id=this.#generaID()

        let nuevoEvento={
            // nombre:this.#eventos[indiceEvento].nombre,
            ...this.#eventos[indiceEvento],
            lugar, 
            fecha, 
            participantes:[],
            id
        }

        this.#eventos.push(nuevoEvento)
    }
}

const ticketManager=new TicketManager()

console.log(ticketManager.getEventos())
// ticketManager.
// console.log(ticketManager.eventos.push())
ticketManager.agregarEvento("afterClass02", "zoom", 100, 120, new Date(2024, 9, 1))
ticketManager.agregarEvento("afterClass02", "zoom", 100, 120, new Date(2024, 9, 1))
ticketManager.agregarEvento("afterClass03", "zoom", 100, 120, new Date(2024, 10, 1))

ticketManager.agregarUsuario(100, 2)
ticketManager.agregarUsuario(1, 2)
ticketManager.agregarUsuario(1, 2)
ticketManager.agregarUsuario(2, 1)
ticketManager.agregarUsuario(2, 2)
ticketManager.agregarUsuario(2, 10)

ticketManager.ponerEventoEnGira(100, "presencial en oficinas Coder", new Date(2024, 9, 10))
ticketManager.ponerEventoEnGira(1, "presencial en oficinas Coder", new Date(2024, 9, 10))
ticketManager.ponerEventoEnGira(2, "Mar del Plata", new Date(2024, 11, 8))

console.log(ticketManager.getEventos())

let persona={
    nombre:"Juan", 
    edad: 24, 
    nombre:"Martin",
    nombre:"Carolina"
}

console.log(persona)