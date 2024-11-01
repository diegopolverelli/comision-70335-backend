import fs from "fs"

export class AlumnosManager{
    static path=""

    static async getAlumnos(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, {encoding:"utf-8"}))
        }else{
            return []
        }
    }

    static async #grabaArchivo(datosObj){
        await fs.promises.writeFile(this.path, JSON.stringify(datosObj, null, 5))
    }

    static async createAlumno(alumno={}){
        let alumnos=await this.getAlumnos()
        let id=1
        if(alumnos.length>0){
            id=Math.max(...alumnos.map(d=>d.id))+1
        }
        let nuevoAlumno={
            id, 
            ...alumno,
            cursando:[]
        }
        alumnos.push(nuevoAlumno)
        
        await this.#grabaArchivo(alumnos)

        return nuevoAlumno
    }

} // fin class