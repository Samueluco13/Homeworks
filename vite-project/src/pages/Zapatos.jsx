import { useEffect, useState } from 'react'
import { useCollection } from '../slices/useCollection.js'
import { useNavigate } from 'react-router-dom'
import {MuestraPedidos} from "../components/MuestraPedidos.jsx"
import { moveOrderTo } from '../utils/moveOrderTo.jsx'

export const Zapatos = () => {
    const {handleMoveTo} = moveOrderTo();
    const {getAll, results} = useCollection("pedidos");

    const [zapatos, setZapatos] = useState([]);

    const navigate = useNavigate();

    useEffect(() => { //Setea en el arreglo de la variable de estado lo que haya en tiemo real en la base de datos
        setZapatos(results);
        console.log(zapatos)
    }, [results, navigate])

    useEffect(() => {; //Escucha los cambios de la base de datos
        const unsubscribe = getAll(["clasificacion", "==", "zapato"])
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
        pedidos={zapatos}
        textoVacio={"No hay pedidos de zapatos"}
        toCompleted={handleToCompleted}
        toCorrect={handleToCorrect}
        />
    )
}
