import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {CarritoApp} from './CarritoApp.jsx'
import './styles/index.css'
import './styles/card.css'
import './styles/lista.css'
ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <React.StrictMode>
    <CarritoApp />
  </React.StrictMode>,
</BrowserRouter>,
)
