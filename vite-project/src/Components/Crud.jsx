import React, {useState, useEffect} from 'react'
import { useCollection } from "../Slices/useCollection"
import {Link} from "react-router-dom"

export const Crud = () => {
    const [user, setUser] = useState({name: ""})
    const {add, getAll, isPending, results, deleteUser} = useCollection("users");

    const getAllDocs = async() => {
        await getAll([]);
    }

    const save = async() => {
        await add(user);
        await getAllDocs();
    }

    const handleSetUser = (e) => {
        setUser({name: e.target.value})
    }

    const handleDelete = async (id) => {
        await deleteUser(id);
        await getAllDocs();
    }

    useEffect(() => {
        getAllDocs()
    }, [])

    return (
    <>
        <h3>    
            <Link to={"/"} >Volver al Home</Link>
        </h3>
        <input type="text" onChange={handleSetUser} value={user.name} placeholder='Ingrese el nuevo usuario'/>
        <button type='button' onClick={save} >Guardar</button>
        {
            isPending && <span>Saving...</span>
        }
        <ul>
            {
                results.map((doc) => {
                    return <li key={doc.id}>
                        <Link to={`/edit/${doc.name}/${doc.id}`} >
                            {doc.name}
                        </Link>
                        <button type='button' onClick={() => handleDelete(doc.id)}>Eliminar</button>
                    </li>
                })
            }
        </ul>
    </>
    )
}
