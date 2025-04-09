import './App.css'
import {Routes, Route} from "react-router-dom"
import { Dashboard } from './Pages/Dashboard'
import { Register } from './Pages/Register'
import { Login } from './Pages/Login'
import { Home } from './Pages/Home'
import { ProtectedRoute } from './Components/ProtectedRoute'

function App() {






    return (
    <Routes>
        <Route path='/dashboard'
        element={
            <ProtectedRoute>
                <Dashboard/>
            </ProtectedRoute>
        } />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
    </Routes>
    )
}

export default App
