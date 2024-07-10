import React, {createContext , useReducer} from 'react';
import {Inertia , InertiaLink} from '@inertiajs/inertia-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ProductForm from './ProductForm';

const Product = (props) =>{
  return(
  
    <div className="page-holder"> 
    <Navbar />
    <div className="container">
        <section className="py-5">
        <header>
            <div className="row justify-content-center">
            <p className="small text-muted small text-uppercase mb-1">Made the hard way</p>
            <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
            </div>
        </header>
        <div className="row justify-content-center">

        <ProductForm
          description={props.description}
          categories={props.category}
          submitUrl={props.submitUrl}
          product={props.product}
          // method={props.method}
        />

        </div>
        </section>
        
        
    </div>
    <Footer />
    </div> 
      
  )
}

export default Product;