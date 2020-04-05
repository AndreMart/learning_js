import React from 'react'
const aprovados = ['paulo', 'Roberta', 'Amauri', 'Bia' ]
export default props => {
    const gerarLi = itens => {
        return itens.map(item => <li>{item}</li>)
    }
    return (
        <ul>
            {gerarLi(aprovados)}
        </ul>
    )
}