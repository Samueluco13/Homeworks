import { useEffect, useState } from 'react'
import { useCollection } from '../slices/useCollection.js'
import { useNavigate } from 'react-router-dom'
import {MuestraPedidos} from "../components/MuestraPedidos.jsx"

export const ACorregir = () => {
    const {getAll, results} = useCollection("pedidos");

    const [aCorregir, setACorregir] = useState([]);

    const navigate = useNavigate();

    useEffect(() => { //Setea en el arreglo de la variable de estado lo que haya en tiemo real en la base de datos
        setACorregir(results);
        console.log(aCorregir)
    }, [results, navigate])

    useEffect(() => {; //Escucha los cambios de la base de datos
        const unsubscribe = getAll(["clasificacion", "==", "a corregir"])
        return () => unsubscribe();
    }, []);


    return (
        <MuestraPedidos pedidos={aCorregir} textoVacio={"No hay pedidos a corregir"}/>
    )
}
