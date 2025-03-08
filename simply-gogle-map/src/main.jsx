import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { APIProvider } from '@vis.gl/react-google-maps'
import { providerKey } from './api-provider-key.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <APIProvider apiKey={providerKey}>
      <App />
    </APIProvider>
  </StrictMode>,
)
