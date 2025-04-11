import React, {useState, useEffect} from 'react'
import {DoublyLinkedList} from '../Classes/DoublyLinkedList'
import {Link} from 'react-router-dom'

export const VisitedPages = () => {

    const historial = [
        {page: "Clientes"},
        {page: "Consultas"},
        {page: "Reclamos"},
        {page: "Historial"},
        {page: "Playlist"},
    ]
    
    const [page, setPage] = useState("")
    const [listaDoble, setListaDoble] = useState(null)
    
    useEffect(() => {
        const listaPaginas = new DoublyLinkedList();
        historial.forEach((pagina) => {listaPaginas.append(pagina)})

        setListaDoble(listaPaginas)
        setPage(listaPaginas.getCurrent())
    }, []);

    const nextPage = () => {
        listaDoble.goNext()
        setPage(listaDoble.getCurrent())
    }

    const prevPage = () => {
        listaDoble.goPrev();
        setPage(listaDoble.getCurrent());
    }


    return (
    <>
        <ul>
            <li>
                <Link to="/" >Ir a los clientes</Link>
            </li>
            <li>
                <Link to="playlist" >Ir a la playlist</Link>
            </li>
        </ul>
        <h1>VISITED PAGES</h1>
        <p>
            Pagina actual: <strong>{page ? page?.page : "No hay página en este índice"}</strong>
        </p>
        <button onClick={prevPage} >Pagina anterior</button>
        <button onClick={nextPage} >Siguiente pagina</button>
    </>
    )
}
