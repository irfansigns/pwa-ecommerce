import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import router from './router.jsx';
import { ContextProvider } from './context/ContextProvider.jsx'
import CartContextProvider from './context/cartContext.jsx'
import ProductContextProvider from './context/productContext.jsx'

// Import global stylesheets
import './assets/css/style.css';
import './assets/css/plugins.css';
import './assets/css/responsive.css';
import './assets/css/cascade.css';

// If using Bootstrap, you can import it here
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductContextProvider>
    <ContextProvider>
      <CartContextProvider>
    <RouterProvider router={router}/>
    </CartContextProvider>
    </ContextProvider>
    </ProductContextProvider>
  </React.StrictMode>,
)
