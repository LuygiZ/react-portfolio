import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { LanguageProvider } from './context/LanguageContext'; // Importe o LanguageProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider> {/* Envolver o App com LanguageProvider */}
      <App />
    </LanguageProvider>
  </StrictMode>,
);
