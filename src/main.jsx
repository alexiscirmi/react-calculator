import React from 'react'
import ReactDOM from 'react-dom/client'
import { CalcContextComponent } from './components/context/calcContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalcContextComponent>
      <App />
    </CalcContextComponent>
  </React.StrictMode>,
)