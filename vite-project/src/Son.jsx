import React from 'react'

export const Son = React.memo(({numero, increment}) => { //memo memoriza el componente evitando que se re-renderice si no cambian sus props
    console.log('again reloaded...')
    return(
        <button className = 'btn btn-primay mr-3' onClick = {() => {increment(numero)}}> {numero} </button>
    )
})