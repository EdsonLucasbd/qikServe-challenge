import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ReactQueryProviders } from './providers/ReactQueryProvider.tsx'
import { Provider } from 'react-redux'
import store from './app/store.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQueryProviders>
      <Provider store={store}>
        <App />
      </Provider>
    </ReactQueryProviders>
  </React.StrictMode>,
)
