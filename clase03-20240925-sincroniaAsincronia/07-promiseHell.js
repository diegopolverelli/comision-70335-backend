const suma=(a, b)=>{
    return new Promise((res, rej)=>{   // resolve / rejected
        if(typeof a!="number" || typeof b!="number"){
            rej(`Argumentos invalidos... :(`)
        }

        res(a+b)
        // res("Martin")
    })
}

// 5 x 4
suma(5, 5)
    .then(res1=>{
        suma(res1, 5)
            .then(res2=>{
                suma(res2, 5)
                    .then(resFinal=>{
                        console.log(resFinal, "promise Hell")
                    })
            })
    })

suma(5, 5)
    .then(res1=>{
        // return suma(res1, "José")
        return suma(res1, 5)
    })
    .then(res2=>{
        return suma(res2, 5)
    })
    .then(resFinal=>{
        console.log(resFinal, "encadenamiento de promesas")
    })
    .catch(error=>console.log(error))

suma(5, 5)
    .then(res1=>{
        return `el resultado de 5 + 5 es ${res1}`
    })
    .then(res2=>{
        return res2.toUpperCase()
    })
    .then(res3=>{
        return res3.split(" ")
    })
    .then(resFinal=>console.log(resFinal, "array resultado"))