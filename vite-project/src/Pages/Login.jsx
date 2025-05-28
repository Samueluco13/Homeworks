import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useUser } from '../Context/UserContext.jsx';
import { Popup } from '../Components/Popup.jsx';
import styles from "./Login.module.scss"

export const Login = () => {
    const [showPopup, setShowPopup] = useState(false);

    const { login, dark } = useUser(); // Destructuramos el login del contexto

    const [formData, setFormData] = useState({
        user: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.user === 'Samuel13' || formData.password === '123456789') {
            setShowPopup(true);
            login(formData.user);            
        } else {
            if (formData.user === '' || formData.password === '') {
                alert("Ambos campos deben tener información");
            }else{
                alert("Usuario o contraseña incorrectos");
            }
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        navigate('/profile');
    }

    return (
        <>
            <h1>Inicia Sesion</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User: </label>
                    <input
                        type="text"
                        name = "user"
                        placeholder='Samuel13'
                        value={formData.user}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        name='password'
                        placeholder='123456789'
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className={dark ? styles.dark : styles.light}>Iniciar sesion</button>
            </form>
            {showPopup && (
                <Popup
                text="Has iniciado sesión"
                button={
                    <button
                    onClick={handleClosePopup}
                    className={dark ? styles.dark : styles.light}
                    >
                        Ok
                    </button>
                }
                />
            )}
        </>
    );
};