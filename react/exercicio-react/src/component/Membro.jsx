import React from 'react'

export default props =>
    <div>
        <h1>
            {props.nome}
            <strong> {props.sobrenome}</strong>
            <strong> {props.idade}</strong>
        </h1>
    </div>