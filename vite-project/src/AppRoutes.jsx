import './App.css'
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute.jsx';
import { Login } from './pages/Login.jsx'
import { Register } from './pages/Register.jsx'

import { Recibidos } from './pages/Recibidos.jsx'
import { Camisetas } from './pages/Camisetas.jsx'
import { Pantalones } from './pages/Pantalones.jsx'
import { Zapatos } from './pages/Zapatos.jsx'
import { ACorregir } from './pages/ACorregir.jsx'
import { Completados } from './pages/Completados.jsx'

import { Dashboard } from './pages/Dashboard.jsx';
import { ProductDetails } from './pages/ProductDetails.jsx';

import { Header } from './components/Header.jsx'

import { AdminRoutes } from './routes/AdminRoutes.jsx';
import { UserRoutes } from './routes/UserRoutes.jsx';

function App() {
    return (
        <>
        <Header/>
        <main>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                {/* RUTAS DEL ADMINISTRADOR */}
                <Route path='/recibidos' element={
                    <PrivateRoute roles={"Admin"}>
                        <Recibidos/>
                    </PrivateRoute>
                } />
                    <Route path='/camisetas' element={
                    <PrivateRoute roles={"Admin"}>
                        <Camisetas/>
                    </PrivateRoute>
                } />
                    <Route path='/pantalones' element={
                    <PrivateRoute roles={"Admin"}>
                        <Pantalones/>
                    </PrivateRoute>
                } />
                    <Route path='/zapatos' element={
                    <PrivateRoute roles={"Admin"}>
                        <Zapatos/>
                    </PrivateRoute>
                } />
                    <Route path='/a-corregir' element={
                    <PrivateRoute roles={"Admin"}>
                        <ACorregir/>
                    </PrivateRoute>
                } />
                    <Route path='/completados' element={
                    <PrivateRoute roles={"Admin"}>
                        <Completados/>
                    </PrivateRoute>
                } />
                {/* RUTAS DEL CLIENTE */}
                <Route path='/dashboard' element={
                    <PrivateRoute roles={"usuario"} > 
                        <Dashboard/>
                    </PrivateRoute>
                } />
                <Route path='/product/:id' element={
                    <PrivateRoute roles={"usuario"} > 
                        <ProductDetails/>
                    </PrivateRoute>
                } />
            </Routes>
        </main>
        </>
    )
}

export default App
