// operador ** (potencia):

let numeros=[10,2,3,4,5]

// map
let doble=numeros.map(numero=>numero*2)
console.log(doble)
// let cubo=numeros.map(numero=>numero**3)
cubo=numeros.map(numero=>{
    return numero**3
})
console.log("cubo:", cubo)
console.log(numeros)

function calcularCubo(base){
    
    return base**3
}
console.log(calcularCubo(10))

cubo=numeros.map(calcularCubo)
console.log(cubo)


cubo=numeros.map((numero, indice, arrayOriginal )=>{
    console.log(`recorriendo pos. ${indice}, con valor ${numero}; array Orig.:${arrayOriginal}`)
    return numero**3
})
console.log("cubo:", cubo)
console.log(numeros)

// every
console.log("todo n es <3:",numeros.every((n, i)=>{
    console.log(`pos ${i}, valor ${n}`)
    return n<3
}))

console.log("todo n es > 0", numeros.every(n=>n>0))


// filter
let pares=numeros.filter(n=>{
    return n%2===0
})
console.log(pares)
let mayores3=numeros.filter(n=>n>3)
console.log(mayores3)

// find / findIndex
let nombres1=['Martina', 'Mariela', 'Sandra', 'Ana', 'Jimena', 'Marcelo', 'Julian', 'Ernesto']
let nombre=nombres1.find(nombre=>nombre==="Mariela")
console.log(nombre)
let buscar=" MarIaNA"
nombre=nombres1.find(nombre=>nombre.trim().toLowerCase()===buscar.trim().toLowerCase())
console.log(nombre)
buscar=" SAnDRa"
nombre=nombres1.find(nombre=>nombre.trim().toLowerCase()===buscar.trim().toLowerCase())
console.log(nombre)
let indiceNombre=nombres1.findIndex(nombre=>nombre.trim().toLowerCase()===buscar.trim().toLowerCase())
console.log(indiceNombre)
buscar=" MarIaNA"
indiceNombre=nombres1.findIndex((nombre, indice, arrayOriginal)=>{
    console.log(`pos ${indice} | valor ${nombre} | arrayOring ${arrayOriginal}`)
    return nombre.trim().toLowerCase()===buscar.trim().toLowerCase()
})
console.log(indiceNombre)


let heroes=[
    {
        id:1,
        name:'Spider-Man',
        alias:'Peter Parker',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:2,
        name:'Superman',
        alias:'Clark Kent',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:3,
        name:'Iron Man',
        alias:'Tony Stark',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:4,
        name:'Wonder Woman',
        alias:'Diana Prince',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:5,
        name:'Black Widow',
        alias:'Natasha Romanoff',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:6,
        name:'Batman',
        alias:'Bruce Wayne',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:7,
        name:'Aquaman',
        alias:'Arthur Curry',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:8,
        name:'Captain America',
        alias:'Steve Rogers',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:9,
        name:'Flash',
        alias:'Barry Allen',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:10,
        name:'Black Panther',
        alias:'TChalla',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:11,
        name:'Green Lantern',
        alias:'Hal Jordan',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:12,
        name:'Thor',
        alias:'Thor Odinson',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:13,
        name:'Batwoman',
        alias:'Kate Kane',
        team:'Bat Family',
        publisher:'DC',
    },
    {
        id:14,
        name:'Hulk',
        alias:'Bruce Banner',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:15,
        name:'Zatanna',
        alias:'Zatanna Zatara',
        team:'Justice League Dark',
        publisher:'DC',
    },
    {
        id:16,
        name:'Doctor Strange',
        alias:'Stephen Strange',
        team:'Defenders',
        publisher:'Marvel',
    },
    {
        id:17,
        name:'Green Arrow',
        alias:'Oliver Queen',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:18,
        name:'Scarlet Witch',
        alias:'Wanda Maximoff',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:19,
        name:'Martian Manhunter',
        alias:'Jonn Jonzz',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:20,
        name:'Deadpool',
        alias:'Wade Wilson',
        team:'None',
        publisher:'Marvel',
    },
]
let paramHeroeSolicitado=7
let heroe=heroes.find(h=>h.id===paramHeroeSolicitado)
if(!heroe){
    console.log(`no existe heroe con id ${paramHeroeSolicitado}`)
    return 
}

console.log(heroe)

paramHeroeSolicitado=3
let indiceHeroe=heroes.findIndex(h=>h.id===paramHeroeSolicitado || h.publisher=="DC")
if(indiceHeroe===-1){
    console.log(`no existe heroe con id ${paramHeroeSolicitado}, o que sea de DC`)
    return 
}

console.log(indiceHeroe, heroes[indiceHeroe])

// reduce
let total=numeros.reduce((acum, valor, indice, arrayOriginal)=>{
    console.log(`pos ${indice}, valor ${valor}, acum ${acum}, aorig: ${arrayOriginal}`)
    return acum+=valor*10
}, 0)

console.log(total)

console.log(numeros.reduce((acum, n)=>acum+=n, 0))
console.log(numeros.reduce((acum, n)=>acum+=n))

total=numeros.reduce((acum, valor, indice, arrayOriginal)=>{
    console.log(`pos ${indice}, valor ${valor}, acum ${acum}, aorig: ${arrayOriginal}`)
    return acum+=valor*10
})

console.log(total)

console.log(Array.isArray([1,2,3]))
console.log(Array.isArray("Hola"))