import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUser } from '../Context/UserContext';


export const PrivateRoutes = ({children}) => {

    const {user} = useUser(); //Saca el usuario del contexto

    //Si existe un usuario, muestra lo que haya dentro de las rutas privadas, sino, redirige al login
    return user ? children : <Navigate to="/login" />;
};

