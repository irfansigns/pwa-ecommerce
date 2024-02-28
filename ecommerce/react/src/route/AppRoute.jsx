import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from '../pages/ContactPage';
import HomePage1 from '../pages/HomePage1';
import Navbar from "../components/Navbar";
import CartPage from '../pages/CartPage';
import ProductDetails from '../pages/ProductDetails';
import Footer from '../components/Footer';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile'
import Shop from '../pages/Shop'
import { ToastContainer, toast } from 'react-toastify';



function AppRoute() {
    return (
      <>
      <Navbar />
        <Routes>
        
          <Route path="/" element={<HomePage1 />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/shop/:code?" element={<Shop />} />
          <Route path="/details/:code" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        
        </Routes>
        <Footer />
      </>
    );
  }

export default AppRoute
