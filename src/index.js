import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//components
import HeroImage from './HeroImage/HeroImage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <nav className='navigation'>
    </nav>
    <main className='main'>
        <HeroImage />
    </main>
  </React.StrictMode>
);
