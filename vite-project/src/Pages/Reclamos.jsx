import React from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { useState } from 'react'
import { useClientes } from '../Context/ClientesContext'

export const Reclamos = () => {

    const { nombre } = useParams() //Para obtener el nombre del cliente de la URL
    const { clientes,  agregarReclamo } = useClientes(); //Llama a la funcion agregar reclamo del context y le pasa el nombre del cliente y el reclamo
    

    const [reclamo, setConsulta] = useState('')

    const cliente = clientes.find(reclamo => reclamo.nombre === nombre);
    
        const handleOnChange = (e) => {
            setConsulta(e.target.value)
        }
    
        const handleInsertReclamo = () => {
            if (reclamo.trim() === '') return; //Para que no se ingrese un reclamo sin texto
    
            agregarReclamo(nombre, reclamo); //Llama a la funcion agregar reclamo del context y le pasa el nombre del cliente y el reclamo
            console.log(reclamo);
            setConsulta('');
        };
    
        return (
            
            <>
                <Link to="/" >Lista de clientes</Link>
                <h1>RECLAMOS DE {nombre}</h1>

                <textarea
                placeholder="Escribe su reclamo aquí"
                name='reclamo'
                value={reclamo}
                onChange={handleOnChange}
                rows={5}
            />

                <button onClick={handleInsertReclamo} >Agregar reclamo</button>

                <ul>
                    {cliente?.obtenerReclamos().map((reclamo, index) => (
                        <li key={index}>{reclamo}</li>
                    ))}
                </ul>


            </>
        )
}