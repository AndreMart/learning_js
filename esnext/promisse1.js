 function falarDepoisDe(segundos, falar) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(falar)            
        }, segundos * 1000)
    })
}
falarDepoisDe(2, "Olha que legal")
.then((falar) => {
    return falar.concat("?????")
})
.then(outraFrase => console.log(outraFrase))