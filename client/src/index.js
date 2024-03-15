import React from 'react';
import ReactDOM from 'react-dom/client';
import {theme} from "./theme"
import App from './App';
import { ThemeProvider } from '@mui/material';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <App />
  </React.StrictMode>
);


