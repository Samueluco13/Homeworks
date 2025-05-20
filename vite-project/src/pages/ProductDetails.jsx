import React, {useEffect, useState} from 'react'
import { useCollection } from '../slices/useCollection'
import { useParams } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { createOrder } from '../slices/thunks/order/createOrder'
import "../styles/ProductDetails.css"

export const ProductDetails = () => {
    const dispatch = useDispatch();

    const [prendaEspecifica, setPrendaEspecifica] = useState({});

    const {id} = useParams();

    const {getById} = useCollection("prendas");

    useEffect(() => { //Setea en el arreglo de la variable de estado lo que haya en tiemo real en la base de datos
        const detalles = async () => {
            const aver = await getById(id);
            console.log(aver);
            setPrendaEspecifica(aver);
            console.log(prendaEspecifica)
        }
        detalles();
    }, [id]);

    const handleOrder = async () => {
        try{
            const laOrden = await dispatch(createOrder(
                prendaEspecifica.descripcion,
                prendaEspecifica.precio,
                prendaEspecifica.talla,
                id,
                
            ))
        }catch(error){
            console.log("Error al realizar el pedido: ", error)
        }
    }

    return (
        <div className='product-details' >
            <div className='product-details-info' >
                <h1>{prendaEspecifica.descripcion}</h1>
                <p>Precio: {prendaEspecifica.precio}</p>
                <p>Talla: {prendaEspecifica.talla}</p>
            </div>
            <div>
                <button onClick={handleOrder} >Realizar Pedido</button>
            </div>
        </div>
    )
}
