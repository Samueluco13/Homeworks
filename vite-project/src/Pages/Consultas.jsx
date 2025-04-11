import React from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { useState } from 'react'
import { useClientes } from '../Context/ClientesContext'

export const Consultas = () => {

    const { nombre } = useParams() //Para obtener el nombre del cliente de la URL
    const { clientes, agregarConsulta } = useClientes();

    const [consulta, setConsulta] = useState('')

    const cliente = clientes.find(consulta => consulta.nombre === nombre);

    const handleOnChange = (e) => {
        setConsulta(e.target.value)
    }

    const handleInsertConsulta = () => {
        if (consulta.trim() === '') return; //Para que no se ingrese una consulta sin texto

        agregarConsulta(nombre, consulta); //Llama a la funcion agregar consulta del context y le pasa el nombre del cliente y la consulta
        console.log(consulta);
        setConsulta('');
    };


    return (
        <>
            <Link to="/" >Ir a la lista de clientes</Link>
            <h1>CONSULTAS DE {nombre}</h1>
            

            <textarea
                placeholder="Escribe su consulta aquí"
                name='consulta'
                value={consulta}
                onChange={handleOnChange}
                rows={5}
            />
            <button onClick={handleInsertConsulta} >Agregar consulta</button>


            
            <ul>
                {cliente?.obtenerConsultas().map((consulta, index) => (
                    <li key={index}>{consulta}</li>
                ))}
            </ul>

        </>
    )
}
