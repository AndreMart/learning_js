//infelizmente o Case do switch case do js é um pouco limitado, dá forma que
//escrevemos esse código abaixo serão executados todos os cases
nota = function(nota) {
    switch(Math.floor(nota)) {
        case 10 :
        case 9:
            console.log("Campeão")
        case 8:
            console.log("passou direto")
        case 7:
            console.log("passou arrastado")
        case 6:
        case 5:
            console.log("recuperacao")
        case 4:
        case 3:
        case 2:
        case 1:
            console.log("reprovado")
        default:
            console.log("nota invalida")

    }
}

nota(10)
console.log("#############################################")

//para não executar todos os cases é necessário utilizar a palavra reservada
//breack como podemos ver abaixo
nota1 = function(nota) {
    switch(Math.floor(nota)) {
        case 10 :
        case 9:
            console.log("Campeão")
            break
        case 8:
            console.log("passou direto")
            break
        case 7:
            console.log("passou arrastado")
            break
        case 6:
        case 5:
            console.log("recuperacao")
            break
        case 4:
        case 3:
        case 2:
        case 1:
            console.log("reprovado")
            break
        default:
            console.log("nota invalida")
            break

    }
}

nota1(9)
nota1(110)