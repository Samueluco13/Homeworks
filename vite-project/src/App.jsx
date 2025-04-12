import React, { useState, useRef } from 'react'
import { Book, BookStack } from "./Classes/Books"

export const App = () => {
  const pilaRef = useRef(new BookStack()); //Evita la renderizacion de la pila

  //Agrega mocked data
    pilaRef.current.push(new Book("100 años de soledad", "12345678", "Gabriel García Márquez", "Alfaguara"));
    pilaRef.current.push(new Book("Padre Rico, Padre Pobre", "87654321", "Robert Kiyosaki", "Aguilar"));
    pilaRef.current.push(new Book("El cuervo", "91836614", "Edgar Allan Poe", "Editorial Alma"));
  
    //El .current se usa porque es el objeto que guarda la referencia a la pila, y no el useRef en sí

  const [libros, setLibros] = useState(pilaRef.current.getBooks());
  const [libro, setLibro] = useState({
    name: '',
    isbn: '',
    author: '',
    editorial: ''
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target; //Cada vez que se escriba en los inputs se va actualizando la informacion en el estado del libro
    setLibro(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const nuevoLibro = new Book(libro.name, libro.isbn, libro.author, libro.editorial);
    pilaRef.current.push(nuevoLibro);
    setLibros([...pilaRef.current.getBooks()]);

    setLibro({
      name: '',
      isbn: '',
      author: '',
      editorial: ''
    });
  };

  return (
    <>
      <div><h1>PILA DE LIBROS</h1></div>
      <form onSubmit={handleAdd}>
        <input name='name' value={libro.name} onChange={handleChange} type="text" placeholder='Nombre del libro' required />
        <input name='isbn' value={libro.isbn} onChange={handleChange} type="text" placeholder='ISBN del libro' required />
        <input name='author' value={libro.author} onChange={handleChange} type="text" placeholder='Autor del libro' required />
        <input name='editorial' value={libro.editorial} onChange={handleChange} type="text" placeholder='Editorial del libro' required />
        <button >Agregar libro</button>
      </form>

      <aside>
        <h3>Lista de libros</h3>
        <ul>
          {libros.map((libro) => (
            <li key={libro.isbn}>
              <strong>{libro.name}</strong> - {libro.author} ({libro.editorial}) - ISBN: {libro.isbn}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
