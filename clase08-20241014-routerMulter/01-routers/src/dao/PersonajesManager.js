import fs from "fs"
export class PersonajesManager{
    static #path=""

    static setPath(rutaArchivo=""){
        this.#path=rutaArchivo
    }

    static async getPersonajes(){
        if(fs.existsSync(this.#path)){
            return JSON.parse(await fs.promises.readFile(this.#path, {encoding:"utf-8"}))
        }else{
            return []
        }
    }

    static async getPersonajeById(id){
        let personajes=await this.getPersonajes()
        let personaje=personajes.find(p=>p.id===id)
        return personaje
    }

    static async addPersonaje(personaje={}){
        let personajes=await this.getPersonajes()
        let id=1
        if(personajes.length>0){
            id=Math.max(...personajes.map(d=>d.id))+1
        }
        let nuevoPersonaje={
            id, 
            ...personaje,    // ... son el spread
        }

        personajes.push(nuevoPersonaje)

        this.#grabaArchivo(JSON.stringify(personajes, null, 5))

        return nuevoPersonaje
    }

    // 4
    static async modificaPersonaje(id, modificaciones){
        let personajes=await this.getPersonajes()
        let indicePersonaje=personajes.findIndex(p=>p.id===id)
        if(indicePersonaje===-1){
            throw new Error(`${id} not found`)
        }

        personajes[indicePersonaje]={
            ...personajes[indicePersonaje],
            ...modificaciones,
            id
        }

        this.#grabaArchivo(JSON.stringify(personajes, null, 5))
        return personajes[indicePersonaje]
    }
    
    static async eliminaPersonaje(id){
        let personajes=await this.getPersonajes()
        let personajeEliminado=personajes.filter(p=>p.id===id)
        personajes=personajes.filter(p=>p.id!==id)
        this.#grabaArchivo(JSON.stringify(personajes, null, 5))
        return personajeEliminado
    }

    static async #grabaArchivo(datos=""){
        if(typeof datos!="string"){
            throw new Error(`error método grabaArchivo - argumento con formato inválido`)
        }
        await fs.promises.writeFile(this.#path, datos)
    }
}