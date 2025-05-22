import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"
import { useCollection } from '../slices/useCollection'
import { removeOrder } from '../slices/thunks/order/removeOrder'
import { ProductCard } from '../components/ProductCard'
import { Popup } from '../components/Popup'

export const PedidosPropios = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [misPedidos, setMisPedidos] = useState([]);
    const [showMessagePopup, setShowMessagePopup] = useState(false);
    const {getAll, results, dltDoc} = useCollection("pedidos");
    const {uid} = useSelector(state => state.auth);

    useEffect(() => { //Setea en el arreglo de la variable de estado lo que haya en tiemo real en la base de datos
        setMisPedidos(results);
        console.log(misPedidos)
    }, [results])

    useEffect(() => {; //Escucha los cambios de la base de datos
        const unsubscribe = getAll(["userId","==", uid])
        return () => unsubscribe();
    }, []);

    const handleRemove = async (id) => {
        try{
            await dispatch(removeOrder());
            await dltDoc(id);
            setShowMessagePopup(true);
        }catch(error){
            console.log("Error al eliminar pedido: ", error);
        }
    }


    return (
        <div className='dashboard' >
                {misPedidos.length === 0 ? (
                    <h2>No tienes pedidos realizados</h2>
                ) : (
                    <div className='prendas' >
                        {misPedidos.map(pedido => (
                            <ProductCard
                            prenda={pedido}
                            key={pedido.id}
                            onClick={() => navigate(`/product/${pedido.prendaId}`)}
                            onRemove={handleRemove}
                            />
                        ))}
                    </div> 
                )}
                {showMessagePopup && (
                    <Popup
                    text="Pedido eliminado con exito"
                    button={<button onClick={() => setShowMessagePopup(false)}>Ok</button>}
                    />
                )}
        </div>
    )
}
