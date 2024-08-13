import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Activityprovaider } from './context/Activitycontext.tsx'
//se importar Activityprovaider para que el context funcione 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Activityprovaider>
      <App />
    </Activityprovaider>
  </React.StrictMode>,
)
