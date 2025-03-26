import React, {useState} from 'react'
import {Book, BookStack} from "./Classes/Books"

export const App = () => {

    const PilaLibros = new BookStack();

    //Agregando mocked data
    PilaLibros.push(new Book("100 años de soledad", "12345678", "Alfaguara", "Gabriel García Márquez"))
    PilaLibros.push(new Book("Padre Rico, Padre Pobre", "87654321", "Aguilar", "Libro de Robert Kiyosaki"))
    PilaLibros.push(new Book("El cuervo", "91836614", "Editorial Alma", "Edgar Allan Poe"))

    const [libros, setLibros] = useState(PilaLibros.getBooks()) //Como default del estado se pone la pila con la mocked data

    const handleAdd = (e) => {
        e.preventDefault(); //evita la recarga de la pagina

        PilaLibros.push(new Book(libros.name = document.getElementsByName('name')[0].value,
        libros.isbn = document.getElementsByName('isbn')[0].value,
        libros.author = document.getElementsByName('author')[0].value,
        libros.editorial = document.getElementsByName('editorial')[0].value))

        setLibros([...PilaLibros.getBooks()])
        console.log(PilaLibros.getBooks())
    }
    
    return (
    <>
    <div>PILA DE LIBROS</div>
        <form action="">
            <input name = 'name' type="text" placeholder = 'Nombre del libro'/>
            <input name = 'isbn' type="text" placeholder = 'ISBN del libro'/>
            <input name = 'author' type="text" placeholder = 'Autor del libro'/>
            <input name = 'editorial' type="text" placeholder = 'Editorial del libro'/>

            <button onClick = {handleAdd}>Agregar libro</button>
        </form>

        <aside>
            <h3>Lista de libros</h3>
            <ul>
                {
                    libros.map(libro => {
                        console.log(libro)
                        return (<li key = {libro.isbn}>
                            {libro.name}
                        </li>)
                    })
                }
            </ul>
        </aside>
    </>
)
}