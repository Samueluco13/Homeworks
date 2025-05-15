import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { cosasMenu } from '../data.js'
import { MenuItem } from '../MenuItem.jsx'
import { IoReorderThree } from "react-icons/io5";
import { Popup } from './Popup.jsx'
import { useDispatch } from 'react-redux';
import {logout} from '../slices/authSlice.js'
import '../styles/Header.css'

export const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const cosasMenuClose = [
        ...cosasMenu,
        {
            title: "Logout",
            onClick: () => setShowPopup(true)
        },
        {
            title: "Close",
            onClick: () => setIsMenuOpen(false)
        }
    ];

    const handleLogout = async () => {
        await dispatch(logout());
        setShowPopup(false)
        navigate("/")
    }

    return (
        <header className='header' >
            <div className='header-container' >
                <button className='tri-line' onClick={() => setIsMenuOpen(!isMenuOpen)}><IoReorderThree /></button>
                <h1>Streetwear Style</h1>
                <div className={`side-menu ${isMenuOpen ? 'open' : ''}`} >
                    {isMenuOpen && (
                        <MenuItem arbol={cosasMenuClose}/>
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
