const socket=io()
const ulCursos=document.querySelector("#cursos")
const spanIdAlumno=document.getElementById("idAlumno")

const inscribir=async(idCurso)=>{
    // let idAlumno=Number(spanIdAlumno.textContent)
    let idAlumno=spanIdAlumno.textContent
    console.log({idCurso, idAlumno})

    let respuesta=await fetch(`/api/alumnos/${idAlumno}/curso/${idCurso}`,{
        method:"post"
    })
    if(respuesta.status>=400){
        let {error}=await respuesta.json()
        alert(error)
        return 
    }
    window.location.reload()
}

socket.on("nuevoCurso", datosCurso=>{

    let liCurso=document.createElement("li")
    liCurso.innerHTML=`${datosCurso.nombre} - horas: ${datosCurso.horas} <button onclick="inscribir('${datosCurso._id}')">Agregar</button>`
    // {{nombre}} - horas: {{horas}} <button>Agregar</button>
    // {{nombre}} - horas: {{horas}} <button onclick="inscribir('{{_id}}')">Agregar</button>

    ulCursos.append(liCurso)
})