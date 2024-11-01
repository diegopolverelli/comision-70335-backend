import fs from "fs"

export class CursosManager{
    static path=""

    static async getCursos(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, {encoding:"utf-8"}))
        }else{
            return []
        }
    }

    static async #grabaArchivo(datosObj){
        await fs.promises.writeFile(this.path, JSON.stringify(datosObj, null, 5))
    }

    static async createCurso(curso={}){
        let cursos=await this.getCursos()
        let id=1
        if(cursos.length>0){
            id=Math.max(...cursos.map(d=>d.id))+1
        }
        
        let nuevoCurso={
            id, ...curso
        }
        cursos.push(nuevoCurso)
        await this.#grabaArchivo(cursos)
        return nuevoCurso
    }
}