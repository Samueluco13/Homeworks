import { useUser } from '../Context/UserContext.jsx'
import { Popup } from '../Components/Popup.jsx';
import { useState } from 'react';
import styles from "./Profile.module.scss"

export const Profile = () => {
    const [showPopup, setShowPopup] = useState(false);
    const {logout, dark} = useUser();

    const handleLogout = () => {
        setShowPopup(false);
        logout();
    }


    return (
        <div className={styles.profile}>
            <h1>MI PERFIL</h1>
            <button
            onClick={() => setShowPopup(true)}
            className={dark ? styles.dark : styles.light}
            >
                Cerrar sesion
            </button>
            {showPopup && (
                <Popup
                text="Has cerrado sesión"
                button={
                    <button
                    onClick={handleLogout}
                    className={dark ? styles.dark : styles.light}
                    >
                        Ok
                    </button>
                }
                />
            )}
        </div>
    )
}
