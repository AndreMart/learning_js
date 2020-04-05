import React from 'react'
import { propsDadForChildren } from '../functions/utils'

export default props =>
    <div>
        {/* primeira forma de clonar e pegar props do filho passada por parametro */}
        {/* <p>{React.cloneElement(props.children, {...props})}</p> */}
        
        {/* segunda forma de clonar e pegar props do filho passada por parametro */}
        {/* <p>{React.cloneElement(props.children, props)}</p> */}
        
        {/* Terceira forma de clonar e pegar props do filho passada por parametro */}
        {/* <p>{React.cloneElement(props.children, {
            sobrenome: props.sobrenome,
            idade: props.idade
        })}</p> */}

        {/* <div>
            {React.Children.map(props.children, componentFilho => {
               return React.cloneElement(componentFilho, {...props})
            })}
        </div> */}

        {propsDadForChildren(props)}
        
    </div>