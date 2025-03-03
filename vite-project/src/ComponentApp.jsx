import { useState } from 'react'


//Importa el arreglo para mapearlo y la función que agrega las categorias al arreglo, desde el padre
export const ComponentApp = ({categories, funcionPadre}) => {
const [category, setCategory] = useState()


const addCategory = () => {
    funcionPadre(category)
    setCategory("")
}


return (
    <>
    <h1>Git Expert</h1>
    <ol>
        {
            categories.map((category, key) => {
                return <li key = {key}> {category} </li>
            })
        }
    </ol>

        <input
        placeholder = 'Ingresa la nueva categoria'
        value = {category} //Toma como valor la categoria que está en el input
        onChange = {(evt) => { setCategory(evt.target.value)} } ></input> {/* Setea la categoria con el valor que hay en el value */}

        <div>
            <button onClick = {() => addCategory()} >Agregar categoria</button>
        </div>
        

    </>
)
}