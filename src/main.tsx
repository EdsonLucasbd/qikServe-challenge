import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ReactQueryProviders } from './providers/ReactQueryProvider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQueryProviders>
      <App />
    </ReactQueryProviders>
  </React.StrictMode>,
)
