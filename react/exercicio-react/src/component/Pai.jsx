import React from 'react'
import Filho from './Filho'

export default props => {
    const okEuLibero = lugar => alert( `Liberado para sair para ${lugar}`)
    return (
        <div>
            <Filho paiPossoSair={okEuLibero}  />
        </div>
    )
}