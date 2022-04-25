import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {apiKeys} from './api_store.js';

//components
import HeroImage from './HeroImage/HeroImage'
import PlaceholderImage from './PlaceholderImage/PlaceholderImage'
import InputForm from './InputForm/InputForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  	<header className="header">
  		<HeroImage />
  	</header>
    <main>
      <div className='input'>
        <InputForm />
      </div>
    	<div>
        <PlaceholderImage />
      </div>
    </main>
  </React.StrictMode>
);
