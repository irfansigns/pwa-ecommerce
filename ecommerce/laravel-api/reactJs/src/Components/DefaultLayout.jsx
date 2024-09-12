import React, {useContext , useState } from 'react'
import {Link, useNavigate , Outlet} from "react-router-dom";
import { productContext } from "../context/productContext"
import { cartContext } from "../context/cartContext";
import axiosClient from '../axiosClient';

const DefaultLayout =()=>{

  const {dispatch,shoppingCart,qty,user} = useContext(cartContext);
  const [logout,setLogout] = useState(false);
  const {products} = useContext(productContext);
  const {categories} = useContext(productContext);
  const logoutHandler = () => {
    setLogout(true);
  }

  if(logout){
    let navigate = useNavigate();
  
  // To redirect, use:
  navigate('/');
  }

  console.log(shoppingCart);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    // Define a function to handle the click event
    const handleMobileNavToggle = () => {
        // Toggle the mobile nav state
        setIsMobileNavOpen(!isMobileNavOpen);
        
        // You can also add additional logic here if needed
        
        // For example, if you want to toggle a className on the body element
        const bodyElement = document.querySelector('body');
        bodyElement.classList.toggle('menuOn');
        const wrapperElement = document.querySelector('.mobile-nav-wrapper');
        wrapperElement.classList.toggle('active');
        const mnavElement = document.querySelector('.js-mobile-nav-toggle');
        mnavElement.classList.toggle('mobile-nav--open mobile-nav--close');
    };

    // Define a function to handle closing the mobile menu
    const handleCloseMobileMenu = () => {
        // Close the mobile menu
        setIsMobileNavOpen(!isMobileNavOpen);

        const bodyElement = document.querySelector('body');
        bodyElement.classList.toggle('menuOn');
        const wrapperElement = document.querySelector('.mobile-nav-wrapper');
        wrapperElement.classList.toggle('active');
        const mnavElement = document.querySelector('.js-mobile-nav-toggle');
        mnavElement.classList.toggle('mobile-nav--open mobile-nav--close');
    };

//   Categories 

if(!categories){
    return(
      <>
      <li className="lvl1 more-item">Loading Categories</li>
      </>
    )
  }else{
    const brands = categories.map((cats,key)=>{
      if(cats.dept=='2'){
      return (
        <li className="lvl-2"><Link to={'/shop/'+ cats.id } className="site-nav lvl-2">{cats.cname}</Link></li>
        // <li className="lvl1 more-item"><Link to={'/shop/'+ cats.id } className="site-nav">{cats.cname} <span className="count">(14)</span></Link></li>
      )}
    });

    const names = categories.map((ecat,key)=>{
      if(ecat.dept=='1'){
      return (
        <li className="lvl-2"><Link to={'/shop/'+ ecat.id } className="site-nav lvl-2">{ecat.cname}</Link></li>
        // <li className="lvl1 more-item"><Link to={`/shop/${ ecat.id }`} className="site-nav">{ecat.cname} <span className="count">(14)</span></Link></li>
      )}
    });

    const arts = categories
    .filter(mcat => mcat.dept == '3') // Filter categories where dept is '3'
    .slice(0, 12) // Take only the first 10 items
    .map((mcat, key) => { // Map over these 10 items
        return (
        <li className="lvl-2">
            <Link to={'/shop/' + mcat.id} className="site-nav lvl-2">{mcat.cname}</Link>
        </li>
        );
    });


    return(
    <>
       {/* Top Header */}
       <div className="top-header bg-white text-uppercase">
      <div className="container container-1330">
        <div className="row align-items-center">
          <div className="col-2 col-sm-2 col-md-1 col-lg-4 text-left">
            <div className="links-dropdown position-relative">
              <span className="user-menu d-block d-lg-none">
                <i className="icon anm anm-user-al"></i>
              </span>
              <ul className="user-links list-inline d-lg-inline-flex align-items-center left-brd">
                <li className="list-inline-item">
                  <a href="checkout-style2.html">Checkout</a>
                </li>
                <li className="list-inline-item">
                  <a href="my-account.html">My Account</a>
                </li>
                <li className="list-inline-item">
                  <a href="register.html">Register</a> <span>/</span>{" "}
                  <a href="login.html">Sign in</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 text-center d-none d-md-block">
            <div className="promo-items promo-slider-1items">
              <div className="item">Free shipping on order above $99</div>
             
            </div>
          </div>
          <div className="col-10 col-sm-10 col-md-7 col-lg-4 text-right d-flex align-items-center justify-content-end">
            <a href="tel:401234567890" className="phone d-flex-center float-start text-nowrap">
              <i className="icon anm anm-phone-l me-2"></i>
              <span className="phone-text d-none d-sm-inline">(+40) 123 456 7890</span>
            </a>
            <div className="select-wrap language-picker float-start">
              <ul className="default-option">
                <li>
                  <div className="option english">
                    <div className="icon">
                      <img src={axiosClient.Images+'/flag/english.png'} alt="english" width="24" height="24" />
                 
                    </div>
                    <span>English</span>
                  </div>
                </li>
              </ul>
              <ul className="select-ul">
                <li>
                  <div className="option english">
                    <div className="icon">
                      <img src={axiosClient.Images+'/flag/usd.png'} alt="english" width="24" height="24" />
                    </div>
                    <span>English</span>
                  </div>
                </li>
                <li>
                  <div className="option arabic">
                    <div className="icon">
                      <img src={axiosClient.Images+'/flag/arabic.png'} alt="arabic" width="24" height="24" />
                    </div>
                    <span>Arabic</span>
                  </div>
                </li>
                <li>
                  <div className="option english">
                    <div className="icon">
                      <img src="assets/images/flag/french.png" alt="french" width="24" height="24" />
                    </div>
                    <span>French</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="select-wrap currency-picker float-start">
              <ul className="default-option">
                <li>
                  <div className="option USD">
                    <div className="icon">
                      <img src={axiosClient.Images+'/flag/usd.png'} alt="usd" width="24" height="24" />
                    </div>
                    <span>USD</span>
                  </div>
                </li>
              </ul>
              <ul className="select-ul">
                <li>
                  <div className="option USD">
                    <div className="icon">
                      <img src="assets/images/flag/usd.png" alt="usd" width="24" height="24" />
                    </div>
                    <span>USD</span>
                  </div>
                </li>
                <li>
                  <div className="option EUR">
                    <div className="icon">
                      <img src="assets/images/flag/eur.png" alt="eur" width="24" height="24" />
                    </div>
                    <span>EUR</span>
                  </div>
                </li>
                <li>
                  <div className="option GBP">
                    <div className="icon">
                      <img src="assets/images/flag/gbp.png" alt="gbp" width="24" height="24" />
                    </div>
                    <span>GBP</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
       {/* End Top Header */}


       {/* Header */}
       <header className="header header-6 mb-lg-4">
       {/* Header inner */}
       <div className="header-main d-flex align-items-center">
        <div className="container container-1330">
          <div className="row">
            {/* Logo */}
            <div className="logo col-4 col-sm-4 col-md-4 col-lg-3 col-xxl-3 align-self-center">
              
              <Link className="logoImg" to="/">
              <img src={axiosClient.Images+'/logo/logo.png'} alt="Hema Multipurpose Html Template" title="Hema Multipurpose Html Template" width="149" height="39" />
              </Link> 
            </div>
            {/* End Logo */}
            {/* Search Inline */}
            <div className="col-1 col-sm-1 col-md-1 col-lg-6 col-xxl-6 align-self-center d-none d-lg-block">
              <div className="minisearch-inline px-xl-5">
                <form className="form minisearch" id="header-search0" action="#" method="get">
                  <label className="label d-none">
                    <span>Search</span>
                  </label>
                  {/* Search Field */}
                  <div className="d-flex searchField">
                    <div className="search-category">
                      <select className="rgsearch-category rounded-end-0">
                        <option value="0">All Categories</option>
                        <option value="1">- All</option>
                        <option value="2">- Fashion</option>
                        <option value="3">- Shoes</option>
                        <option value="4">- Electronic</option>
                        <option value="5">- Jewelry</option>
                        <option value="6">- Vegetables</option>
                        <option value="7">- Furniture</option>
                        <option value="8">- Accessories</option>
                      </select>
                    </div>
                    <div className="input-box d-flex fl-1 position-relative">
                      <input type="text" className="input-group-field input-text rounded-start-0 border-start-0" placeholder="Search for products, brands..." value="" />
                      <button type="submit" className="input-group-btn action search d-flex-justify-center text-link">
                        <i className="hdr-icon icon anm anm-search-l"></i>
                      </button>
                    </div>
                  </div>
                  {/* End Search Field */}
                </form>
              </div>
            </div>
            {/* End Search Inline */}
            {/* Right Icon */}
            <div className="col-8 col-sm-8 col-md-8 col-lg-3 col-xxl-3 align-self-center icons-col text-right">
              {/* Search */}
              <div className="search-parent iconset d-lg-none">
                <div className="site-search">
                  <a href="#;" className="search-icon icon-link d-flex flex-column" data-bs-toggle="offcanvas" data-bs-target="#search-drawer">
                    <span className="iconCot">
                      <i className="hdr-icon icon anm anm-search-l"></i>
                    </span>
                    <span className="text">Search</span>
                  </a>
                </div>
                <div className="search-drawer offcanvas offcanvas-top" tabIndex="-1" id="search-drawer">
                  <div className="container">
                    <div className="search-header d-flex-center justify-content-between mb-3">
                      <h3 className="title m-0">What are you looking for?</h3>
                      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="search-body">
                      <form className="form minisearch" id="header-search" action="#" method="get">
                        {/* Search Field */}
                        <div className="d-flex searchField">
                          <div className="search-category">
                            <select className="rgsearch-category rounded-end-0">
                              <option value="0">All Categories</option>
                              <option value="1">- All</option>
                              <option value="2">- Fashion</option>
                              <option value="3">- Shoes</option>
                              <option value="4">- Electronic</option>
                              <option value="5">- Jewelry</option>
                              <option value="6">- Vegetables</option>
                              <option value="7">- Furniture</option>
                              <option value="8">- Accessories</option>
                            </select>
                          </div>
                          <div className="input-box d-flex fl-1">
                            <input type="text" className="input-text rounded-0 border-start-0 border-end-0" placeholder="Search for products..." value="" />
                            <button type="submit" className="action search d-flex-justify-center btn btn-primary rounded-start-0">
                              <i className="icon anm anm-search-l"></i>
                            </button>
                          </div>
                        </div>
                        {/* End Search Field */}
                        {/* Search popular */}
                        <div className="popular-searches d-flex-justify-center mt-3">
                          <span className="title fw-600">Trending Now:</span>
                          <div className="d-flex-wrap searches-items">
                            <a className="text-link ms-2" href="#">
                              Necklace,
                            </a>
                            <a className="text-link ms-2" href="#">
                              Ring,
                            </a>
                            <a className="text-link ms-2" href="#">
                              Jewelry
                            </a>
                          </div>
                        </div>
                        {/* End Search popular */}
                        {/* Search products */}
                        <div className="search-products">
                          <ul className="items g-2 g-md-3 row row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
                            <li className="item empty w-100 text-center text-muted d-none">You don't have any items in your search.</li>
                            <li className="item">
                              <div className="mini-list-item d-flex align-items-center w-100 clearfix">
                                <div className="mini-image text-center">
                                  <a className="item-link" href="product-layout1.html">
                                    <img className="rounded-5 blur-up lazyload" data-src="assets/images/products/120x170.jpg" src="assets/images/products/120x170.jpg" alt="image" title="product" width="120" height="170" />
                                  </a>
                                </div>
                                <div className="ms-3 details text-left">
                                  <div className="product-name">
                                    <a className="item-title" href="product-layout1.html">Ball Hook Earrings</a>
                                  </div>
                                  <div className="product-price">
                                    <span className="old-price">$114.00</span>
                                    <span className="price">$99.00</span>
                                  </div>
                                  <div className="product-review d-flex align-items-center justify-content-start">
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star-o"></i>
                                    <i className="icon anm anm-star-o"></i>
                                    <span className="caption hidden ms-2">3 reviews</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item">
                              <div className="mini-list-item d-flex align-items-center w-100 clearfix">
                                <div className="mini-image text-center">
                                  <a className="item-link" href="product-layout1.html">
                                    <img className="rounded-5 blur-up lazyload" data-src="assets/images/products/120x170.jpg" src="assets/images/products/120x170.jpg" alt="image" title="product" width="120" height="170" />
                                  </a>
                                </div>
                                <div className="ms-3 details text-left">
                                  <div className="product-name">
                                    <a className="item-title" href="product-layout1.html">Gemstone Necklace</a>
                                  </div>
                                  <div className="product-price">
                                    <span className="price">$128.00</span>
                                  </div>
                                  <div className="product-review d-flex align-items-center justify-content-start">
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star"></i>
                                    <span className="caption hidden ms-2">9 reviews</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="item">
                              <div className="mini-list-item d-flex align-items-center w-100 clearfix">
                                <div className="mini-image text-center">
                                  <a className="item-link" href="product-layout1.html">
                                    <img className="rounded-5 blur-up lazyload" data-src="assets/images/products/120x170.jpg" src="assets/images/products/120x170.jpg" alt="image" title="product" width="120" height="170" />
                                  </a>
                                </div>
                                <div className="ms-3 details text-left">
                                  <div className="product-name">
                                    <a className="item-title" href="product-layout1.html">Freshwater Button Pearl</a>
                                  </div>
                                  <div className="product-price">
                                    <span className="price">$99.00</span>
                                  </div>
                                  <div className="product-review d-flex align-items-center justify-content-start">
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star-o"></i>
                                    <span className="caption hidden ms-2">30 reviews</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* End Search products */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Search */}
              {/* Compare */}
              <div className="compare-link iconset">
                <a href="compare-style1.html" className="icon-link d-flex flex-column">
                  <span className="iconCot">
                    <i className="hdr-icon icon anm anm-random-r"></i>
                    <span className="wishlist-count">3</span>
                  </span>
                  <span className="text">Compare</span>
                </a>
              </div>
              {/* End Compare */}
              {/* Wishlist */}
              <div className="wishlist-link iconset">
                <a href="wishlist-style1.html" className="icon-link d-flex flex-column">
                  <span className="iconCot">
                    <i className="hdr-icon icon anm anm-heart-l"></i>
                    <span className="wishlist-count">5</span>
                  </span>
                  <span className="text">Wishlist</span>
                </a>
              </div>
              {/* End Wishlist */}
              {/* Minicart */}
              <div className="header-cart iconset">
                <Link to="/cart" className="header-cart btn-minicart icon-link d-flex flex-column" data-bs-toggle="offcanvas" data-bs-target="#minicart-drawer">
                  <span className="iconCot">
                    <i className="hdr-icon icon anm anm-bag-l"></i>
                    <span className="cart-count">{qty}</span>
                  </span>
                  <span className="text">My Cart</span>
                </Link>
              </div>
              {/* End Minicart */}
              {/* Mobile Toggle */}
              <button type="button" onClick={handleMobileNavToggle} className="iconset icon-link pe-0 menu-icon js-mobile-nav-toggle mobile-nav--open d-inline-flex flex-column d-lg-none">
                <span className="iconCot">
                  <i className="hdr-icon icon anm anm-times-l"></i>
                  <i className="hdr-icon icon anm anm-bars-r"></i>
                </span>
                <span className="text">Menu</span>
              </button>
              {/* End Mobile Toggle */}
            </div>
            {/* End Right Icon */}
          </div>
        </div>
      </div>
       {/* END HEADER INNER  */}


       {/* Navigation Desktop */}
        <div className="main-menu-outer d-none d-lg-block">
      <div className="container container-1330">
        <div className="menu-outer rounded-5">
          <div className="row">
            <div className="col-1 col-sm-1 col-md-1 col-lg-10 align-self-center d-menu-col hdr-menu-left menu-position-left">
              <nav className="navigation" id="AccessibleNav">
                <ul id="siteNav" className="site-nav medium left">
                  <li className="lvl1 parent dropdown">
                    <a href="#">
                      Home <i className="icon anm anm-angle-down-l"></i>
                    </a>
                    <ul className="dropdown">
                      <li>
                        <a href="index.html" className="site-nav lvl-2">
                          Home 01 - Fashion
                        </a>
                      </li>
                      <li>
                        <a href="index2-footwear.html" className="site-nav lvl-2">
                          Home 02 - Footwear
                        </a>
                      </li>
                      <li>
                        <a href="index3-bags.html" className="site-nav lvl-2">
                          Home 03 - Bags
                        </a>
                      </li>
                      <li>
                        <a href="index4-electronic.html" className="site-nav lvl-2">
                          Home 04 - Electronic
                        </a>
                      </li>
                      <li>
                        <a href="index5-tools-parts.html" className="site-nav lvl-2">
                          Home 05 - Tools &amp; Parts
                        </a>
                      </li>
                      <li>
                        <a href="index6-jewelry.html" className="site-nav lvl-2">
                          Home 06 - Jewelry
                        </a>
                      </li>
                      <li>
                        <a href="index7-organic-food.html" className="site-nav lvl-2">
                          Home 07 - Organic Food
                        </a>
                      </li>
                      <li>
                        <a href="index8-cosmetics.html" className="site-nav lvl-2">
                          Home 08 - Cosmetics
                        </a>
                      </li>
                      <li>
                        <a href="index9-furniture.html" className="site-nav lvl-2">
                          Home 09 - Furniture
                        </a>
                      </li>
                      <li>
                        <a href="index10-sunglasses.html" className="site-nav lvl-2">
                          Home 10 - Sunglasses
                        </a>
                      </li>
                      <li>
                        <a href="index11-medical.html" className="site-nav lvl-2">
                          Home 11 - Medical
                        </a>
                      </li>
                      <li>
                        <a href="index12-christmas.html" className="site-nav lvl-2">
                          Home 12 - Christmas
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="lvl1 parent megamenu">
                    <a href="#">
                      Shop <i className="icon anm anm-angle-down-l"></i>
                    </a>
                    <div className="megamenu style1">
                      <ul className="row grid--uniform mmWrapper">
                        <li className="lvl-1 col-md-3 col-lg-3 w-22">
                          <a href="#;" className="site-nav lvl-1 menu-title">
                            Suiting
                          </a>
                          <ul className="subLinks">
                          {names}
                          </ul>
                        </li>
                        <li className="lvl-1 col-md-3 col-lg-3 w-22">
                          <a href="#;" className="site-nav lvl-1 menu-title">
                          Home Textile
                          </a>
                          <ul className="subLinks">
                            {arts}
                          </ul>
                        </li>
                        <li className="lvl-1 col-md-3 col-lg-3 w-22">
                          <a href="#;" className="site-nav lvl-1 menu-title">
                            Accessories
                          </a>
                          <ul className="subLinks">
                            {brands}
                          </ul>
                        </li>
                        <li className="lvl-1 col-md-3 col-lg-3 w-34 banner-col">
                          <div className="banner-wrap">
                            <a href="shop-left-sidebar.html">
                              <img className="rounded-5 blur-up lazyload" data-src="assets/images/megamenu/demo5-banner-menu.jpg" src="assets/images/megamenu/demo5-banner-menu.jpg" alt="banner" width="500" height="600" />
                            </a>
                            <div className="banner-content">
                              <h4>Hot deals</h4>
                              <h3>
                                Don't miss <br />
                                Trending
                              </h3>
                              <div className="banner-save text-primary">Save to 50%</div>
                              <div className="banner-btn">
                                <a href="shop-left-sidebar.html" className="btn btn-primary">
                                  Shop now
                                </a>
                              </div>
                            </div>
                            <div className="banner-discount">
                              <h3>
                                <span>50%</span> Off
                              </h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="lvl1 parent megamenu">
                    <a href="#">
                      Product <i className="icon anm anm-angle-down-l"></i>
                    </a>
                    <div className="megamenu style2">
                      <ul className="row mmWrapper">
                        <li className="lvl-1 col-md-3 col-lg-3">
                          <a href="#;" className="site-nav lvl-1 menu-title">
                            Product Page
                          </a>
                          <ul className="subLinks">
                            <li>
                              <a href="product-layout1.html" className="site-nav lvl-2">
                                Product Layout1
                              </a>
                            </li>
                            <li>
                              <a href="product-layout2.html" className="site-nav lvl-2">
                                Product Layout2
                              </a>
                            </li>
                            <li>
                              <a href="product-layout3.html" className="site-nav lvl-2">
                                Product Layout3
                              </a>
                            </li>
                            <li>
                              <a href="product-layout4.html" className="site-nav lvl-2">
                                Product Layout4
                              </a>
                            </li>
                            <li>
                              <a href="product-layout5.html" className="site-nav lvl-2">
                                Product Layout5
                              </a>
                            </li>
                            <li>
                              <a href="product-layout6.html" className="site-nav lvl-2">
                                Product Layout6
                              </a>
                            </li>
                            <li>
                              <a href="product-layout7.html" className="site-nav lvl-2">
                                Product Layout7
                              </a>
                            </li>
                            <li>
                              <a href="product-3d-ar-models.html" className="site-nav lvl-2">
                                Product 3D, AR models
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="lvl-1 col-md-3 col-lg-3">
                          <a href="#;" className="site-nav lvl-1 menu-title">
                            Product Page Types
                          </a>
                          <ul className="subLinks">
                            <li>
                              <a href="product-standard.html" className="site-nav lvl-2">
                                Standard Product
                              </a>
                            </li>
                            <li>
                              <a href="product-variable.html" className="site-nav lvl-2">
                                Variable Product
                              </a>
                            </li>
                            <li>
                              <a href="product-grouped.html" className="site-nav lvl-2">
                                Grouped Product
                              </a>
                            </li>
                            <li>
                              <a href="product-layout4.html" className="site-nav lvl-2">
                                Product Back in stock
                              </a>
                            </li>
                            <li>
                              <a href="product-layout6.html" className="site-nav lvl-2">
                                Product Accordion
                              </a>
                            </li>
                            <li>
                              <a href="product-layout7.html" className="site-nav lvl-2">
                                Product Tabs Left
                              </a>
                            </li>
                            <li>
                              <a href="product-layout6.html" className="site-nav lvl-2">
                                Product Bundle
                              </a>
                            </li>
                            <li>
                              <a href="prodcut-360-view.html" className="site-nav lvl-2">
                                Product 360 View
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="lvl-1 col-md-3 col-lg-6 product-col">
                          <a href="#;" className="site-nav lvl-1 menu-title">
                            Weekly Bestsellers
                          </a>
                          <div className="grid-products weekly-product gp10 mt-1">
                            <div className="item">
                              <div className="product-wrap position-relative">
                                {/* Start Product Image */}
                                <div className="product-image mb-0">
                                  <a href="product-layout1.html" className="product-img">
                                    <img className="rounded-5 blur-up lazyload" data-src="assets/images/products/625x625.jpg" src="assets/images/products/625x625.jpg" alt="product" title="Product" width="625" height="625" />
                                  </a>
                                  <div className="product-labels">
                                    <span className="lbl on-sale">Sale</span>
                                  </div>
                                </div>
                                {/* End Product Image */}
                                {/* Start Product Details */}
                                <div className="product-details text-center">
                                  <div className="product-name">
                                    <a href="product-layout1.html">Ball Hook Earrings</a>
                                  </div>
                                  <div className="product-price">
                                    <span className="price old-price">$114.00</span>
                                    <span className="price">$99.00</span>
                                  </div>
                                  <div className="product-review">
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star-o"></i>
                                    <span className="caption hidden ms-1">3 Reviews</span>
                                  </div>
                                </div>
                                {/* End product details */}
                              </div>
                            </div>
                            <div className="item">
                              <div className="product-wrap position-relative">
                                {/* Start Product Image */}
                                <div className="product-image mb-0">
                                  <a href="product-layout1.html" className="product-img">
                                    <img className="rounded-5 blur-up lazyload" data-src="assets/images/products/625x625.jpg" src="assets/images/products/625x625.jpg" alt="product" title="Product" width="625" height="625" />
                                  </a>
                                </div>
                                {/* End Product Image */}
                                {/* Start Product Details */}
                                <div className="product-details text-center">
                                  <div className="product-name">
                                    <a href="product-layout1.html">Gemstone Necklace</a>
                                  </div>
                                  <div className="product-price">
                                    <span className="price">$165.00</span>
                                  </div>
                                  <div className="product-review">
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star"></i>
                                    <span className="caption hidden ms-1">13 Reviews</span>
                                  </div>
                                </div>
                                {/* End product details */}
                              </div>
                            </div>
                            <div className="item">
                              <div className="product-wrap position-relative">
                                {/* Start Product Image */}
                                <div className="product-image mb-0">
                                  <a href="product-layout1.html" className="product-img">
                                    <img className="rounded-5 blur-up lazyload" data-src="assets/images/products/625x625.jpg" src="assets/images/products/625x625.jpg" alt="product" title="Product" width="625" height="625" />
                                  </a>
                                </div>
                                {/* End Product Image */}
                                {/* Start Product Details */}
                                <div className="product-details text-center">
                                  <div className="product-name">
                                    <a href="product-layout1.html">Freshwater Button Pearl</a>
                                  </div>
                                  <div className="product-price">
                                    <span className="price">$153.00</span>
                                  </div>
                                  <div className="product-review">
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star"></i>
                                    <i className="icon anm anm-star-o"></i>
                                    <i className="icon anm anm-star-o"></i>
                                    <span className="caption hidden ms-1">17 Reviews</span>
                                  </div>
                                </div>
                                {/* End product details */}
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="lvl1 parent dropdown">
                    <a href="#">
                      Pages <i className="icon anm anm-angle-down-l"></i>
                    </a>
                    <ul className="dropdown">
                      <li>
                        <a href="aboutus-style1.html" className="site-nav">
                          About Us <i className="icon anm anm-angle-right-l"></i>
                        </a>
                        <ul className="dropdown">
                          <li>
                            <a href="aboutus-style1.html" className="site-nav">
                              About Us Style1
                            </a>
                          </li>
                          <li>
                            <a href="aboutus-style2.html" className="site-nav">
                              About Us Style2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact-style1.html" className="site-nav">
                          Contact Us <i className="icon anm anm-angle-right-l"></i>
                        </a>
                        <ul className="dropdown">
                          <li>
                            <a href="contact-style1.html" className="site-nav">
                              Contact Us Style1
                            </a>
                          </li>
                          <li>
                            <a href="contact-style2.html" className="site-nav">
                              Contact Us Style2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="my-account.html" className="site-nav">
                          My Account <i className="icon anm anm-angle-right-l"></i>
                        </a>
                        <ul className="dropdown">
                          <li>
                            <a href="my-account.html" className="site-nav">
                              My Account
                            </a>
                          </li>
                          <li>
                            <a href="login.html" className="site-nav">
                              Login
                            </a>
                          </li>
                          <li>
                            <a href="register.html" className="site-nav">
                              Register
                            </a>
                          </li>
                          <li>
                            <a href="forgot-password.html" className="site-nav">
                              Forgot Password
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="lookbook-grid.html" className="site-nav">
                          Lookbook <i className="icon anm anm-angle-right-l"></i>
                        </a>
                        <ul className="dropdown">
                          <li>
                            <a href="lookbook-grid.html" className="site-nav">
                              Lookbook Grid
                            </a>
                          </li>
                          <li>
                            <a href="lookbook-masonry.html" className="site-nav">
                              Lookbook Masonry
                            </a>
                          </li>
                          <li>
                            <a href="lookbook-shop.html" className="site-nav">
                              Lookbook Shop
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="portfolio-page.html" className="site-nav">
                          Portfolio Page
                        </a>
                      </li>
                      <li>
                        <a href="faqs-page.html" className="site-nav">
                          FAQs Page
                        </a>
                      </li>
                      <li>
                        <a href="brands-page.html" className="site-nav">
                          Brands Page
                        </a>
                      </li>
                      <li>
                        <a href="cms-page.html" className="site-nav">
                          CMS Page
                        </a>
                      </li>
                      <li>
                        <a href="elements-icons.html" className="site-nav">
                          Icons
                        </a>
                      </li>
                      <li>
                        <a href="error-404.html" className="site-nav">
                          Error 404
                        </a>
                      </li>
                      <li>
                        <a href="coming-soon.html" className="site-nav">
                          Coming soon <span className="lbl nm_label2">New</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="lvl1 parent dropdown">
                    <a href="#">
                      Blog <i className="icon anm anm-angle-down-l"></i>
                    </a>
                    <ul className="dropdown">
                      <li>
                        <a href="blog-grid.html" className="site-nav">
                          Grid View
                        </a>
                      </li>
                      <li>
                        <a href="blog-list.html" className="site-nav">
                          List View
                        </a>
                      </li>
                      <li>
                        <a href="blog-grid-sidebar.html" className="site-nav">
                          Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-list-sidebar.html" className="site-nav">
                          Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-masonry.html" className="site-nav">
                          Masonry Grid
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html" className="site-nav">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-1 col-sm-1 col-md-1 col-lg-2 align-self-center text-right">
              <a href="#;" className="store-link text-uppercase pe-2">
                <i className="anm anm-map-marker-alt me-2"></i>Store Locator
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
       {/* End Navigation Desktop */}

       </header>
       {/* End of Header  */}

       {/* Mobile Menu */}
       <div className="mobile-nav-wrapper mobileMenu-bg-black" role="navigation">
      <div className="closemobileMenu" onClick={handleCloseMobileMenu}>
        Close Menu <i className="icon anm anm-times-l"></i>
      </div>
      <ul id="MobileNav" className="mobile-nav">
        <li className="lvl1 parent dropdown">
          <a href="#">
            Browse Categories <i className="icon anm anm-angle-down-l"></i>
          </a>
          <ul className="lvl-2">
            <li>
              <a href="#" className="site-nav">
                Jewellery <i className="icon anm anm-angle-down-l"></i>
              </a>
              <ul className="lvl-3 dropdown">
                <li>
                  <a href="#" className="site-nav">
                    Diamonds Jewelry <i className="icon anm anm-angle-down-l"></i>
                  </a>
                  <ul className="lvl-4 dropdown">
                    <li>
                      <a href="shop-right-sidebar.html" className="site-nav">
                        New Arrivals
                      </a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html" className="site-nav">
                        Best Sellers
                      </a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html" className="site-nav">
                        Trending
                      </a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html" className="site-nav">
                        Necklaces
                      </a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html" className="site-nav">
                        Engagement ring
                      </a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html" className="site-nav">
                        Gospel bracelet
                      </a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html" className="site-nav">
                        Rosary beads
                      </a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html" className="site-nav last">
                        Puzzle jewelry
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="site-nav">
                    Diamonds Jewelry <i className="icon anm anm-angle-down-l"></i>
                  </a>
                  <ul className="lvl-4 dropdown">
                    <li>
                      <a href="shop-right-sidebar.html" className="site-nav">
                        Belly chain
                      </a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html" className="site-nav">
                        Chatelaine
                      </a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html" className="site-nav">
                        Slave bracelet
                      </a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html" className="site-nav">
                        Breastplate
                      </a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html" className="site-nav">
                        Diamonds
                      </a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html" className="site-nav">
                        Perfect rings
                      </a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html" className="site-nav">
                        Accessories
                      </a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html" className="site-nav last">
                        Prayer jewelry
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="site-nav">
                Fashion <i className="icon anm anm-angle-down-l"></i>
              </a>
              <ul className="lvl-3 dropdown">
                <li>
                  <a href="#" className="site-nav">
                    Accessories <i className="icon anm anm-angle-down-l"></i>
                  </a>
                  <ul className="lvl-4 dropdown">
                    <li>
                      <a href="shop-right-sidebar.html">Jackets</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Dresses</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Blouses & Tops</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Skirts</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Outerwear</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="site-nav">
                    Pullovers <i className="icon anm anm-angle-down-l"></i>
                  </a>
                  <ul className="lvl-4 dropdown">
                    <li>
                      <a href="shop-right-sidebar.html">Pants &amp; Shorts</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Outerwear</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Skirts</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Blouses</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Dresses</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="site-nav">
                    Handbags <i className="icon anm anm-angle-down-l"></i>
                  </a>
                  <ul className="lvl-4 dropdown">
                    <li>
                      <a href="shop-right-sidebar.html">Jeans</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Blazers</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Bracelet</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Bedding Set</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Bodysuit</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="site-nav">
                    Dress Material <i className="icon anm anm-angle-down-l"></i>
                  </a>
                  <ul className="lvl-4 dropdown">
                    <li>
                      <a href="shop-right-sidebar.html">Dupatta</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Doormats</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Diwan Set</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Dhotis</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Face Towels</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="site-nav">
                Electronics <i className="icon anm anm-angle-down-l"></i>
              </a>
              <ul className="lvl-3 dropdown">
                <li>
                  <a href="shop-right-sidebar.html">Accessories</a>
                </li>
                <li>
                  <a href="#" className="site-nav">
                    Footwear <i className="icon anm anm-angle-down-l"></i>
                  </a>
                  <ul className="lvl-4 dropdown">
                    <li>
                      <a href="shop-right-sidebar.html">Backpacks</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Wallets</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Belts</a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Sunglasses</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-right-sidebar.html">Bottom wear</a>
                </li>
                <li>
                  <a href="shop-right-sidebar.html">Cargos</a>
                </li>
                <li>
                  <a href="shop-right-sidebar.html">Track pants</a>
                </li>
                <li>
                  <a href="shop-right-sidebar.html">Winter wear</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="site-nav">
                Cosmetics &amp; Beauty
              </a>
            </li>
            <li>
              <a href="#" className="site-nav">
                Digital Camera
              </a>
            </li>
            <li>
              <a href="#" className="site-nav">
                Smart Phones
              </a>
            </li>
            <li>
              <a href="#" className="site-nav">
                Furniture
              </a>
            </li>
            <li>
              <a href="#" className="site-nav">
                Toys &amp; Game
              </a>
            </li>
            <li>
              <a href="#" className="site-nav">
                Health &amp; Beauty
              </a>
            </li>
            <li>
              <a href="#" className="site-nav">
                Gift Ideas
              </a>
            </li>
            <li>
              <a href="#" className="site-nav">
                Health Care
              </a>
            </li>
            <li>
              <a href="#" className="site-nav">
                Watches
              </a>
            </li>
            <li>
              <a href="#" className="site-nav last">
                Shoes
              </a>
            </li>
          </ul>
        </li>

        <li className="lvl1 parent dropdown">
          <a href="index.html">
            Home <i className="icon anm anm-angle-down-l"></i>
          </a>
          <ul className="lvl-2">
            <li>
              <a href="index.html" className="site-nav">
                Home 01 - Fashion
              </a>
            </li>
            <li>
              <a href="index2-footwear.html" className="site-nav">
                Home 02 - Footwear
              </a>
            </li>
            <li>
              <a href="index3-bags.html" className="site-nav">
                Home 03 - Bags
              </a>
            </li>
            <li>
              <a href="index4-electronic.html" className="site-nav">
                Home 04 - Electronic
              </a>
            </li>
            <li>
              <a href="index5-tools-parts.html" className="site-nav">
                Home 05 - Tools &amp; Parts
              </a>
            </li>
            <li>
              <a href="index6-jewelry.html" className="site-nav">
                Home 06 - Jewelry
              </a>
            </li>
            <li>
              <a href="index7-organic-food.html" className="site-nav">
                Home 07 - Organic Food
              </a>
            </li>
            <li>
              <a href="index8-cosmetics.html" className="site-nav">
                Home 08 - Cosmetics
              </a>
            </li>
            <li>
              <a href="index9-furniture.html" className="site-nav">
                Home 09 - Furniture
              </a>
            </li>
            <li>
              <a href="index10-sunglasses.html" className="site-nav">
                Home 10 - Sunglasses
              </a>
            </li>
            <li>
              <a href="index11-medical.html" className="site-nav">
                Home 11 - Medical
              </a>
            </li>
            <li>
              <a href="index12-christmas.html" className="site-nav last">
                Home 12 - Christmas
              </a>
            </li>
          </ul>
        </li>
        <li className="lvl1 parent megamenu">
          <a href="#">
            Shop <i className="icon anm anm-angle-down-l"></i>
          </a>
          <ul className="lvl-2">
            <li>
              <a href="#;" className="site-nav">
                Collection Page <i className="icon anm anm-angle-down-l"></i>
              </a>
              <ul className="lvl-3">
                <li>
                  <a href="collection-style1.html" className="site-nav">
                    Collection style1
                  </a>
                </li>
                <li>
                  <a href="collection-style2.html" className="site-nav">
                    Collection style2
                  </a>
                </li>
                <li>
                  <a href="collection-style3.html" className="site-nav">
                    Collection style3
                  </a>
                </li>
                <li>
                  <a href="collection-style4.html" className="site-nav">
                    Collection style4
                  </a>
                </li>
                <li>
                  <a href="sub-collection-style1.html" className="site-nav">
                    Sub Collection style1
                  </a>
                </li>
                <li>
                  <a href="sub-collection-style2.html" className="site-nav">
                    Sub Collection style2
                  </a>
                </li>
                <li>
                  <a href="collection-empty.html" className="site-nav">
                    Collection Empty
                  </a>
                </li>
                <li>
                  <a href="shop-search-results.html" className="site-nav">
                    Shop Search Results
                  </a>
                </li>
                <li>
                  <a href="shop-swatches-style.html" className="site-nav last">
                    Shop Swatches style
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#;" className="site-nav">
                Shop Page <i className="icon anm anm-angle-down-l"></i>
              </a>
              <ul className="lvl-3">
                <li>
                  <a href="shop-grid-view.html" className="site-nav">
                    Shop Grid View
                  </a>
                </li>
                <li>
                  <a href="shop-list-view.html" className="site-nav">
                    Shop List View
                  </a>
                </li>
                <li>
                  <a href="shop-left-sidebar.html" className="site-nav">
                    Shop Left Sidebar
                  </a>
                </li>
                <li>
                  <a href="shop-right-sidebar.html" className="site-nav">
                    Shop Right Sidebar
                  </a>
                </li>
                <li>
                  <a href="shop-top-filter.html" className="site-nav">
                    Shop Top Filter
                  </a>
                </li>
                <li>
                  <a href="shop-masonry-grid.html" className="site-nav">
                    Shop Masonry Grid
                  </a>
                </li>
                <li>
                  <a href="shop-with-category.html" className="site-nav">
                    Shop With Category
                  </a>
                </li>
                <li>
                  <a href="shop-grid-view.html" className="site-nav">
                    Classic Pagination
                  </a>
                </li>
                <li>
                  <a href="shop-right-sidebar.html" className="site-nav last">
                    Infinite Scrolling
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#;" className="site-nav">
                Shop Other Page <i className="icon anm anm-angle-down-l"></i>
              </a>
              <ul className="lvl-3">
                <li>
                  <a href="wishlist-style1.html" className="site-nav">
                    Wishlist Style1
                  </a>
                </li>
                <li>
                  <a href="wishlist-style2.html" className="site-nav">
                    Wishlist Style2
                  </a>
                </li>
                <li>
                  <a href="compare-style1.html" className="site-nav">
                    Compare Style1
                  </a>
                </li>
                <li>
                  <a href="compare-style2.html" className="site-nav">
                    Compare Style2
                  </a>
                </li>
                <li>
                  <a href="cart-style1.html" className="site-nav">
                    Cart Style1
                  </a>
                </li>
                <li>
                  <a href="cart-style2.html" className="site-nav">
                    Cart Style2
                  </a>
                </li>
                <li>
                  <a href="checkout-style1.html" className="site-nav">
                    Checkout Style1
                  </a>
                </li>
                <li>
                  <a href="checkout-style2.html" className="site-nav">
                    Checkout Style2
                  </a>
                </li>
                <li>
                  <a href="order-success.html" className="site-nav last">
                    Order Success
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="lvl1 parent megamenu">
          <a href="product-layout1.html">
            Product <i className="icon anm anm-angle-down-l"></i>
          </a>
          <ul className="lvl-2">
            <li>
              <a href="product-layout1.html" className="site-nav">
                Product Page <i className="icon anm anm-angle-down-l"></i>
              </a>
              <ul className="lvl-3">
                <li>
                  <a href="product-layout1.html" className="site-nav">
                    Product Layout1
                  </a>
                </li>
                <li>
                  <a href="product-layout2.html" className="site-nav">
                    Product Layout2
                  </a>
                </li>
                <li>
                  <a href="product-layout3.html" className="site-nav">
                    Product Layout3
                  </a>
                </li>
                <li>
                  <a href="product-layout4.html" className="site-nav">
                    Product Layout4
                  </a>
                </li>
                <li>
                  <a href="product-layout5.html" className="site-nav">
                    Product Layout5
                  </a>
                </li>
                <li>
                  <a href="product-layout6.html" className="site-nav">
                    Product Layout6
                  </a>
                </li>
                <li>
                  <a href="product-layout7.html" className="site-nav">
                    Product Layout7
                  </a>
                </li>
                <li>
                  <a href="product-3d-ar-models.html" className="site-nav last">
                    Product 3D, AR models
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="product-standard.html" className="site-nav">
                Product Page Types <i className="icon anm anm-angle-down-l"></i>
              </a>
              <ul className="lvl-3">
                <li>
                  <a href="product-standard.html" className="site-nav">
                    Standard Product
                  </a>
                </li>
                <li>
                  <a href="product-variable.html" className="site-nav">
                    Variable Product
                  </a>
                </li>
                <li>
                  <a href="product-grouped.html" className="site-nav">
                    Grouped Product
                  </a>
                </li>
                <li>
                  <a href="product-layout4.html" className="site-nav">
                    Product Back in stock
                  </a>
                </li>
                <li>
                  <a href="product-layout6.html" className="site-nav">
                    Product Accordion
                  </a>
                </li>
                <li>
                  <a href="product-layout7.html" className="site-nav">
                    Product Tabs Left
                  </a>
                </li>
                <li>
                  <a href="product-layout6.html" className="site-nav">
                    Product Bundle
                  </a>
                </li>
                <li>
                  <a href="prodcut-360-view.html" className="site-nav last">
                    Product 360 View
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="lvl1 parent dropdown">
          <a href="#;">
            Pages <i className="icon anm anm-angle-down-l"></i>
          </a>
          <ul className="lvl-2">
            <li>
              <a href="aboutus-style1.html" className="site-nav">
                About Us <i className="icon anm anm-angle-down-l"></i>
              </a>
              <ul className="lvl-3 dropdown">
                <li>
                  <a href="aboutus-style1.html" className="site-nav">
                    About Us Style1
                  </a>
                </li>
                <li>
                  <a href="aboutus-style2.html" className="site-nav">
                    About Us Style2
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact-style1.html" className="site-nav">
                Contact Us <i className="icon anm anm-angle-down-l"></i>
              </a>
              <ul className="lvl-3 dropdown">
                <li>
                  <a href="contact-style1.html" className="site-nav">
                    Contact Us Style1
                  </a>
                </li>
                <li>
                  <a href="contact-style2.html" className="site-nav">
                    Contact Us Style2
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="my-account.html" className="site-nav">
                My Account <i className="icon anm anm-angle-down-l"></i>
              </a>
              <ul className="lvl-3 dropdown">
                <li>
                  <a href="my-account.html" className="site-nav">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="login.html" className="site-nav">
                    Login
                  </a>
                </li>
                <li>
                  <a href="register.html" className="site-nav">
                    Register
                  </a>
                </li>
                <li>
                  <a href="forgot-password.html" className="site-nav">
                    Forgot Password
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="lookbook-grid.html" className="site-nav">
                Lookbook <i className="icon anm anm-angle-down-l"></i>
              </a>
              <ul className="lvl-3 dropdown">
                <li>
                  <a href="lookbook-grid.html" className="site-nav">
                    Lookbook Grid
                  </a>
                </li>
                <li>
                  <a href="lookbook-masonry.html" className="site-nav">
                    Lookbook Masonry
                  </a>
                </li>
                <li>
                  <a href="lookbook-shop.html" className="site-nav">
                    Lookbook Shop
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="portfolio-page.html" className="site-nav">
                Portfolio Page
              </a>
            </li>
            <li>
              <a href="faqs-page.html" className="site-nav">
                FAQs Page
              </a>
            </li>
            <li>
              <a href="brands-page.html" className="site-nav">
                Brands Page
              </a>
            </li>
            <li>
              <a href="cms-page.html" className="site-nav">
                CMS Page
              </a>
            </li>
            <li>
              <a href="elements-icons.html" className="site-nav">
                Icons
              </a>
            </li>
            <li>
              <a href="error-404.html" className="site-nav">
                Error 404
              </a>
            </li>
            <li>
              <a href="coming-soon.html" className="site-nav">
                Coming soon <span className="lbl nm_label2">New</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="lvl1 parent dropdown">
          <a href="blog-grid.html">
            Blog <i className="icon anm anm-angle-down-l"></i>
          </a>
          <ul className="lvl-2">
            <li>
              <a href="blog-grid.html" className="site-nav">
                Grid View
              </a>
            </li>
            <li>
              <a href="blog-list.html" className="site-nav">
                List View
              </a>
            </li>
            <li>
              <a href="blog-grid-sidebar.html" className="site-nav">
                Left Sidebar
              </a>
            </li>
            <li>
              <a href="blog-list-sidebar.html" className="site-nav">
                Right Sidebar
              </a>
            </li>
            <li>
              <a href="blog-masonry.html" className="site-nav">
                Masonry Grid
              </a>
            </li>
            <li>
              <a href="blog-details.html" className="site-nav">
                Blog Details
              </a>
            </li>
          </ul>
        </li>

        <li className="mobile-menu-bottom">
          <div className="mobile-links">
            <ul className="list-inline d-inline-flex flex-column w-100">
              <li>
                <a href="login.html" className="d-flex align-items-center">
                  <i className="icon anm anm-sign-in-al"></i>Sign In
                </a>
              </li>
              <li>
                <a href="register.html" className="d-flex align-items-center">
                  <i className="icon anm anm-user-al"></i>Register
                </a>
              </li>
              <li>
                <a href="my-account.html" className="d-flex align-items-center">
                  <i className="icon anm anm-user-cil"></i>My Account
                </a>
              </li>
              <li className="title h5">Need Help?</li>
              <li>
                <a href="tel:401234567890" className="d-flex align-items-center">
                  <i className="icon anm anm-phone-l"></i> (+40) 123 456 7890
                </a>
              </li>
              <li>
                <a href="mailto:info@example.com" className="d-flex align-items-center">
                  <i className="icon anm anm-envelope-l"></i> info@example.com
                </a>
              </li>
            </ul>
          </div>
          <div className="mobile-follow mt-2">
            <h5 className="title">Follow Us</h5>
            <ul className="list-inline social-icons d-inline-flex mt-1">
              <li className="list-inline-item">
                <a href="#" title="Facebook">
                  <i className="icon anm anm-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" title="Twitter">
                  <i className="icon anm anm-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" title="Pinterest">
                  <i className="icon anm anm-pinterest-p"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" title="Linkedin">
                  <i className="icon anm anm-linkedin-in"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" title="Instagram">
                  <i className="icon anm anm-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" title="Youtube">
                  <i className="icon anm anm-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <Outlet />
    </>
    )
}
//   End of Categories 

  

    

    
}

export default DefaultLayout

