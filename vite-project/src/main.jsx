import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes.jsx'
import { Provider } from 'react-redux';
import { store } from "./slices/store.js"
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
        <Provider store={store}>
          <AppRoutes/>
        </Provider>   
    </StrictMode>
  </BrowserRouter>
)