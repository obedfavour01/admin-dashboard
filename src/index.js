import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';
import { ToggleProvider } from './context/toggleContext';


ReactDOM.render(
  <React.StrictMode>

      <ToggleProvider>
            <DarkModeContextProvider>
                <App />
            </DarkModeContextProvider>
      </ToggleProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

