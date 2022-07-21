import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CandidatContextProvider from './store/CandidatContext';
import LoginContextProvider from './store/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div className='container'>

    <BrowserRouter>

      <CandidatContextProvider>
        <LoginContextProvider>
          <App />
        </LoginContextProvider>
      </CandidatContextProvider>

    </BrowserRouter>

  </div >


);

