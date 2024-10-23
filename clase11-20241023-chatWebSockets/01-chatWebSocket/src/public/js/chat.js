// alert("script cargado...!!!")
Swal.fire({
    title:"Identifiquese",
    input:"text",
    text:"Ingrese su nickname",
    inputValidator: (value)=>{
        return !value && "Debe ingresar un nombre...!!!"
    },
    allowOutsideClick:false
}).then(resultado=>{
    // console.log(resultado)
    const nombre=resultado.value
    document.title=nombre

    const inputMensaje=document.querySelector("#mensaje")
    inputMensaje.focus()
    const divMensajes=document.querySelector("#mensajes")
    
    const socket=io()
    
    socket.on("saludo", (saludo, mensajes)=>{
        mensajes.forEach(m=>{
            let parrafo=document.createElement("p")
            parrafo.classList.add("mensaje")
            parrafo.innerHTML=`<strong>${m.nombre}</strong> dice <i>${m.mensaje}</>`
            divMensajes.append(parrafo)
            divMensajes.scrollTop=divMensajes.scrollHeight
        })
        socket.emit("id", nombre)
    })

    socket.on("saleUsuario", nombre=>{
        let parrafo=document.createElement("p")
        parrafo.classList.add("mensaje")
        parrafo.innerHTML=`<strong>${nombre}</strong> ha abandonado el chat... :(`
        divMensajes.append(parrafo)
        divMensajes.scrollTop=divMensajes.scrollHeight        
    })

    socket.on("nuevoUsuario", nombre=>{
        Swal.fire({
            text:`${nombre} se ha conectado...!!!`,
            toast:true,
            position:"top-right"
        })
    })

    socket.on("nuevoMensaje", (nombre, mensaje)=>{
        let parrafo=document.createElement("p")
        parrafo.classList.add("mensaje")
        parrafo.innerHTML=`<strong>${nombre}</strong> dice <i>${mensaje}</>`
        divMensajes.append(parrafo)
        divMensajes.scrollTop=divMensajes.scrollHeight
    })


    inputMensaje.addEventListener("keyup", e=>{
        e.preventDefault()
        // console.log(e, e.target.value)
        if(e.code==="Enter" && e.target.value.trim().length>0){
            socket.emit("mensaje", nombre, e.target.value.trim())
            e.target.value=""
            e.target.focus()
        }
    })
})  // fin then swall
