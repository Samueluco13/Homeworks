import { ComponentApp } from './ComponentApp'
import { useState } from 'react'

export const ComponentDad = () => {

const categories = ['first category', 'second category']

const [categorias, setCategorias] = useState(categories)

const funcionPadre = (nuevaCategoria) => {
    setCategorias([...categorias, nuevaCategoria])
}

return <div>
    <h1>Challenge 04</h1>
    <ComponentApp categories = {categorias} funcionPadre = {funcionPadre} /> {/* Se le pasa al hijo el arreglo "categories" */}
</div>
}