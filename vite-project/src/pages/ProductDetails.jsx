import {useEffect, useState} from 'react'
import { useCollection } from '../slices/useCollection'
import { useParams } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux'
import { createOrder } from '../slices/thunks/order/createOrder'
import "../styles/ProductDetails.css"

export const ProductDetails = () => {
    const {uid} = useSelector((state) => state.auth)

    const dispatch = useDispatch();

    const [prendaEspecifica, setPrendaEspecifica] = useState({});

    const {id} = useParams();

    const {getById} = useCollection("prendas");
    const {add} = useCollection("pedidos");

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
        const estado = "recibido"; //Todos lso pedidos deben empezar con estado recibido
        try{
            let newPedido = {
                estado,
                descripcion: prendaEspecifica.descripcion,
                precio: prendaEspecifica.precio,
                talla: prendaEspecifica.talla,
                prendaId: id,
                userId: uid
            }
            const orderId = await add(newPedido);
            console.log("A ver: ", orderId);
            if(orderId){
                try{
                    const laOrden = await dispatch(createOrder(
                        orderId,
                        prendaEspecifica.descripcion,
                        prendaEspecifica.precio,
                        prendaEspecifica.talla,
                        id,
                        uid,
                        estado
                    ))
                    console.log(laOrden)
                }catch(error){
                    console.log("Error al realizar el pedido desde redux: ", error)
                }
            }
        }catch(error){
            console.log("Error al crear pedido en firebase", error)
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
