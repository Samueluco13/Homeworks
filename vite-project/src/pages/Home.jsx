import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => navigate("prev-tree")} >Ir al arbol viejo</button>
            <button onClick={() => navigate("new-tree")} >Ir al arbol nuevo</button>
        </div>
    )
}
