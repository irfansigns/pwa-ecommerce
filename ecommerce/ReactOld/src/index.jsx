import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';

// import './assets/css/plugins.css'; 
// import './assets/css/style.css';
// import './assets/css/responsive.css'; 

// import './assets/js/main'; 
// import './assets/js/plugins.js'; 






ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <App />
   </BrowserRouter>,
)



