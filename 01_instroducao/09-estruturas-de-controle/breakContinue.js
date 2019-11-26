//utilizando break para parar determinada execução em seu bloco superior
const numeros = [1,2,36,4,53,5,6,7,8,9,10]
for(let i in numeros) {
    if(numeros[i] == 53) {
        break
    }
    console.log(numeros[i])
}

//a estrutura continue faz com que esse indice dependendo da lógica possa ser
//ignorado

for (const j in numeros) {
    if(numeros[j] == 6) {
        continue
    }
    console.log(numeros[j])
}
// dá para utilizar esse tipo de código, mas considero isso uma GAMBI
externo:
for (const k in numeros) {
    for (const l in numeros) {
        if(k == 2 && l == 2) break externo 
            console.log(l,k)
    }
}
