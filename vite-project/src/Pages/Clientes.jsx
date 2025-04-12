import React, { useState } from 'react'
import { useClientes } from '../Context/ClientesContext.jsx'
import { Link } from 'react-router-dom'


export const Clientes = () => {

    const { clientes, agregarCliente } = useClientes();
    const [nombre, setNombre] = useState('')


    const handleOnChange = (e) => {
        setNombre(e.target.value)
    }

    const handleInsertClient = () => {
        if (nombre.trim() === '') return; //Para que no se ingrese un cliente sin nombre

        agregarCliente(nombre);
        setNombre('');
    };

    return (
        <>
            <h1>LISTA DE CLIENTES</h1>

            
            <div>
                <input
                type="text"
                value={nombre}
                onChange={handleOnChange}
                placeholder="Nombre del cliente" />
                <button onClick={handleInsertClient}>Agregar Cliente</button>
            </div>

            <div>
                <ul>
                    {clientes.map((cliente, index) => (
                        <li key={index}>
                            {cliente.nombre}
                            <Link to={`/reclamos/${cliente.nombre}`}> {/* Para que se dirija a los reclamos de este cliente especifico */}
                                <button>RECLAMOS</button>
                            </Link>
                            <Link to={`/consultas/${cliente.nombre}`}> {/* Para que se dirija a las consultas de este cliente especifico */}
                                <button>CONSULTAS</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            
        </>
    )
}
