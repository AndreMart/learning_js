import React from 'react'
import Membro from './Membro'
export default props =>
    <div>
        <Membro nome="André" sobrenome={props.sobrenome} />
        <Membro nome="Daniela" sobrenome="Silva" />
        <Membro nome="Marcos" sobrenome="Silva" />
        <Membro nome="Davi" sobrenome="Silva" />
    </div>