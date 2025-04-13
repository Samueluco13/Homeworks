import React, {useEffect} from 'react'
import {useDispatch, useSelector } from "react-redux"
import { fetchFirebaseData, addDataToFirebase } from '../Slices/Thunks/firebaseThunks'

export const DataComponent = () => {
    const dispatch = useDispatch();
    const {data, loading} = useSelector((state) => state.firebase)

    useEffect(() => {
        dispatch(fetchFirebaseData())
    }, [dispatch]);

    const handleAddData = () => {
        const newData = {name: "Nuevo Dato", value: Math.random()};
        dispatch(addDataToFirebase(newData));
    }
    
    return (
    <div>
        <h2>Datos en Firebase</h2>
        {
            loading ? (<p>Crgando...</p>) : (
                data.map((item, index) => (
                    <p key={index}>
                        {item.name}: {item.value}
                    </p>
                ))
            )
        }
        <button onClick={handleAddData} >Agregar Dato</button>
    </div>
    )
}
