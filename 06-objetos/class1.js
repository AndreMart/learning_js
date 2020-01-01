class Lancamento {
    constructor(descricao, valor) {
        this.descricao = descricao
        this.valor = valor
    }
}
class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamento(...lancamentos) {
        lancamentos.forEach(l=>this.lancamentos.push(l))
        //codigo acima é o mesmo de baixo
        // for (const i in lancamentos) {
        //     this.lancamentos.push(lancamentos[i])
        // }
    }

    sumario() {
        //inicio com zero
        let valorTotal = 0
        // for (const key in this.lancamentos) {
        //     valorTotal += this.lancamentos[key].valor
        // }
        this.lancamentos.forEach(l => {
            valorTotal += l.valor
        })
        return valorTotal
    }
}

salario = new Lancamento("Salario", 25000)
contaAgua = new Lancamento("Conta de Agua", -250)
console.log(salario, contaAgua)

cicloFinanceiro = new CicloFinanceiro(12,2019)
cicloFinanceiro.addLancamento(salario, contaAgua)
console.log(cicloFinanceiro)
console.log(cicloFinanceiro.sumario())

