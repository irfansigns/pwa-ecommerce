import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import 'react-toastify/dist/ReactToastify.css'; // Import the styles
import AppRoute from "./route/AppRoute";
import ProductContextProvider from "./global/productContext";
import CartContextProvider from "./global/cartContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
    <AppRoute />
    </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;