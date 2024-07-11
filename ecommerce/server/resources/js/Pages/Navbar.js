import React,{useState , useRef} from 'react';
import {Inertia} from '@inertiajs/inertia';
import {InertiaLink, usePage} from '@inertiajs/inertia-react';
import route from "ziggy-js"

const Navbar = (props) =>{
  const card = usePage();
  
    return(
        <header className="header bg-white">
          <div className="container px-0 px-lg-3">
            <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0"><a className="navbar-brand" href="index.html"><span className="font-weight-bold text-uppercase text-dark">Replica Lounge</span></a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <InertiaLink className="nav-link active" href={base_url+'/products'}>Home</InertiaLink>
                  </li>
                  <li className="nav-item">
                  <InertiaLink className="nav-link" href={route('testEffect')}>Effect</InertiaLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={base_url+'/shop'}>Shop</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="detail.html">Contact</a>
                  </li>
                  <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="pagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                    <div className="dropdown-menu mt-3" aria-labelledby="pagesDropdown"><InertiaLink className="dropdown-item border-0 transition-link" method="post" href="/logout">Logout</InertiaLink><a className="dropdown-item border-0 transition-link" href="shop.html">Category</a><a className="dropdown-item border-0 transition-link" href="detail.html">Product detail</a><a className="dropdown-item border-0 transition-link" href="cart.html">Shopping cart</a><a className="dropdown-item border-0 transition-link" href="checkout.html">Checkout</a></div>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">               
                 
                  <li className="nav-item"><InertiaLink className="nav-link" href={base_url + '/product/cart'}> <i className="fas fa-dolly-flatbed mr-1 text-gray"></i><small className="text-gray" id="cart"> ({card.props.cart.totalqty?card.props.cart.totalqty:0})</small></InertiaLink></li>

                  {card.props.loginDetail.isLoggedIn ?<li className="nav-item"><InertiaLink className="nav-link" method="post" href=""> <i className="fas fa-user-alt mr-1 text-gray"></i>Logout</InertiaLink></li>:
                  <li className="nav-item"><InertiaLink className="nav-link" method="get" href=""> <i className="fas fa-user-alt mr-1 text-gray"></i>Login</InertiaLink></li>
                  } 

{/* <li className="nav-item"><InertiaLink className="nav-link" method="post" href={route('logout')}> <i className="fas fa-user-alt mr-1 text-gray"></i>Logout</InertiaLink></li> */}

                </ul>
              </div>
            </nav>
          </div>
        </header>
    )
}

export default Navbar;