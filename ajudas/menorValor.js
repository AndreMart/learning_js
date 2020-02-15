const obj = {"programmers":[
    {
        "id": 1,
        "name": "Eduardo Candido",
        "currentTasks": 1
    },
    {
        "id":2,
        "name": "João Lemos",
        "currentTasks": 1
    },
    {
        "id":3,
        "name": "Antonio Bond",
        "currentTasks": 3
    }
]
}

const contInd = ind => {
    let total = 0
    let indice = 1
    for(i in ind) {
        if(ind[indice].currentTasks == ind[i].currentTasks) {
            total += 1
        }    
    }
    return total
}


console.log(contInd(obj.programmers))

const menorProgrammers = (resultado, menor) => {
    return resultado.currentTasks < menor.currentTasks ? resultado : menor
}
console.log(obj.programmers.reduce(menorProgrammers))