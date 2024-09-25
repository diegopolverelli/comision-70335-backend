// let i=1
// console.log(`operación ${i}`)
// i++
// console.log(`operación ${i}`)
// i++
// let fechaFin=Date.now()+3000
// while(Date.now()<fechaFin){
//     // espero
// }
// console.log(`operación ${i}`)
// i++
// console.log(`operación ${i}`)
// i++
// console.log(`operación ${i}`)
// i++

setTimeout(() => {
    console.log(`Op 1 finalizada`)
}, 3000);
setTimeout(() => {
    console.log(`Op 2 finalizada`)
}, 1000);
setTimeout(() => {
    console.log(`Op 3 finalizada`)
}, 500);

let contador=3
let intervalo01=setInterval(() => {
    contador++
    console.log(`Op ${contador} finalizada`)
    if(contador==10){
        clearInterval(intervalo01)
    }
}, 300);



