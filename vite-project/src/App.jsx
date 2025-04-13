import './App.css'
import {Routes, Route} from "react-router-dom"
import { Dashboard } from './Pages/Dashboard'
import { Register } from './Pages/Register'
import { Login } from './Pages/Login'
import { Home } from './Pages/Home'
import { ProtectedRoute } from './Components/ProtectedRoute'
import { Crud } from './Components/Crud'
import { Edit } from './Pages/Edit'

function App() {

    return (
    <Routes>
        <Route path='/dashboard'
        element={
            <ProtectedRoute>
                <Dashboard/>
            </ProtectedRoute>
        } />
        <Route path='crud' element={<Crud/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/edit/:name/:id' element={<Edit/>} />
    </Routes>
    )
}

export default App
