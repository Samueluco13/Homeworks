import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { useCollection } from '../slices/useCollection.js'



export const Dashboard = () => {
    const [prendas, setPrendas] = useState([])

    const {getAll, results, pruebaSet} = useCollection("prendas")

    useEffect(() => {
        // pruebaSet()
        setPrendas(results);
        console.log(prendas)
        // console.log("funcion prueba: ", results)
    }, [results])

    useEffect(() => {
        const getAllProducts = async () => {
            const unsubscribe = getAll([]);
            // console.log(documentos)
            // setPrendas(documentos);
            return () => unsubscribe();
        }
        getAllProducts()
    }, [])


    return (
        <div className='dashboard' >
            <div className='prendas' >
                {prendas.map(prenda => (
                    <ProductCard prenda={prenda} key={prenda.id} />
                ))}
            </div>
        </div>
    )
}
