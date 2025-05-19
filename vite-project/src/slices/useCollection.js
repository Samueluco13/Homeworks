import { db } from "../firebase/config";
import {collection, addDoc, query, where, updateDoc, getDocs, deleteDoc, doc, onSnapshot} from 'firebase/firestore';
import { useState } from 'react';

export const useCollection = (table) => {
    const [results, setResults] = useState([])

    const getAll = (condition) => {
        setResults([]); //Vacía el arreglo en caso de que tenga elementos

        let q = null; //Define e inicializa los documentos resultantes y la query en null

        if (condition && condition.length === 3) {
            //La query es la colección condicionada
            q = query(collection(db, table), where(condition[0], condition[1], condition[2]));
        }else{
            //La query es la colección entera
            q = query(collection(db, table));
        }
        const unsubscribe = onSnapshot(q, (snapshot) => { //snapshot escucha los cambios de la base de datos
            const rtData = snapshot.docs.map(doc => (
                console.log(doc.data()),
                {...doc.data(), id: doc.id}
            )) //Ingresa el arreglo de documentos en una variable
            console.log(rtData)
            setResults(rtData); //Settea el arreglo en el estado de results
            
            console.log(results)
        })
        console.log(results)
        return unsubscribe;
    }
    
    const add = async (doc) => {
        try{
            //Agrega el documento a la tabla especifica y lo devuelve
            let resDoc = await addDoc(collection(db, table), doc);
            console.log("Documento a agregar: ", resDoc);
            return {id: resDoc.id}
        }catch(error){
            console.log(error.message);
            return null;
        }
    }

    const update = async (id, newData) =>{
        try{
            let updatedDoc = await updateDoc(doc(db, table, id), newData);
            console.log("Documento a actualizar: ", updatedDoc)
        }catch(error){
            console.log(error.message);
            return null;
        }
    }

    const dltDoc = async (id) => {
        try{
            let deletedDoc = await deleteDoc(doc(db, table, id));
            console.log("Documento a eliminar: ", deletedDoc);
        }catch (error){
            console.log(error.message);
            return null;
        }
    }

    const pruebaSet = () => {
        setResults([
                {talla: 32, descripcion: 'Jeans azul oscuro corte slim', precio: 89000},
                {descripcion: 'Camiseta básica blanca de algodón', precio: 35000, talla: 'M'}
            ])
        // console.log("---", results)
    }

    return {getAll, add, update, dltDoc, results, pruebaSet}
}
