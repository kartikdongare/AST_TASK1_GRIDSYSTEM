import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GridContextProvider } from './ContextProvider/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GridContextProvider>
    <App />
    </GridContextProvider>
  </React.StrictMode>,
)
