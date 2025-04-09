import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({children}) => {

    const {status} = useSelector((state) => state.auth) //Toma el estado de autenticación de authSlice

    if (status == "not authenticated") { //Si el estado es not authenticated, redirecciona a login
        return <Navigate to={"/login"} /> //Si el estado no es authenticated, redirecciona a login
    }

    return children
}
