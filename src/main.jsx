import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { firebase, FieldValue } from './lib/firebase.js'
import FirebaseContext from './context/firebase.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider >
)
