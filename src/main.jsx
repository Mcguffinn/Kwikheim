import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import logo from './assets/kwiklab_logo.png'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header className='relative h-16 w-64'>
      <div className='absolute inset-x-0 top-0 h-16'>
        <img src={logo} alt='kwiklab logo'/>
      </div>
    </header>
    <App />
  </React.StrictMode>,
)
