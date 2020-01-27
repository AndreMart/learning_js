// traga todas as mulheres chinesas com o menor salario
const axios = require('axios');

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const mulheresChinesas = m => m.pais === 'China'
const mulheresChinesasGenero = m => m.genero === 'F'
const menorSalario = (resultado, menor) => {
    return resultado.salario < menor.salario ? resultado : menor
}  

axios.get(url).then(response=>{
   const fun = response.data
        .filter(mulheresChinesas)
        .filter(mulheresChinesasGenero)
        .reduce(menorSalario)

        console.log(fun)
})
