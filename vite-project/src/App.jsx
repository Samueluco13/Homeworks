import './App.css'
import { LibrosDisponibles } from './pages/LibrosDisponibles'
import { AuthProvider } from './Context/LibraryContext';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/Header';
import { ProtectedRoute } from './components/ProtectedRoute';
import { LibrosReservados } from './pages/LibrosReservados';
import { DevolucionesRecientes } from './pages/DevolucionesRecientes';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/libros-disponibles" element={
              <ProtectedRoute>
                <LibrosDisponibles/>
              </ProtectedRoute>
              }
            />
            <Route path="/libros-reservados" element={
              <ProtectedRoute>
                <LibrosReservados/>
              </ProtectedRoute>
              }
            />
            <Route path="/devoluciones-recientes" element={
              <ProtectedRoute>
                <DevolucionesRecientes/>
              </ProtectedRoute>
              }
            />
          </Routes>
        </main>
    </AuthProvider>
  </BrowserRouter>
    
  )
}

export default App
