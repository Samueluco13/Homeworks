import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ButtonNav = ({ruta, text}) => {
    
    const navigate = useNavigate()

    return (
    <button onClick={() => navigate(ruta)}>{text}</button>
    )
}
