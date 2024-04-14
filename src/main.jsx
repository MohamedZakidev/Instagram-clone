import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { db } from './lib/firebase.js'
import FirebaseContext from './context/firebase.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FirebaseContext.Provider value={{ db }}>
    <App />
  </FirebaseContext.Provider >
)
