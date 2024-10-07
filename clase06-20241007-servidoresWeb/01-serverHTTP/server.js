const http = require("http")
const url= require("url")

const PORT=3000  //8080

const server=http.createServer((req, res)=>{
    console.log(req.url)
    const parseUrl=url.parse(req.url, true)
    console.log(parseUrl)

    if(parseUrl.pathname==="/contacto"){

        res.setHeader("Content-Type", "text/html; charset=utf-8")
        return res.end(`Contacto`)
    }
    if(parseUrl.pathname==="/"){

        res.setHeader("Content-Type", "text/html; charset=utf-8")
        return res.end(`Server generado con el módulo HTTP de Node`)
    }
    if(parseUrl.pathname==="/usuarios"){

        let usuarios=[
            {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
            {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
            {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
        ]

        res.setHeader("Content-Type", "application/json; charset=utf-8")
        return res.end(JSON.stringify(usuarios, null, 5))
    }

    res.setHeader("Content-Type", "text/html; charset=utf-8")
    return res.end(`error 404 - page not found`)
})

server.listen(PORT, ()=>{
    console.log(`Server up en puerto ${PORT}`)
})

