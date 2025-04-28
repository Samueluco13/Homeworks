import "../styles/BookCard.css"
import React, {useContext} from 'react'
import { LibraryContext } from '../Context/LibraryContext';

export const BookCard = ({libro, onTake, onReturn, onReDo, onQueue}) => {
    const {currentUser} = useContext(LibraryContext);
    return (
    <div className='book-card'>
        <h3>{libro.title}</h3>
        <p>Autor: {libro.author}</p>
        <p>Año: {libro.year}</p>
        <p>Editorial: {libro.editorial}</p>
        <div className='book-actions'>
            {libro.reserved === false && onTake && (
                <button onClick={() => onTake(libro.isbn)}>
                    Reservar
                </button>
            )}
            {libro.reserved === true && libro.owner !== currentUser.username && onQueue && (
                <button onClick={() => onQueue(libro.isbn)}>
                    En cola
                </button>
            )}
            {libro.reserved === true && libro.owner === currentUser.username && onReturn && (
                <button onClick={() => onReturn(libro.isbn)}>
                    Devolver
                </button>
            )}
            {onReDo && (
                <button onClick={() => onReDo(libro.isbn)}>
                    Enviar al catalogo
                </button>
            )}
        </div>
    </div>
    )
}
