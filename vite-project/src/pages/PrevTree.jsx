import React, {useState} from 'react'
import { BinaryTree } from '../BinaryTree.jsx'
import { arbol } from '../data.js'
import { Link } from 'react-router-dom'
import { ArbolBinario } from '../classes/ArbolBinario.js'
import "../PrevTree.css"

export const PrevTree = () => {
    const [valor, setValor] = useState(0);

    const handleChange = (e) => {
        e.preventDefault();
        setValor(e.target.value);
    };

    const arbolito = new ArbolBinario();

    const ipreOrder = () => {
        console.log("In-Order: \n");
        arbolito.inOrder(arbol);
    }
    const preOrder = () => {
        console.log("Pre-Order: \n");
        arbolito.preOrder(arbol);
    }
    const postOrder = () => {
        console.log("Post-Order: \n");
        arbolito.postOrder(arbol);
    }

    const searchValue = () => {
        const num = parseInt(valor, 10); // Convierte el valor a número
        if (!isNaN(num)) { //Si realmente es un numero
            console.log(arbolito.preorderSearch(arbol, num)); //Aplica la busqueda
        } else {
            console.log("Por favor ingresa un número válido."); //Solicita un numero valido
        }
    };
    
    
    return (
        <div className='prev-tree' >
            <div className="console">
                <p>Abre la consola</p>
                <button onClick={() => ipreOrder()}>Imprimir con In-Order</button>
                <button onClick={() => preOrder()}>Imprimir con Pre-Order</button>
                <button onClick={() => postOrder()}>Imprimir con Post-Order</button>
                <input type="text" placeholder='¿Que numero quieres buscar?' value={valor} onChange={handleChange}/>
                <button onClick={searchValue}>Buscar valor</button>
            </div>
            <ul>
                <ol>
                    <Link to={"/new-tree"} >Ir al arbol nuevo</Link>
                </ol>
                <ol>
                    <Link to={"/"} >Ir al home</Link>
                </ol>
            </ul>
            <hr />
            <h2>Arbol sin la libreria</h2>
            <hr />
            <BinaryTree initialRoot={arbol} />
        </div>
    )
}
