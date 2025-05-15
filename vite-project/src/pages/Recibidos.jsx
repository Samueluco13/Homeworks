import React from 'react'
import {orders} from '../data.js'
import { OrderCard } from '../components/OrderCard.jsx'

export const Recibidos = () => {

    // // PARA INGRESAR LOS DATOS MOCKED AL LOCALSTORAGE
    // console.log("MOCK: ", orders)
    // localStorage.setItem("orders", JSON.stringify(orders));
    // const lasOrdenes = localStorage.getItem("orders");
    // console.log("Guardadas en localStorage: ", lasOrdenes);

    const ordenes = JSON.parse(localStorage.getItem("orders"));

    return (
    <div className='dashboard' >
        <div className='orders'>
            {ordenes.map((pedido) => (
                <OrderCard key={pedido.id} pedido={pedido} />
            ))}
        </div>
    </div>
    )
}
