import { useEffect, useState } from 'react'
import { useCollection } from '../slices/useCollection.js'
import { useNavigate } from 'react-router-dom'
import {MuestraPedidos} from "../components/MuestraPedidos.jsx"

export const Camisetas = () => {
    const {getAll, results} = useCollection("pedidos");

    const [camisetas, setCamisetas] = useState([]);

    const navigate = useNavigate();

    useEffect(() => { //Setea en el arreglo de la variable de estado lo que haya en tiemo real en la base de datos
        setCamisetas(results);
        console.log(camisetas)
    }, [results, navigate])

    useEffect(() => {; //Escucha los cambios de la base de datos
        const unsubscribe = getAll(["clasificacion", "==", "camisetas"])
        return () => unsubscribe();
    }, []);


    return (
        <MuestraPedidos pedidos={camisetas} textoVacio={"No hay pedidos de camisetas"}/>
    )
}
