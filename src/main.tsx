import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App/App';

import './styles/index.scss';
import { UserContextProvider } from './components/App/ContextProvider';
import Basket from './components/App/Basket';
import Beauty from './components/App/Beauty';
import Bill from './components/App/Bill';
import Signin from './components/App/Signin';
import Profile from './components/App/Profile';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>  
    <BrowserRouter>
    <UserContextProvider> 
    <Routes>
    
    <Route path="/" element={  <App />} />

    <Route path="/basket" element={  <Basket />} />

    <Route path="/main" element={  <Beauty />} />

    <Route path="/bill" element={  <Bill />} />

    <Route path="/signin" element={  <Signin />} />

    <Route path="/profil" element={  <Profile />} />


        </Routes>
        </UserContextProvider>
        </BrowserRouter>
  </React.StrictMode>
);
