import "../styles/header.css"
import React, {useState, useContext } from 'react';
import { useNavigate} from 'react-router-dom';
import { LibraryContext } from "../Context/LibraryContext";

const Header = () => {
    const { currentUser, logout } = useContext(LibraryContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    const handleLogout = () => {
    logout();
    navigate("/");
    };

    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-title" onClick={() => navigate("/libros-disponibles")}>
                    Gestion Libreria
                </h1>
                <nav className="header-nav">
                {!currentUser ? (
                    <button className="btn btn-primary" onClick={() => navigate("/login")}>
                        Iniciar Sesión
                    </button>
                ) : (
                    <>
                        <div className="user-menu">
                            <button className="user-menu-button" onClick={toggleMenu}>
                                {currentUser.username}
                            </button>
                            {isMenuOpen && (
                                <ul className="user-menu-list">
                                    <li>
                                        <button onClick={() => navigate("/libros-reservados")}>Libros reservados</button>
                                    </li>
                                    <li>
                                        <button onClick={() => navigate("/devoluciones-recientes")}>Devoluciones recientes</button>
                                    </li>
                                    <li>
                                        <button onClick={handleLogout}>Cerrar Sesión</button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </>
                )}
                </nav>
            </div>
        </header>
    );
};

export default Header;