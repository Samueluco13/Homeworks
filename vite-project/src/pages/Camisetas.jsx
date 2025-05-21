import { useEffect, useState } from 'react'
import { useCollection } from '../slices/useCollection.js'
import { useNavigate } from 'react-router-dom'
import {MuestraPedidos} from "../components/MuestraPedidos.jsx"
import { moveOrderTo } from '../utils/moveOrderTo.jsx'

export const Camisetas = () => {
    const {handleMoveTo} = moveOrderTo();

    const {getAll, results} = useCollection("pedidos");

    const [camisetas, setCamisetas] = useState([]);

    const navigate = useNavigate();

    useEffect(() => { //Setea en el arreglo de la variable de estado lo que haya en tiemo real en la base de datos
        setCamisetas(results);
        console.log(camisetas)
    }, [results, navigate])

    useEffect(() => {; //Escucha los cambios de la base de datos
        const unsubscribe = getAll(["clasificacion", "==", "camiseta"])
        return () => unsubscribe();
    }, []);

    const handleToCompleted = (id) => {
        handleMoveTo(id, "despachado");
    }

    const handleToCorrect = (id) => {
        handleMoveTo(id, "a corregir");
    }

    return (
        <MuestraPedidos
        pedidos={camisetas}
        textoVacio={"No hay pedidos de camisetas"}
        toCompleted={handleToCompleted}
        toCorrect={handleToCorrect}
        />
    )
}
