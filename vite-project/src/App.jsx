import './App.css'
import { Route, Routes } from "react-router-dom";
import { cosasMenu } from './data.js'
import { MenuItem } from './MenuItem.jsx'
import {AdPrivacy} from "./pages/AdPrivacy.jsx"
import { Home } from './pages/Home.jsx'
import {Messages} from "./pages/Messages.jsx"
import {EditProfile} from "./pages/EditProfile.jsx"
import {Security} from "./pages/Security.jsx"
import {Theme} from "./pages/Theme.jsx"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ad-privacy' element={<AdPrivacy/>} />
        <Route path='/security' element={<Security/>} />
        <Route path='/theme' element={<Theme/>} />
        <Route path='/edit-profile' element={<EditProfile/>} />
        <Route path='/messages' element={<Messages/>} />
      </Routes>
      <div className="menu-container" >
        <MenuItem arbol={cosasMenu}/>
      </div>
    </>
    
  )
}

export default App
