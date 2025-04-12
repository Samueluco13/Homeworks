import { useState, useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incrementbyValue, decrementByValue } from './Store/Slices/Slices'
import {Results} from "./Classes/Results"


export const App = () => {

    const [incValue, setIncValue] = useState(0)
    const [decValue, setDecValue] = useState(0)
    const [resultados, setResultados] = useState(new Results())
    const [lastCount, setLastCount] = useState(0)
    const [agregarResultado, setAgregarResultado] = useState(false) //Bandera para

    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.counter);
  

    useEffect(() => {
      setLastCount(count); //Se renderiza el estado cada vez que count cambia

      if (agregarResultado) {
        resultados.push(count)
        setResultados(resultados) //Se actualiza el estado de resultados con el nuevo valor
        setAgregarResultado(false)
      }
      
    }, [count]);


    const handleAddByValue = () => {
      dispatch(incrementbyValue(Number(incValue))) //Se debe parserar porque se toma como string
      setAgregarResultado(true)
    }
  
    const handleDecrementByValue = () => {
      dispatch(decrementByValue(Number(decValue)))
      setAgregarResultado(true)
    }


return (
    <>
        <p>Counter is {lastCount}</p>


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