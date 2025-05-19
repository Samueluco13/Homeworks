import React from 'react'
import "../styles/ProductCard.css"

export const ProductCard = ({prenda, onOrder}) => {
    return (
        <div className='product-card' >
            <div className='product-card-info' >
                <h2>{prenda.descripcion}</h2>
                <p>{prenda.precio}</p>
                <p>{prenda.talla}</p>
                {/* <p>stock: 30</p> */}
            </div>
            <div className='product-card-btn' >
                <button onClick={() => onOrder(prenda.id)} >Realizar Pedido</button>
            </div>
        </div>
    )
}
