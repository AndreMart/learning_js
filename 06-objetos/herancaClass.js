// criando classes com açucar sintático
class Avo {
    constructor(sobrenome = "Martins") {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = "Professor") {
        super(sobrenome)
        this.profissao = profissao
    }
}
const pai = new Pai
console.log(pai)

class Filho extends Pai {
    constructor(otherAtributes) {
        super()
        this.otherAtributes = otherAtributes
    }
}
const filho = new Filho
filho.otherAtributes = "Others atribute"
console.log(filho)
