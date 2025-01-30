import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import base styles and Tailwind
import './index.css'

// Import fonts
import '@fontsource/inter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)