import React, { createContext, useContext, useState } from 'react';
import { Cliente } from '../Classes/Cliente';
import { Consultas } from '../Classes/Consultas';
import { Reclamos } from '../Classes/Reclamos';

const ClientesContext = createContext();

export const ClientesProvider = ({ children }) => {
    const [clientes, setClientes] = useState([]);

    const agregarCliente = (nombre) => {
    const nuevoCliente = new Cliente(nombre); //Para no tener que importar y crear al cliente en el componente Clientes
    console.log(nuevoCliente);
    setClientes((prev) => [...prev, nuevoCliente]); //Va a agregar el nuevo cliente al array de clientes
    };

    const obtenerClientes = () => clientes;


    const agregarConsulta = (nombreCliente, consulta) => {
        setClientes(clientesDentro => clientesDentro.map(cliente => {
                if (cliente.nombre === nombreCliente) {

                    const nuevoCliente = new Cliente(cliente.nombre);

                    const nuevaCola = new Consultas();

                    cliente.consultas.getAll().forEach(consulta => nuevaCola.enqueue(consulta));
                    nuevaCola.enqueue(consulta);

                    nuevoCliente.consultas = nuevaCola;
                    nuevoCliente.reclamos = cliente.reclamos;

                    return nuevoCliente;
                }
                return cliente;
            })
        );
    };

    const agregarReclamo = (nombreCliente, reclamo) => {
        setClientes(clientesDentro => clientesDentro.map(cliente => {
            if (cliente.nombre === nombreCliente) {

                const nuevoCliente = new Cliente(cliente.nombre);

                const nuevaFila = new Reclamos();

                cliente.reclamos.getAll().forEach(reclamo => nuevaFila.push(reclamo));
                nuevaFila.push(reclamo);

                nuevoCliente.consultas = cliente.consultas;
                nuevoCliente.reclamos = nuevaFila;

                return nuevoCliente;
            }
            return cliente;
        })
    );
    };


    return (
        <ClientesContext.Provider value={{ clientes, agregarCliente, obtenerClientes, agregarConsulta, agregarReclamo }}>
            {children}
        </ClientesContext.Provider>
    );
};

export const useClientes = () => {
    return useContext(ClientesContext);
}