const nombre=prompt("Ingrese su nombre:")
console.log("Script index cargado...!!!")
const socket=io()

const divTemperatura=document.querySelector("#temperatura")
const ulHeroes=document.getElementById("heroes")

socket.on("saludo", mensaje=>{
    console.log(mensaje)
    if(nombre){
        socket.emit("id", nombre)
    }
})

socket.on("nuevoUsuario", nombre=>{
    console.log(`${nombre} se ha unido al servidor...`)
})

socket.on("nuevaTemperatura", temperatura=>{
    divTemperatura.textContent=`Temperatura del reactor: °${temperatura}`
})


socket.on("oferta", dato=>{
    alert(dato)
})

socket.on("nuevoHeroe", heroe=>{
    // alert(`Nuevo heroe: ${heroe.name}`)
    let liHeroe=document.createElement("li")
    liHeroe.textContent=heroe.name
    ulHeroes.append(liHeroe)   
})

const cargaDatos=async()=>{
    let respuesta=await fetch("/api/heroes",{})
    let datos=await respuesta.json()
    datos.heroes.forEach(h=>{
        let liHeroe=document.createElement("li")
        liHeroe.textContent=h.name
        ulHeroes.append(liHeroe)
    })
}

cargaDatos()