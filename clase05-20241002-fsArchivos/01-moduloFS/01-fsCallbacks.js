const fs=require("fs")

let rutaArchivo="./archivos/archivoCallbacks.txt"
let texto2=`El universo es una perversa inmensidad hecha de ausencia.
Uno no está en casi ninguna parte.
Sin embargo, en medio de las infinitas desolaciones hay una buena noticia: el amor.
Los Hombres Sensibles de Flores tomaban ese rumbo cuando querían explicar el cosmos. 
Y hasta los Refutadores de Leyendas tuvieron que admitir, casi sin reservas, que el amor
existe. Eso sí, nadie debe confundir el amor con la dicha. Al contrario: a veces se
piensa que amor y pena son una misma cosa. Especialmente en el barrio del Ángel Gris,
que es también el barrio del desencuentro.

Alejandro Dolina - fragmento del libro "Crónicas del Ángel Gris"`

fs.writeFile(rutaArchivo, texto2, error=>{
    if(error){
        console.log(`error: ${error.message}`)
        return 
    }

    console.log(`Archivo creado...!!!`)
    
    fs.readFile(rutaArchivo, {encoding:"utf-8"}, (error, datosLeidos)=>{
        if(error){
            console.log(`error: ${error.message}`)
            return 
        }
        console.log(datosLeidos)

        fs.appendFile(rutaArchivo, "\n\nEditorial Sudamericana", error=>{
            if(error){
                console.log(`error: ${error.message}`)
                return 
            }
            
            console.log("Editorial agregada...!!!")

            setTimeout(() => {
                fs.unlink(rutaArchivo, error=>{
                    if(error){
                        console.log(`error: ${error.message}`)
                        return 
                    }
                    console.log("Archivo eliminado...!!!")
                })
                
            }, 2000);

        } )

    })
})
