import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incrementbyValue, decrementByValue } from './Store/Slices/Slices'
import {Results} from "./Classes/Results"


export const App = () => {

    const [incValue, setIncValue] = useState(0)
    const [decValue, setDecValue] = useState(0)
    const [resultados, setResultados] = useState(new Results())

    const dispatch = useDispatch();

    const {count} = useSelector((state) => state.counter);


    const handleAddByValue = () => {
        resultados.push(count)
        
        dispatch(incrementbyValue(Number(incValue))) //Se debe parsear porque lo toma como string
        console.log(resultados)
    }

    const handleDecrementByValue = () => {
        resultados.push(count)
        dispatch(decrementByValue(decValue))
        console.log(resultados)
    }








return (
    <>
        <p>Counter is {count}</p>


        <label>Value to incremnet</label>
        <input
        type="number"
        value={incValue}
        onChange={(e) => {setIncValue(e.target.value)}} />
        <button onClick = {handleAddByValue}>Increment</button>

        <label>Value to decrement</label>
        <input
        type="number"
        value={decValue}
        onChange={(e) => {setDecValue(e.target.value)}} />
        <button onClick = {handleDecrementByValue}>Decrement</button>

    <div>
        <ul>
            <h2>RESULTADOS</h2>
            {
                resultados.size() ?
                (resultados.results.slice().reverse().map((result, index) => <li key={index}>{result}</li> )):("No hay resultados todavia")
            }
        </ul>
    </div>

    </>
    )
}