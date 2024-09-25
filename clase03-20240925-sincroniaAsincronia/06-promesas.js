const suma=(a, b)=>{
    return new Promise((res, rej)=>{   // resolve / rejected
        if(typeof a!="number" || typeof b!="number"){
            rej(`Argumentos invalidos... :(`)
        }

        res(a+b)
        // res("Martin")
    })
}

// console.log(suma(8,2))
// console.log(suma(8,2)+10)
// console.log(suma(8,2)*5)


suma(8, 2)
    .then(resOK=>console.log(resOK))
    .catch(error=>console.log(error))
    .finally(()=>console.log(`esto ejecuta siempre`))

suma(8, "Marcela")
    .then(resOK=>console.log(resOK))
    .catch(error=>console.log(error))
    .finally(()=>console.log(`esto ejecuta siempre`))


suma(8, 2).then(resOK=>{
    let resultado=resOK * 5
    console.log(resultado)
})

fetch("https://reqres.in/api/users?page=2")
    .then(res=>{
        res.json()
            .then(data=>{
                console.log(data)
            })
            .catch(e=>console.log(e))
    })
    .catch(e=>console.log(e))

