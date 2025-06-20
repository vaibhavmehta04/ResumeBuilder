import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import TemplateSelector from './components/TemplateSelector';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemplateSelector />} />
        <Route path="/builder/:template" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
