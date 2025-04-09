import React from 'react';
import { ButtonNav } from '../Components/ButtonNav';

export const Home = () => {
    return (
        <>
        <div >
            <h1>Home Page</h1>
            <p>Registate o inicia sesion.</p>
        </div>
        <div>
            <ButtonNav ruta="/register" text="Registrarse" />
            <ButtonNav ruta="/login" text="Iniciar sesion" />
        </div>
        </>
    );
};