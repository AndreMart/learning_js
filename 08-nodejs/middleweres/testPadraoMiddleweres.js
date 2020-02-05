const passo1 = (cont, next) => {
    cont.value1 = 'mdll1'
    next()
}

const passo2 = (cont, next) => {
    cont.value2 = 'mdll2'
    next()
}

const passo3 = cont => cont.value3 = 'mdll3'

const exec = (cont, ...midd) => {
    const execPasso = indice => {
        midd && indice < midd.length &&
        midd[indice](cont, ()=>execPasso(indice + 1))
    }
    execPasso(0)
}
const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)