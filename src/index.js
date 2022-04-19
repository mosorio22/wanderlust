import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//import App from './App';
import HeroImage from './HeroImage/HeroImage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeroImage />
  </React.StrictMode>
);
