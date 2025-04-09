import React from 'react'
import {Link} from 'react-router-dom'
import { useUser } from '../Context/UserContext'

export const Header = () => {

    const {user} = useUser();

    return (
        <header>
            <div>
                <Link to = "/login">Ir al login</Link>
            </div>
            <div>
                <Link to = "/">Ver noticias</Link>
            </div>
            <div>
                <Link to = "/profile">Ir al perfil</Link>
            </div>
            <div>
                <h3>Tu user: {user}</h3>
            </div>
            
        </header>
    )
}
