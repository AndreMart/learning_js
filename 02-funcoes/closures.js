const valor = "global"
function fora() {
    const valor = "dentro"
    function dentro() {
        return valor
    }
    return dentro
}
const executaFunction = fora()
console.log(executaFunction())