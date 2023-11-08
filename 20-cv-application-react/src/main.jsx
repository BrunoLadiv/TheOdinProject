import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './components/styled/Global.style.js'
import { ResumeContextProvider } from './components/context/ResumeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <ResumeContextProvider>
        <App />
      </ResumeContextProvider>
    </>
  </React.StrictMode>
)
