import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector } from "react-redux"
import { fetchFirebaseData, addDataToFirebase } from '../Slices/Thunks/firebaseThunks'
import { Link } from 'react-router-dom'
import "../DataComponent.css"

export const DataComponent = () => {
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();
    const {data, loading} = useSelector((state) => state.firebase)

    useEffect(() => {
        dispatch(fetchFirebaseData())
    }, [dispatch]);

    const handleAddData = () => {
        if (message.trim() === "") return alert("El mensaje debe tener contenido");

        const newData = {value: message.trim()};
        dispatch(addDataToFirebase(newData));
        setMessage("");
    }
    
    return (
    <div className='chat-container'>
        <p><Link to={"/"} >Volver al home</Link></p>
        <h1 className='chat-title'>Datos en Firebase</h1>
        <input
        className='input-chat'
        type="text"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ingrese un mensjae"
        />
        <button className='btn-chat' onClick={handleAddData} >Agregar mensjae</button>
        <div className='chat-box'>
            {
                loading ? (<p className='chat-text'>Crgando...</p>) : (
                    data.map((item, index) => (
                        <p key={index} className='chat-text'>
                            Mensaje #{index + 1}: {item.value}
                        </p>
                    ))
                )
            }
        </div>
    </div>
    )
}
