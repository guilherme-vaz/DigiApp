import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './reset.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { DigimonProvider } from './context/digimon';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <DigimonProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DigimonProvider>
    </Provider>
  </React.StrictMode>,
)
