import { useEffect, useState } from 'react'
import { useCollection } from '../slices/useCollection.js'
import { useNavigate } from 'react-router-dom'
import {MuestraPedidos} from "../components/MuestraPedidos.jsx"

export const Recibidos = () => {
    const {getAll, results} = useCollection("pedidos");

    const [recibidos, setRecibidos] = useState([]);

    const navigate = useNavigate();

    useEffect(() => { //Setea en el arreglo de la variable de estado lo que haya en tiemo real en la base de datos
        setRecibidos(results);
        console.log(recibidos)
    }, [results, navigate])

    useEffect(() => {; //Escucha los cambios de la base de datos
        const unsubscribe = getAll(["clasificacion", "==", "recibido"])
        return () => unsubscribe();
    }, []);


    return (
        <MuestraPedidos pedidos={recibidos} textoVacio={"No hay pedidos recibidos"} />
    )
}
