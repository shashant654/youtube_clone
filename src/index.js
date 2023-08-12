import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
npx create-react-app youtube_clone

 step-1 : npm i tailwindcss
 step-2 : npx tailwindcss init for => created tailwind.confing.js
 step-3 : npm i @reduxjs/toolkit
 step-4 : npm i react-redux
 step-5 : npm i react-router-dom
 */