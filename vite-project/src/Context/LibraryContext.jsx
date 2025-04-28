import { useState, createContext, useEffect } from "react";
import { BookList } from '../classes/BookList';
import { librosMock } from '../data';
import { ReturnStack } from '../classes/ReturnStack'
import { UsersQueue } from "../classes/UsersQueue";


export const LibraryContext = createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);


    const librosDisponibles = JSON.parse(localStorage.getItem("availableBooks") || "[]") || [];
    const librosConCola = librosDisponibles.map((book) => ({
        ...book, cola: new UsersQueue(), //Crea una queue para la cola de cada libro
    }));

    const [disponibles, setDisponibles] = useState(librosConCola);

    console.log("Disponibles -- ", disponibles)

/* PARA INGRESAR LOS DATOS MOCKED AL LOCALSTORAGE
    console.log("MOCKED: ", librosMock)
    localStorage.setItem("availableBooks", JSON.stringify(librosMock));
    const lsBooks = localStorage.getItem("availableBooks")
    console.log("Guardados en localStorage: ", lsBooks)
*/

    const devueltos = new ReturnStack();

    const [availableBooks, setAvailableBooks] = useState(() => {
        if (disponibles) {
            const libros = new BookList();
            disponibles.forEach(libro => libros.append(libro));
            return libros;
        }else{
            const libros = new BookList();
            librosMock.forEach(libro => libros.append(libro));
            return libros;
        }
    });

    const login = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user))
    }

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
    }

    //PERSISTENCIA A LA HORA DE RECARGAR PAGINA
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("currentUser"));
        if (storedUser) setCurrentUser(storedUser);
    }, []);

    return (
        <LibraryContext.Provider value={{
            currentUser, setCurrentUser,
            login, logout,
            availableBooks, setAvailableBooks,
            disponibles, setDisponibles,
            devueltos
            }}>
                {children}
        </LibraryContext.Provider>
    );
}