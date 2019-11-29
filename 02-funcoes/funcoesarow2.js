// se tratando de uma função arow o this é específico do seu contexto
function Pessoa() {
    this.idade=0
    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    },1000)
}
new Pessoa