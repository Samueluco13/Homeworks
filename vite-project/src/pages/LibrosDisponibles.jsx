import React, {useState, useEffect} from 'react'  //DEBE SER UNA LISTA (LinkedList)
import { BookCard } from '../components/BookCard';
import { useContext } from 'react';
import { LibraryContext } from '../Context/LibraryContext';

export const LibrosDisponibles = () => {
    const {
        currentUser,
        availableBooks,
        disponibles
    } = useContext(LibraryContext);

    const handleReserve = (isbn) => {
        const reservados = JSON.parse(localStorage.getItem(`reservados_${currentUser.username}`)) || [];

        const reserved = availableBooks.peek(isbn); //Se busca con el metodo de la lista
        availableBooks.remove(isbn); //Elimina con el metodo de la lista

        const libroReservado = disponibles.find(libro => libro.isbn === reserved.value.isbn); //Busca coincidencia en el localStorage

        libroReservado.owner = currentUser.username //Asigna el nombre del usuario que lo reservó
        
        libroReservado.reserved = !libroReservado.reserved //Conmuta la booleana sobre su estado
        
        reservados.push(libroReservado); //Lo agrega al localStorage
        console.log("Se reservó: ",reservados)
        localStorage.setItem(`reservados_${currentUser.username}`, JSON.stringify(reservados)); //Actualiza el localStorage del usuario

        // const nuevosDisponibles = disponibles.filter(rese => rese.isbn !== reserved.value.isbn); //Toma todos, excepto el reservado
        // setDisponibles(nuevosDisponibles); //Settea el estado del localStorage
    }


    const handleQueue = (isbn) => {
        const enfilar = disponibles.find(libro => libro.isbn === isbn); //Saca el libro para agregar usuarios a su cola

        const enfilados = enfilar.cola.items;
        console.log("Los de la fila", enfilados)
        if(enfilados.includes(currentUser.username)){
            alert("Ya te encuentras haciendo fila")
        }else{
            enfilar.cola.enqueue(currentUser.username); //Agrega al usuario actual a la cola
            console.log("Cola para reserva: ", enfilar.cola);
    
            const librosOtro = JSON.parse(localStorage.getItem(`reservados_${enfilar.owner}`)); //Saca los libros del dueño del libro en el que ingresó a su cola
            const librosActualizados = librosOtro.map(libro => libro.isbn === enfilar.isbn ? {...libro, cola: enfilar.cola} : libro); //Modifica la cola de este mismo libro en el localStorage
            localStorage.setItem(`reservados_${enfilar.owner}`, JSON.stringify(librosActualizados)); //Aguarda estos cambios en el localStorage
        }
    }


    return (
    <div className='dashboard'>
        <h1>CATALOGO DE LIBROS DISPONIBLES</h1>
        {disponibles.length === 0 ? (
            <p>No hay libros disponibles</p>
            ) : (
                <div className='books-list'>
                    {disponibles.map(libro => (
                        <BookCard
                            key={libro.isbn}
                            libro={libro}
                            onTake={handleReserve}
                            onQueue={handleQueue}
                        />
                        ))
                    }
                </div>
            )
        }
    </div>
    )
}
