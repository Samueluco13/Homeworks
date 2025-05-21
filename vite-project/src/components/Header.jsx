import {useState, useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { adminMenu, userMenu } from '../data.js'
import { MenuItem } from '../MenuItem.jsx'
import { IoReorderThree } from "react-icons/io5";
import { Popup } from './Popup.jsx'
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../slices/authSlice.js'
import { rutas } from '../data.js';
import '../styles/Header.css'

export const Header = () => {
    const url = useLocation(); //Toma toda la url
    const rutaActual = url.pathname; //Toma la pagina en la nos encontramos
    const paginaActual = rutas[rutaActual]; //Asigna a la variable el valor que hay en el diccionario (rutas) dependiendo de la clave (rutaActual)
    
    const auth = useSelector((state) => state.auth);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const itemsAdminMenu = [
        ...adminMenu,
        {
            title: "Logout",
            onClick: () => setShowPopup(true)
        },
        {
            title: "Close",
            onClick: () => setIsMenuOpen(false)
        }
    ];
    
    const itemsUserMenu = [
        ...userMenu,
        {
            title: "Logout",
            onClick: () => setShowPopup(true)
        },
        {
            title: "Close",
            onClick: () => setIsMenuOpen(false)
        }
    ];

    useEffect(() => {
        setIsMenuOpen(false)
    }, [navigate])
    
    useEffect(() => { //Efecto que toma el estado logged para manejar el guardado de datos para la persistencia
        if (auth.logged) {
            localStorage.setItem("currentUser", JSON.stringify(auth));
        } else {
            localStorage.removeItem("currentUser");
        }
    }, [auth]);

    const handleLogout = async () => {
        await dispatch(logout());
        localStorage.removeItem("currentUser")
        setShowPopup(false);
        setIsMenuOpen(false);
        navigate("/");
    };
    console.log(auth.userName)

    return (
        <header className='header' >
            <div className='header-container' >
                {auth.logged && (
                    <button className='tri-line' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <IoReorderThree /> {auth.displayName} - {paginaActual}
                    </button>
                )}
                <div className={`side-menu ${isMenuOpen ? 'open' : ''}`} >
                    {isMenuOpen && (
                        <MenuItem arbol={auth.rol === "Admin" ? (itemsAdminMenu) : (itemsUserMenu)}/>
                    )}
                </div>
                <h1>Streetwear Style</h1>
            </div>
            {showPopup && (
                <Popup
                text="¿Estás seguro de que quieres cerrar sesión?"
                button={
                    <div className='confirmation-btns' >
                        <button onClick={handleLogout}>Cerrar sesión</button>
                        <button onClick={() => setShowPopup(false)} >Cancelar</button>
                    </div>
                }/>
            )}
        </header>
    )
}
