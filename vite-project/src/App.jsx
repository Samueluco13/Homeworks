import React from 'react'
import "./App.css"
import {Clientes} from "./Pages/Clientes"
import {Consultas} from "./Pages/Consultas"
import {Reclamos} from "./Pages/Reclamos"
import { Routes, Route } from 'react-router-dom'
import { ClientesProvider } from './Context/ClientesContext'

export const App = () => {
  return (
    <ClientesProvider>
      <Routes>
        <Route path="/" element={<Clientes />} />
        <Route path="/consultas/:nombre" element={<Consultas />} />
        <Route path="/reclamos/:nombre" element={<Reclamos />} />
      </Routes>
    </ClientesProvider>
  )
}
