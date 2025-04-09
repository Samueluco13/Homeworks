import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FirsApp from './FirstApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirsApp/>
  </StrictMode>,
)
