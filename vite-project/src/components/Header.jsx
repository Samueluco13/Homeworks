import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { adminMenu, userMenu } from '../data.js'
import { MenuItem } from '../MenuItem.jsx'
import { IoReorderThree } from "react-icons/io5";
import { Popup } from './Popup.jsx'
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../slices/authSlice.js'
import '../styles/Header.css'

export const Header = () => {
    
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

    return (
        <header className='header' >
            <div className='header-container' >
                {auth.logged && (
                    <button className='tri-line' onClick={() => setIsMenuOpen(!isMenuOpen)}><IoReorderThree /></button>
                )}
                <h1>Streetwear Style</h1>
                <div className={`side-menu ${isMenuOpen ? 'open' : ''}`} >
                    {isMenuOpen && (
                        <MenuItem arbol={auth.rol === "Admin" ? (itemsAdminMenu) : (itemsUserMenu)}/>
                    )}
                </div>
            </div>
            {showPopup && (
                <Popup
                text="¿Estás seguro de que quieres cerrar sesión?"
                button={<button onClick={handleLogout}>Cerrar sesión</button>}
                />
            )}
        </header>
    )
}
