import React, {createContext , useReducer} from 'react';
import ProductForm from './ProductForm';

const Product = (props) =>{
  return(
  
    <div className="page-holder"> 
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
    
    </div> 
      
  )
}

export default Product;