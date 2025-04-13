import React, {useState, useEffect} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useCollection } from "../Slices/useCollection"


export const Edit = () => {

    const {name, id} = useParams()
    const {update} = useCollection("users");
    
    const navigate = useNavigate();
    const [user, setUser] = useState({name: ""});

    useEffect(() => {setUser({name})}, [name]); //Settea el nombre desde la URL

    const handleSetUser = (e) => {
        setUser({name: e.target.value})
    }

    const hanldeEdit = async () => {
        await update(id, user);
        // Actualiza la URL y navega hacia ella para que coincida con el nuevo nombre
        navigate(`/edit/${user.name}/${id}`);
    }

    return (
    <>
        <Link to={"/crud"} >Volver a la lista de usuarios</Link>
        <h1>Editar a {name}</h1>
        <input
        type="text"
        onChange={handleSetUser} 
        value={user.name || ""}
        placeholder='Nuevo name' />
        <button onClick={hanldeEdit} type='button'>Guardar</button>
    </>
    )
}
