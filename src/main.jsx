import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import logo from './assets/kwiklab_logo.png'
import { Canvas } from '@react-three/fiber'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <Canvas shadows>
      <App />
    </Canvas>
  </React.StrictMode>,
)
