import React, {useContext, useState} from 'react'
import { LibraryContext } from '../Context/LibraryContext';
import { BookCard } from '../components/BookCard';

export const DevolucionesRecientes = () => {
    const {devueltos, availableBooks, currentUser} = useContext(LibraryContext)

    const [losReservados, setLosReservados] = useState(JSON.parse(localStorage.getItem(`reservados_${currentUser.username}`)) || []);

    console.log("Libros a devolver - ", devueltos)

    const handleReDo = (isbn) => {
        console.log("Ates de la tragedia:", devueltos) //Desde acá ya entra sin la modificacion que se le hizo ¿POR QUE?
        const devuelto = devueltos.items.find(book => book.isbn === isbn); //Busca el libro en los devueltos   
        console.log("Dizque items: ", devueltos.items) //También vacio
        console.log("El que se devuelve: ", devuelto)
        console.log("La cola del libro -- ", devuelto.cola)

        // disponibles.unshift(devuelto); //Agrega el libro devuelto al arreglo de libros que los muestra
        // localStorage.setItem("availableBooks", JSON.stringify(disponibles)); //Actualiza el localStorage de los disponibles
        if(devuelto.cola.length === 0){
            availableBooks.append(devuelto); //Agrega el libro devuelto a la lista de disponibles
            console.log("El que se devuelve: ", devuelto)
            devuelto.owner = ""; //Reestablece el dueño como vacío
            devuelto.reserved = !devuelto.reserved;
            console.log("Cambiando cositas: ", devuelto)
        }else{
            devuelto.owner = devuelto.cola.items.shift(); //Saca el primer usuario y lo asigna como nuevo owner
            console.log("Supuesto nuevo dueño: ", devuelto.owner);
            const librosNuevaReserva = JSON.parse(localStorage.getItem(`reservados_${devuelto.owner}`)) || []; //Toma los libros del nuevo dueño
            console.log("Fokin nueva reserva", librosNuevaReserva)
            const librosNuevaReservaActualizados = [...librosNuevaReserva, devuelto]; //Agrega el nuevo libro
            localStorage.setItem(`reservados_${devuelto.owner}`, JSON.stringify(librosNuevaReservaActualizados)); //Actualiza el localStorage de este usuario con su nuevo libro reservado
        }

        const actualizados = losReservados.filter(libro => libro !== devuelto); //Toma todos los reservados del usuario excepto el que devolvió
        setLosReservados(actualizados); //Settea el arreglo antes creado con los libros no devueltos en el estado
        localStorage.setItem(`reservados_${currentUser.username}`, JSON.stringify(actualizados)); //Actualiza el localStorage del usuario
        devueltos.pop(); //ELimina el ultimmo que se agregó
    }


    return (
    <div>
        <h1>Mis devoluciones recientes</h1>
        {devueltos.isEmpty() ? (
            <p>No tienes devoluciones</p>
            ) : (
                <div className='books-list'>
                    {devueltos?.items?.slice().reverse().map(libro => (
                        <BookCard
                            key={libro.isbn}
                            libro={libro}
                            onReDo={handleReDo}
                        />
                        ))
                    }
                </div>
            )
        }
    </div>
    )
}
