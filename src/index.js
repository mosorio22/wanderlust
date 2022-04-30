import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
