import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Fixed casing
import './index.css';
import App from './App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="Webcare Infoway" />
  </React.StrictMode>
);
