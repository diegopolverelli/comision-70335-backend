const socket=io()
const ulCursos=document.querySelector("#cursos")

socket.on("nuevoCurso", datosCurso=>{

    let liCurso=document.createElement("li")
    liCurso.innerHTML=`${datosCurso.nombre} - horas: ${datosCurso.horas} <button>Agregar</button>`
    // {{nombre}} - horas: {{horas}} <button>Agregar</button>
    ulCursos.append(liCurso)
})