import { useEffect, useState } from 'react'
import { useCollection } from '../slices/useCollection.js'
import { useNavigate } from 'react-router-dom'
import {MuestraPedidos} from "../components/MuestraPedidos.jsx"

export const Completados = () => {
    const {getAll, results} = useCollection("pedidos");

    const [despachados, setDespachados] = useState([]);

    const navigate = useNavigate();

    useEffect(() => { //Setea en el arreglo de la variable de estado lo que haya en tiemo real en la base de datos
        setDespachados(results);
        console.log(despachados)
    }, [results, navigate])

    useEffect(() => {; //Escucha los cambios de la base de datos
        const unsubscribe = getAll(["clasificacion", "==", "despachado"])
        return () => unsubscribe();
    }, []);


    return (
        <MuestraPedidos pedidos={despachados} textoVacio={"No hay pedidos despachados"}/>
    )
}
