import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {apiKeys} from './api_store.js';

//components
import HeroImage from './HeroImage/HeroImage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='navigation' />
    <HeroImage />
    <main className='main'>
    </main>
  </React.StrictMode>
);
