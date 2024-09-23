// scopes
let nombre="Juan"

if(nombre=="Juan"){
    let apellido="Lopez"
    console.log(nombre, apellido)
}

// console.log(nombre, apellido)


// template Strings
let texto1="prueba de texto"
let texto2='prueba de texto'

// console.log(texto1+' '+nombre+"\n\nopciones:\n\t- opcion 1\n\t- opcion2")

console.log(`prueba de texto ${nombre}
    
opciones:
    - opcion 1
    - opcion 2`)
