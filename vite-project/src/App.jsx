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
import { Header } from './components/Header.jsx'
import { Provider } from 'react-redux';
import { store } from "./slices/store.js"

function App() {

  return (
    <>
    <Provider store={store}>
      <Header/>
      <main>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<Register/>} />

            <Route path='/recibidos' element={
              <PrivateRoute>
                <Recibidos/>
              </PrivateRoute>
          } />
            <Route path='/camisetas' element={
              <PrivateRoute>
              <Camisetas/>
              </PrivateRoute>
          } />
            <Route path='/pantalones' element={
              <PrivateRoute>
              <Pantalones/>
              </PrivateRoute>
          } />
            <Route path='/zapatos' element={
              <PrivateRoute>
              <Zapatos/>
              </PrivateRoute>
          } />
            <Route path='/a-corregir' element={
              <PrivateRoute>
              <ACorregir/>
              </PrivateRoute>
          } />
            <Route path='/completados' element={
              <PrivateRoute>
              <Completados/>
              </PrivateRoute>
          } />
          </Routes>
      </main>
    </Provider>
    </>
    
  )
}

export default App
