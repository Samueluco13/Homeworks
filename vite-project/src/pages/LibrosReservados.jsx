import React from 'react'
import { useContext, useState } from 'react';
import { LibraryContext } from '../Context/LibraryContext';
import { BookCard } from '../components/BookCard';

export const LibrosReservados = () => {
    const {
            currentUser,
            devueltos
        } = useContext(LibraryContext);

    const [losReservados, setLosReservados] = useState(JSON.parse(localStorage.getItem(`reservados_${currentUser.username}`)) || []);
    console.log("Los reservados", losReservados)

    const handleReturn = (isbn) => {
        const devuelto = losReservados.find(book => book.isbn == isbn); //Busca el libro en los reservados del usuario
        console.log("Antes de ingresarlo: ", devueltos)
        devueltos.push(devuelto); //Agrega el libro devuelto a la pila de devueltos
        
        console.log("Lo que se va a devolver: ", devueltos)

        const actualizados = losReservados.filter(libro => libro !== devuelto); //Toma todos los reservados del usuario excepto el que devolvió
        setLosReservados(actualizados); //Settea el arreglo antes creado con los libros no devueltos en el estado
        console.log("Los que no se devolvieron: ", actualizados)
        localStorage.setItem(`reservados_${currentUser.username}`, JSON.stringify(actualizados)); //Actualiza el localStorage del usuario
    }

    /* PARA ELIMINAR USUARIOS EN CASO DE NECESITARLO

    const eliminaReservado = (isbn) => {
    const reservados = JSON.parse(localStorage.getItem("reservados")) || [];
    const nuevosReservados = reservados.filter(libro => libro.isbn !== isbn);
    localStorage.setItem("users", JSON.stringify(nuevosReservados));
    };

    eliminaReservado("978-3-16-148410-0");    
    */


    return (
        <div>
            <h1>Mis Libros Reservados</h1>
            {losReservados.length === 0 ? (
                <p>No tienes libros reservados</p>
                ) : (
                    <div className='books-list'>
                        {losReservados.map(libro => (
                            <BookCard
                                key={libro.isbn}
                                libro={libro}
                                onReturn={() => handleReturn(libro.isbn)}
                            />
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};
