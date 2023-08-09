import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Authentification from './components/Authentification';
import About from './components/About';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServicesPage from './components/Routes/ServicesPage';


const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/authentification' element={<Authentification />} />
      <Route path='/about' element={<About />}/>
      <Route path='servicespage' element={<ServicesPage />}/>  
    </Routes>
  </BrowserRouter>
);

