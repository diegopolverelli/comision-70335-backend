class Contador{
    static cuentaGeneral=0
    constructor(responsable){
        this.responsable=responsable
        this.cuenta=0
    }

    contar(){
        this.cuenta++
        Contador.cuentaGeneral++
    }

    getResponsable(){
        return this.responsable
    }

    getCuentaIndividual(){
        return this.cuenta
    }

    static getCuentaGlobal(){
        return this.cuentaGeneral   
    }
}

let c1=new Contador("Martina")
let c2=new Contador("Mariana")
let c3=new Contador("Marcos")
c1.contar()
c1.contar()
c1.contar()
c1.contar()
c1.contar()
c1.contar()
c2.contar()
c2.contar()
c2.contar()
c3.contar()
c3.contar()
c3.contar()
c3.contar()
c3.contar()
c3.contar()
c3.contar()
c3.contar()
c3.contar()
c3.contar()
c3.contar()
c3.contar()

console.log(`El c1 esta a cargo de ${c1.getResponsable()}, y suma ${c1.getCuentaIndividual()}`)
console.log(`El c2 esta a cargo de ${c2.getResponsable()}, y suma ${c2.getCuentaIndividual()}`)
console.log(`El c3 esta a cargo de ${c3.getResponsable()}, y suma ${c3.getCuentaIndividual()}`)
console.log(`Todos los contadores juntos suman ${Contador.getCuentaGlobal()}`)