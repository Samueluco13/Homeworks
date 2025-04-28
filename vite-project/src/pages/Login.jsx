import "../styles/authPages.css"
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LibraryContext } from "../Context/LibraryContext";

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const {login} = useContext(LibraryContext)
    const navigate = useNavigate()

    //Maneja lo que se toma cuando se escribe en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    //Manejo del envio de datos del formulario LOGIN
    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((u) => u.username === formData.username && u.contrasena === formData.contrasena);
        console.log(users);
        
        if (user) {
            login(user);
            navigate("/libros-disponibles");
        } else {
            alert("Nombre o contraseña incorrectos");
        }
        console.log("El usuario es: ", user)
    };

    return (
        <div className='form-container'>
            <h2>Login</h2>
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
                <button type="submit" className="btn-form">Login</button>
                <Link to={"/"} >Register</Link>
            </form>
        </div>
    );
};


export default Login;