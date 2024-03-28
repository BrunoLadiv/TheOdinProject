import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { postsSlice } from './features/api/postsSlice.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={postsSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>
)
