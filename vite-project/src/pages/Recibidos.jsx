import { useEffect, useState } from 'react'
import { OrderCard } from '../components/OrderCard.jsx'
import { useCollection } from '../slices/useCollection.js'
import { useNavigate } from 'react-router-dom'

export const Recibidos = () => {

    const {getAll, results} = useCollection("pedidos");

    const [recibidos, setRecibidos] = useState([]);

    const navigate = useNavigate();

    useEffect(() => { //Setea en el arreglo de la variable de estado lo que haya en tiemo real en la base de datos
        setRecibidos(results);
        console.log(recibidos)
    }, [results, navigate])

    useEffect(() => {; //Escucha los cambios de la base de datos
        const unsubscribe = getAll(["estado", "==", "recibido"])
        return () => unsubscribe();
    }, []);


    return (
    <div className='dashboard' >
        <div className='orders'>
            {recibidos.map((pedido) => (
                <OrderCard key={pedido.id} pedido={pedido} />
            ))}
        </div>
    </div>
    )
}
