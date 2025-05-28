import {Link} from 'react-router-dom'
import { useUser } from '../Context/UserContext'
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useEffect } from 'react';
import styles from "./Header.module.scss"

export const Header = () => {
    const {user, dark, setDark} = useUser();

    useEffect(() => {
        console.log(dark)
        let theme;
        if(dark){
            theme = "dark"
        }else{
            theme = "light"
        }
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme)
    }, [dark])

    return (
        <header className={styles.header}>
            <div>
                <h3>Tu user: {user}</h3>
            </div>
            <div className={styles.actions}>
                <div onClick={() => setDark(!dark)}>
                    {dark ? 
                    <CiLight className={dark ? styles.dark : styles.light}/> 
                    : 
                    <MdOutlineDarkMode className={dark ? styles.dark : styles.light}/>}
                </div>
                <Link to = "/login" className={dark ? styles.dark : styles.light}>Ir al login</Link>
                <Link to = "/" className={dark ? styles.dark : styles.light}>Ver noticias</Link>
                <Link to = "/profile" className={dark ? styles.dark : styles.light}>Ir al perfil</Link>
            </div>
        </header>
    )
}
