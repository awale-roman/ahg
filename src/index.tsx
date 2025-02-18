import './index.scss';

import { BrowserRouter, Route, Routes } from 'react-router';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AboutUs from './pages/AboutUs';
import DetailPage from './pages/DetailPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
        <Route path='/detailpage/:productId' element={<DetailPage />} />
      <Route path='/aboutus' element={<AboutUs />} />
        
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
