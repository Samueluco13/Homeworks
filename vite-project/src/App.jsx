import './App.scss'
import { Login } from './Pages/Login.jsx'
import { UserProvider } from './Context/UserContext.jsx'
import { Profile } from './Pages/Profile.jsx'
import {Route, Routes} from 'react-router-dom'
import {PrivateRoutes} from './Routes/PrivateRoutes.jsx'
import Principal from './Pages/Principal.jsx'
import { Header } from './Components/Header.jsx'


function App() {

  return (
    <UserProvider>
      <Header/>
        <Routes>
          <Route path="/" element={<Principal/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={
            <PrivateRoutes>
              <Profile/>
            </PrivateRoutes>
          }/>
        </Routes>
    </UserProvider>
  )
}

export default App
