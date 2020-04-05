import React from 'react'

export function propsDadForChildren(props) {
    return React.Children.map(props.children, componentFilho => {
        return React.cloneElement(componentFilho, {...props})
     })
}