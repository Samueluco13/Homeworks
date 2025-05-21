import { useEffect, useState } from 'react'
import { useCollection } from '../slices/useCollection.js'
import { useNavigate } from 'react-router-dom'
import {MuestraPedidos} from "../components/MuestraPedidos.jsx"

export const Pantalones = () => {
    const {handleMoveTo} = moveOrderTo();

    const {getAll, results} = useCollection("pedidos");

    const [pantalones, setPantalones] = useState([]);

    const navigate = useNavigate();

    useEffect(() => { //Setea en el arreglo de la variable de estado lo que haya en tiemo real en la base de datos
        setPantalones(results);
        console.log(pantalones)
    }, [results, navigate])

    useEffect(() => {; //Escucha los cambios de la base de datos
        const unsubscribe = getAll(["clasificacion", "==", "pantalon"])
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
        pedidos={pantalones}
        textoVacio={"No hay pedidos de pantalones"}
        toCompleted={handleToCompleted}
        toCorrect={handleToCorrect}
        />
    )
}
