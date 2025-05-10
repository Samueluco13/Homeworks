import './App.css'
import { Home } from './pages/Home'
import { PrevTree } from './pages/PrevTree'
import { NewTree } from './pages/NewTree'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div>
      <h1>ARBOLES</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path='/prev-tree' element={<PrevTree/>}/>
      </Routes>
      <Routes>
        <Route path='/new-tree' element={<NewTree/>}/>
      </Routes>
    </div>
  )
}

export default App
