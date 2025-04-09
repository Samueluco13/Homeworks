import React from 'react'
import { useUser } from '../Context/UserContext.jsx'

export const Profile = () => {

    const {user, logout} = useUser();

    const handleLogout = () => {
        logout();
        alert("Has cerrado sesion correctamente");
    }


    return (
    <>
        <h1>MI PERFIL</h1>

        <button onClick={handleLogout} >Cerrar sesion</button>

    </>
    )
}
