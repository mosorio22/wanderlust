import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {apiKeys} from './api_store.js';

//components
import HeroImage from './HeroImage/HeroImage'
import PlaceholderImage from './PlaceholderImage/PlaceholderImage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeroImage />
    <main className="main-section">
    	<PlaceholderImage />
    </main>
  </React.StrictMode>
);
