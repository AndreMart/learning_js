// exempos de instancia com o node
const instanciaComun = require('./instanciaComun')
const instanciaComunB = require('./instanciaComun')
// será que apesar de serem dois objetos diferentes irão compartilhar dos mesmos dados?
instanciaComun.add()
instanciaComun.add()
instanciaComun.add()
// como podemos perceber o node faz um cache e trata como sendo apenas um modulo apesar de termos importado com referencias diferentes
console.log(instanciaComunB.cont, instanciaComun.cont)

//#################################################################################################
// agora vamos utilizar nossa função construtora

const utilizandoFactory = require('./utilizandoFactory')() // perceba que nesse ponto já chamamos nossa factory
const utilizandoFactoryB = require('./utilizandoFactory')() // perceba que nesse ponto já chamamos nossa factory

utilizandoFactory.add()
utilizandoFactory.add()
utilizandoFactory.add()
// perceba que nessa caso temos modulos idependentes
console.log(utilizandoFactoryB.cont, utilizandoFactory.cont)





