import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css';
import MainProvider from "./contexts/MainProvider";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </StrictMode>,
)
