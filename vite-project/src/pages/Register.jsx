import "../styles/authPages.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({username: '', password: ''});

    //Maneja lo que se toma cuando se escribe en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    //Manejo del envio de datos del formulario REGISTER
    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some((user) => user.username === formData.username)) {
            alert("El username ya está registrado");
            return;
        }
        const user = {
            username: formData.username,
            password: formData.password,
            reservedBooks: []
        };
        alert("Registro exitoso")
        console.log("El usuario es: ", user)
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        console.log(users)
    };

    /* PARA ELIMINAR UN USUARIO EN CASO DE NECESITARLO
    
    const eliminarUsuarioPorUsername = (username) => {
        const usuarios = JSON.parse(localStorage.getItem("users")) || [];
        console.log("Antes de la eliminacion", usuarios)
        const nuevosUsuarios = usuarios.filter(usuario => usuario.username !== username);
        localStorage.setItem("users", JSON.stringify(nuevosUsuarios));
        console.log("Despues de la eliminacion", usuarios)
    };
    
    eliminarUsuarioPorUsername("samuel.sepulveda");
    */

    return (
        <div className='form-container'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="form-data">
                <div className="form-group" >
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group" >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn-form">Register</button>
                <Link to={"/login"} >Login</Link>
            </form>
        </div>
    );
};

export default Register;