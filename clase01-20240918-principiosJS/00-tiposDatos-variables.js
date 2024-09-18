
let user = { name: 'John' };
// throw new Error("prueba de message...!!!")
let admin = user;

admin.name = 'Pete'; // cambiado por la referencia "admin"

// document.getElementById("div1")

// alert(user.name); // 'Pete', los cambios se ven desde la referencia "user"
console.log(user.name); // 'Pete', los cambios se ven desde la referencia "user"

const f1=()=>{
    f2()
}
const f2=()=>{
    f3()
}
const f3=()=>{
    // alert("hola")
}

f1()

console.log(100, typeof 100)
console.log("100", typeof "100")
console.log(false, typeof false)
console.log([100,200], typeof [100,200])

let usuarios=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
]

usuarios.forEach(p=>console.log(p))

// Number()
// String()
// Boolean()
console.log(Array.isArray("Martin"))
console.log(Array.isArray(usuarios))

