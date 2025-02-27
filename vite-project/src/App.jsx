import { useState } from 'react'
import './App.css'




function App({defindo}) {
  const [contador, setContador] = useState(0)

  //FUNCIONES DE LOS BOTONES
  const handleAdd = () => {
    setContador(contador + 1)
  }

const handleSubstract = () => {
    setContador(contador - 1)
  }

const handleReset = () => {
    setContador(defindo)
  }

  return (
    <>
      <h1>CONTADOR</h1>
      <div>
        <button onClick={handleAdd}>Sumar</button>
        <button onClick={handleSubstract}>Restar</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <span>{contador}</span>
    </>
  )
}

export default App
