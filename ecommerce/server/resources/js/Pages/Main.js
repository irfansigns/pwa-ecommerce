import React, {createContext , useReducer} from 'react';
import {Inertia , InertiaLink, usePage} from '@inertiajs/inertia-react';
import {ProductReducer} from './productReducer';
import Footer from './Footer';
import Category from './Category';
import Services from './Services';
import axios from 'axios';
import route from "ziggy-js";

const Main = (props) =>{
  const {items} = props;
  const { flash } = usePage().props;
  
  const addToCart = (id)=>{
    axios.get(route('product.addCart',{id:id})).then(respond=>{
      // alert(respond.data)
      document.getElementById('cart').innerHTML = '(' + respond.data + ')';
    })
  }

  return(
  <>
        
        <div className="container">
        {flash.message && (
          <div className="alert">{flash.message}</div>
        )}
        <Category />
          <section className="py-5">
            <header>
              <p className="small text-muted small text-uppercase mb-1">Made the hard way</p>
              <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
            </header>
            <div className="row">

            {
              items.map(product=>{
                return(
                  <div className="col-xl-3 col-lg-4 col-sm-6" key={product.id}>
                    <div className="product text-center">
                      <div className="position-relative mb-3">
                        <div className="badge text-white badge-"></div><InertiaLink className="d-block" href={product.detail_url}><img className="img-fluid w-100" src={base_url +'/img/' +product.ipath} alt="..." /></InertiaLink>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            {/* <li className="list-inline-item m-0 p-0"><InertiaLink className="btn btn-sm btn-outline-dark" href={product.detail_url}><i className="far fa-heart"></i></InertiaLink></li> */}
                            {/* <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">{product.quantity}</a></li> */}
                            <li className="list-inline-item mr-0"><button className="btn btn-sm btn-outline-dark" onClick={()=>{const id = product.id; addToCart(id);}}  ><i className="fas fa-shopping-cart"><span className="ml-1">Add to Cart</span></i></button></li>
                          </ul>
                        </div>
                      </div>
                      <h6> <a className="reset-anchor" href="detail.html">{product.name}</a></h6>
                      <p className="small text-muted">${product.price}</p>
                      {/* <button className="btn btn-small"><a href={product.edit_url}>Edit</a></button> */}
                    </div>
                  </div>
                )
            })
          }




          </div>
          </section>
         
          <Services />
          </div>
          <Footer />
        
        </>
  )
}

export default Main;