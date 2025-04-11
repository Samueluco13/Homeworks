import React , {useEffect, useState} from 'react'
import {SimpleLinkedList} from "../Classes/SimpleLinkedList"
import {Link} from 'react-router-dom'


export const Songs = () => {

    const canciones = [ //Canciones simuladas
        { id: 1, title: "Back in Black", artist: "AC/DC" },
        { id: 2, title: "Normal", artist: "Feid" },
        { id: 3, title: "Imaginaste", artist: "JHAYCO" },
        { id: 4, title: "Telepatia", artist: "Kali Uchis" },
        { id: 5, title: "PIENSALO", artist: "Junior H" }
    ];

    const [playList, setPlayList] = useState([])
    const [songIndex, setSongIndex] = useState(0)


    useEffect(() => {
        const listaCanciones = new SimpleLinkedList();
        canciones.forEach((cancion) => listaCanciones.append(cancion)); //Ingresa cada cancion simulada a la lista
        setPlayList(listaCanciones.getAll());
        //console.log(listaCanciones.print()) //Muestra la lista de canciones en consola
    }, []);


    const nextSong =() => { //Funcion para avanzar a la siguiente cancion
        setSongIndex(songIndex + 1)
    }

    const prevSong =() => { //Funcion para regresar a la cancion anterior
        setSongIndex(songIndex - 1)
    }

    return (
    <>
        <ul>
            <li>
                <Link to="/" >Ir a los clientes</Link>
            </li>
            <li>
                <Link to="/historial" >Ir al historial</Link>
            </li>
        </ul>
        <h1>Your PlayList</h1>
        <p>
            Sonando: <strong>{(!playList[songIndex]) ? "No hay canción en este índice"
            : playList[songIndex]?.title} - {playList[songIndex]?.artist}</strong>
        </p>

        <button onClick={prevSong} >Anterior</button>
        <button onClick={nextSong} >Siguiente</button>   
    </>
    )
}
