import ReactDom from 'react-dom'
import React from 'react'
import PrimeiroComponent from './component/PrimeiroComponent'
import {CompA, CompB} from './component/DoisComponent'
import MultElementos from './component/MultElementos'
import FamilaSilva from './component/FamilaSilva'
import Familia from'./component/Familia'
import Membro from'./component/Membro'
import Pai from './component/Pai'
import ComponentComFuncao from './component/ComponenteComFuncao'

const elemento = document.getElementById('root')
ReactDom.render(
    <div>
        <Pai></Pai>
        <ComponentComFuncao></ComponentComFuncao>
        <Familia sobrenome="Martins" idade="23">
            <Membro nome="Jão"/>
            <Membro nome="Paulo"/>
            <Membro nome="Outro"/>
        </Familia>

        {/* <Familia>
            <Membro nome="jaojao" sobrenome="Silva"/>
            <Membro nome="Pedro" sobrenome="Silva"/>
            <Membro nome="Marco" sobrenome="Silva"/>
            <Membro nome="Bia" sobrenome="Silva"/>
        </Familia> */}

         {/* <FamilaSilva sobrenome="Novo sobrenome"/> */}
        {/* <MultElementos/>
        <PrimeiroComponent valor="Meu primeiro props"/>
        <CompA  valor="Component A"/>
        <CompB valor="Component B" /> */}
    </div>
, elemento)
// const elemento = document.getElementById('root')
// ReactDom.render(<h1>Olá React</h1>, elemento)