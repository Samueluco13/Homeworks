import {db} from '../firebase/config';
import {collection, addDoc, query, where, getDocs, updateDoc, deleteDoc, doc} from 'firebase/firestore';
import { useState } from 'react';

export const useCollection = (table) => {
    const [results,setResults] = useState([]);
    const [error,setError] = useState(null);
    const [isPending, setIsPending] = useState(false);


    const getAll = async (condition) => {
        setResults([]);

        let resDoc = null, q = null;

        if (condition && condition.length === 3) {
            //La query es la colección condicionada
            q = query(collection(db, table), where(condition[0], condition[1], condition[2]));
        }else{
            //La query es la colección entera
            q = query(collection(db, table));
        }
        resDoc = await getDocs(q); //Toma los documentos de la colección

        resDoc.forEach(doc => {
            setResults(prev => [...prev, {...doc.data(), id: doc.id}])
        });
    }


    const add = async (doc) => {
        setError(null);
        setIsPending(true);

        try{
            //Agrega el documento a la tabla especifica y lo devuelve
            let resDoc = await addDoc(collection(db, table), doc);
            console.log("Document Id: ", resDoc.id);
            setIsPending(false);
        }catch(err){
            console.log(err.message);
            setError("Could not send the message");
            return null;
        }
    }

    const update = async (id, newData) =>{
        setError(null);
        setIsPending(true);
        try{
            let updatedDoc = await updateDoc(doc(db, table, id), newData);
            console.log(updatedDoc)
            setIsPending(false);
        }catch(err){
            console.log(err.message);
            setError("Could not update user");
            return null;
        }
    }


    const deleteUser = async (id) => {
        setError(null);
        setIsPending(true);
        try{
            await deleteDoc(doc(db, table, id));
            setIsPending(false);
        }catch(err){
            console.log(err.message);
            setError("Could not delete user");
            return null;
        }
    }


    return {error, isPending, results, add, getAll, update, deleteUser}
}