// Podemos colocar em um switch uma condição em para intervalos com a mesma saída
valor = function (codigo)
{
    switch(true) {
    case (codigo > 0 && codigo < 8):
        console.log("Correto")
        break
    case (codigo === 8):
    console.log("é oito")       
    break
    default:
    console.log("é outro")
    break
} 
}
valor(8)
