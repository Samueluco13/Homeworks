import React, { useState} from 'react'
import {useDispatch} from 'react-redux'
import { loginAuth } from '../Slices/Thunks/loginAuth';
import {Link} from "react-router-dom"
import { googleAuth } from '../Slices/Thunks/googleAuth';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const [formState, setFormState] = useState({
        email: "",
        password: ""
    });

    const onInputChange = (evt) => {
        const {name, value} = evt.target;
        setFormState({...formState, [name]: value})
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log("Tus datos: ",formState)
        try {
            await dispatch(loginAuth(formState.email, formState.password))
            alert('Inicio de sesión exitoso!')
            navigate('/dashboard')
        } catch (error) {
            alert('Error al iniciar sesión: ' + error.message)
        }

    }


    const handleGoogleLogin = async () => {
        try {
            await dispatch(googleAuth())
            alert("Sesión iniciada con Google")
            navigate('/dashboard')
        } catch (error) {
            alert("Error con Google: " + error.message)
        }
    }   


    return (
    <>
        <h1>Inicio de Sesion</h1>
        <hr />
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="email" name="email" onChange={(event) => onInputChange(event)} value={formState.email}/>
            <input type="pasword" name='password' onChange={(event) => onInputChange(event)} value={formState.password} />
            <button type='submit'>Inicio de sesion</button>
            <nav>
                <ul>
                    <li><Link to="/register">Ir al registro</Link></li>
                    <li><Link to="/" >Volver al home</Link></li>
                </ul>
            </nav>
            <button type="button" onClick={handleGoogleLogin} >Iniciar con Google</button>
        </form>
    </>
    )
}
