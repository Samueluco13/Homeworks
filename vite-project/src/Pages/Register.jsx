import React from 'react'
import {useDispatch} from "react-redux"
import { registerAuth } from '../Slices/Thunks/registerAuth';
import { useState } from 'react';
import {Link} from "react-router-dom"

export const Register = () => {

    const dispatch = useDispatch();

    const [formState, setFormState] = useState({
        email: "user1@gmail.com",
        password: "123456789"
    });

    const onInputChange = (evt) => {
        const {name, value} = evt.target;
        setFormState({...formState, [name]: value})
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState)
        dispatch(registerAuth(formState.email, formState.password))
    }

    return (
    <>
        <h1>Registro</h1>
        <hr />
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="email" name="email" onChange={(event) => onInputChange(event)} value={formState.email}/>
            <input type="pasword" name='password' onChange={(event) => onInputChange(event)} value={formState.password} />
            <button type='submit'>Registro</button>
            <nav>
                <ul>
                    <li><Link to="/login">Ir al login</Link></li>
                    <li><Link to="/" >Volver al home</Link></li>
                </ul>
            </nav>
        </form>
    </>
    )
}
