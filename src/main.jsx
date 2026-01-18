import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext'
import './i18n'; // Import i18n configuration
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import the i18n instance

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>,
)
