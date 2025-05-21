import {useEffect, useState} from 'react'
import { useCollection } from '../slices/useCollection'
import { useNavigate, useParams } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux'
import { createOrder } from '../slices/thunks/order/createOrder'
import {Popup} from "../components/Popup"
import "../styles/ProductDetails.css"

export const ProductDetails = () => {
    const [showPopup, setShowPopup] = useState(false);

    const navigate = useNavigate();

    const {uid} = useSelector((state) => state.auth);

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
        const clasificacion = "recibido"; //Todos lso pedidos deben empezar con clasificacion recibido
        try{
            let newPedido = {
                clasificacion,
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
                        clasificacion
                    ))
                    console.log(laOrden)
                    setShowPopup(true);
                }catch(error){
                    console.log("Error al realizar el pedido desde redux: ", error)
                }
            }
        }catch(error){
            console.log("Error al crear pedido en firebase", error)
        }
    }

    const handlePopup = () => {
        setShowPopup(false);
        navigate("/dashboard");
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
            {showPopup && (
                <Popup
                text="Pedido realizado con exito"
                button={<button onClick={handlePopup}>Ok</button>}
                />
            )}
        </div>
    )
}
