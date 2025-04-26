import './App.css'
import { BinaryTree } from './BinaryTree.jsx'
import { arbol } from './data.js'

function App() {

  return (
    <div>
      <h1>Arbol binario</h1>
      <BinaryTree initialRoot={arbol} />
    </div>
  )
}

export default App
