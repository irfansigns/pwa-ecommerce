import React, {useContext , useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import { productContext } from "../global/productContext"
import { cartContext } from "../global/cartContext";
import AppURL from '../AppURL';
const Navbar =()=>{

  const {dispatch,shoppingCart,user} = useContext(cartContext);
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
      if(cats.dept==2){
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
        <header className="header d-flex align-items-center header-10 header-fixed mih-75 header-fixed">
        <div className="container-fluid">        
            <div className="row">
                
                <div className="logo col-4 col-sm-4 col-md-4 col-lg-3 align-self-center">
                    <Link className="logoImg" to="/"><img src={AppURL.Images+'/logo/logo-white.png'} alt="Hema Multipurpose Html Template" title="Hema Multipurpose Html Template" width="149" height="39" /></Link>
                </div>
                
                <div className="col-1 col-sm-1 col-md-1 col-lg-6 align-self-center d-menu-col">
                    <nav className="navigation" id="AccessibleNav">
                        <ul id="siteNav" className="site-nav medium center">
                            <li className="lvl1 parent dropdown"><Link to="/">Home</Link></li>
                            <li className="lvl1 parent megamenu"><a href="#">Shop <i className="icon anm anm-angle-down-l"></i></a>
                                <div className="megamenu style1">
                                    <ul className="row grid--uniform mmWrapper">
                                        <li className="lvl-1 col-md-3 col-lg-3 w-22"><a href="#;" className="site-nav lvl-1 menu-title">Suiting</a>
                                            <ul className="subLinks">
                                            {names}
                                            </ul>
                                        </li>
                                        <li className="lvl-1 col-md-3 col-lg-3 w-22"><a href="#;" className="site-nav lvl-1 menu-title">Home Textile</a>
                                            <ul className="subLinks">
                                            {arts}
                                            </ul>
                                        </li>
                                        <li className="lvl-1 col-md-3 col-lg-3 w-22"><a href="#;" className="site-nav lvl-1 menu-title">Accessories</a>
                                            <ul className="subLinks">
                                                {brands}
                                            </ul>
                                        </li>
                                        <li className="lvl-1 col-md-3 col-lg-3 w-34 banner-col">
                                            <div className="banner-wrap">
                                                <Link to="shop/11"><img className="blur-up lazyload" src={AppURL.Images+'cover1.jpeg'} alt="banner" width="600" height="440" /></Link>
                                                <div className="banner-content">
                                                    {/* <h4>Hot deals</h4> */}
                                                    {/* <h3>Don't miss <br />Trending</h3> */}
                                                    {/* <div className="banner-save text-primary">Save to 50%</div> */}
                                                    {/* <div className="banner-btn"><a href="shop-left-sidebar.html" className="btn btn-primary">Shop now</a></div> */}
                                                </div>
                                                <div className="banner-discount">
                                                    <h3><span>50%</span> Off</h3>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="lvl1 parent megamenu"><a href="#">Product <i className="icon anm anm-angle-down-l"></i></a>
                                <div className="megamenu style2">
                                    <ul className="row mmWrapper">
                                        <li className="lvl-1 col-md-3 col-lg-3"><a href="#;" className="site-nav lvl-1 menu-title">Your Products</a>
                                            <ul className="subLinks">
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                
                                            </ul>
                                        </li>
                                        <li className="lvl-1 col-md-3 col-lg-3"><a href="#;" className="site-nav lvl-1 menu-title">Your Products</a>
                                            <ul className="subLinks">
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                
                                            </ul>
                                        </li>
                                        <li className="lvl-1 col-md-3 col-lg-3"><a href="#;" className="site-nav lvl-1 menu-title">Your Products</a>
                                            <ul className="subLinks">
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                <li className="lvl-2"><Link to="/shop" className="site-nav lvl-2">Product Layout1</Link></li>
                                                
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="lvl1 parent dropdown"><Link to="/contact">Contact</Link></li>
                            <li className="lvl1 parent dropdown"><Link to="/about">About</Link></li>
                           
                        </ul>
                    </nav>
                </div>
            
                <div className="col-8 col-sm-8 col-md-8 col-lg-3 align-self-center icons-col text-right">
                
                   
                <div className="wishlist-link iconset" title="Wishlist"><Link to="/cart"><i className="hdr-icon icon anm anm-bag-l"></i><span className="wishlist-count">{shoppingCart.length}</span></Link></div>
                    
                <div className="account-parent iconset">
                    <div className="account-link" title="Account"><i className="hdr-icon icon anm anm-user-al"></i></div>
                    <div id="accountBox">
                        <div className="customer-links">
                            <ul className="m-0">
                            {user?<li><Link onClick={logoutHandler}> <i className="icon anm anm-sign-out-al"></i>Logout</Link></li>:
                                <li><Link method="get" to="/login"> <i className="icon anm anm-sign-in-al"></i>Login</Link></li>}
                                <li><a href="register.html"><i className="icon anm anm-user-al"></i>Register</a></li>
                                <li><a href="my-account.html"><i className="icon anm anm-user-cil"></i>My Account</a></li>                            
                            </ul>
                        </div>
                    </div>
                </div>
                    
                   
                    
                    
                    <button type="button" onClick={handleMobileNavToggle} className="iconset pe-0 menu-icon js-mobile-nav-toggle mobile-nav--open d-lg-none" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Menu"><i className="hdr-icon icon anm anm-times-l"></i><i className="hdr-icon icon anm anm-bars-r"></i></button>
                    
                </div>
                
            </div>
        </div>
    </header>
    
    
        <div className="mobile-nav-wrapper mobileMenu-bg-black" role="navigation">
        <div className="closemobileMenu" onClick={handleCloseMobileMenu}>Close Menu <i className="icon anm anm-times-l"></i></div>
        <ul id="MobileNav" className="mobile-nav">
            <li className="lvl1 parent dropdown"><a href="index.html">Home <i className="icon anm anm-angle-down-l"></i></a>
                <ul className="lvl-2">
                    <li><a href="index.html" className="site-nav">Home 01 - Fashion</a></li>
                    <li><a href="index2-footwear.html" className="site-nav">Home 02 - Footwear</a></li>
                    <li><a href="index3-bags.html" className="site-nav">Home 03 - Bags</a></li>
                    <li><a href="index4-electronic.html" className="site-nav">Home 04 - Electronic</a></li>
                    <li><a href="index5-tools-parts.html" className="site-nav">Home 05 - Tools &amp; Parts</a></li>
                    <li><a href="index6-jewelry.html" className="site-nav">Home 06 - Jewelry</a></li>
                    <li><a href="index7-organic-food.html" className="site-nav">Home 07 - Organic Food</a></li>
                    <li><a href="index8-cosmetics.html" className="site-nav">Home 08 - Cosmetics</a></li>
                    <li><a href="index9-furniture.html" className="site-nav">Home 09 - Furniture</a></li>
                    <li><a href="index10-sunglasses.html" className="site-nav last">Home 10 - Sunglasses</a></li>                     
                </ul>
            </li>
            <li className="lvl1 parent megamenu"><a href="#">Shop <i className="icon anm anm-angle-down-l"></i></a>
                <ul className="lvl-2">
                    <li><a href="#;" className="site-nav">Collection Page <i className="icon anm anm-angle-down-l"></i></a>
                        <ul className="lvl-3">
                            <li><a href="collection-style1.html" className="site-nav">Collection style1</a></li>
                            <li><a href="collection-style2.html" className="site-nav">Collection style2</a></li>
                            <li><a href="collection-style3.html" className="site-nav">Collection style3</a></li>
                            <li><a href="collection-style4.html" className="site-nav">Collection style4</a></li>
                            <li><a href="sub-collection-style1.html" className="site-nav">Sub Collection style1</a></li>
                            <li><a href="sub-collection-style2.html" className="site-nav">Sub Collection style2</a></li>
                            <li><a href="collection-empty.html" className="site-nav">Collection Empty</a></li>
                            <li><a href="shop-search-results.html" className="site-nav">Shop Search Results</a></li>
                            <li><a href="shop-swatches-style.html" className="site-nav last">Shop Swatches style</a></li>
                        </ul>
                    </li>
                    <li><a href="#;" className="site-nav">Shop Page <i className="icon anm anm-angle-down-l"></i></a>
                        <ul className="lvl-3">
                            <li><a href="shop-grid-view.html" className="site-nav">Shop Grid View</a></li>
                            <li><a href="shop-list-view.html" className="site-nav">Shop List View</a></li>
                            <li><a href="shop-left-sidebar.html" className="site-nav">Shop Left Sidebar</a></li>
                            <li><a href="shop-right-sidebar.html" className="site-nav">Shop Right Sidebar</a></li>
                            <li><a href="shop-top-filter.html" className="site-nav">Shop Top Filter</a></li>
                            <li><a href="shop-masonry-grid.html" className="site-nav">Shop Masonry Grid</a></li>
                            <li><a href="shop-with-category.html" className="site-nav">Shop With Category</a></li>
                            <li><a href="shop-grid-view.html" className="site-nav">Classic Pagination</a></li>
                            <li><a href="shop-right-sidebar.html" className="site-nav last">Infinite Scrolling</a></li>
                        </ul>
                    </li>
                    <li><a href="#;" className="site-nav">Shop Other Page <i className="icon anm anm-angle-down-l"></i></a>
                        <ul className="lvl-3">
                            <li><a href="wishlist-style1.html" className="site-nav">Wishlist Style1</a></li>
                            <li><a href="wishlist-style2.html" className="site-nav">Wishlist Style2</a></li>
                            <li><a href="compare-style1.html" className="site-nav">Compare Style1</a></li>
                            <li><a href="compare-style2.html" className="site-nav">Compare Style2</a></li>
                            <li><a href="cart-style1.html" className="site-nav">Cart Style1</a></li>
                            <li><a href="cart-style2.html" className="site-nav">Cart Style2</a></li>
                            <li><a href="checkout-style1.html" className="site-nav">Checkout Style1</a></li>
                            <li><a href="checkout-style2.html" className="site-nav">Checkout Style2</a></li>
                            <li><a href="order-success.html" className="site-nav last">Order Success</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="lvl1 parent megamenu"><a href="product-layout1.html">Product <i className="icon anm anm-angle-down-l"></i></a>
                <ul className="lvl-2">
                    <li><a href="product-layout1.html" className="site-nav">Product Page <i className="icon anm anm-angle-down-l"></i></a>
                        <ul className="lvl-3">
                            <li><a href="product-layout1.html" className="site-nav">Product Layout1</a></li>
                            <li><a href="product-layout2.html" className="site-nav">Product Layout2</a></li>
                            <li><a href="product-layout3.html" className="site-nav">Product Layout3</a></li>
                            <li><a href="product-layout4.html" className="site-nav">Product Layout4</a></li>
                            <li><a href="product-layout5.html" className="site-nav">Product Layout5</a></li>
                            <li><a href="product-layout6.html" className="site-nav">Product Layout6</a></li>
                            <li><a href="product-layout7.html" className="site-nav">Product Layout7</a></li>
                            <li><a href="product-3d-ar-models.html" className="site-nav last">Product 3D, AR models</a></li>
                        </ul>
                    </li>
                    <li><a href="product-standard.html" className="site-nav">Product Page Types <i className="icon anm anm-angle-down-l"></i></a>
                        <ul className="lvl-3">
                            <li><a href="product-standard.html" className="site-nav">Standard Product</a></li>
                            <li><a href="product-variable.html" className="site-nav">Variable Product</a></li>
                            <li><a href="product-grouped.html" className="site-nav">Grouped Product</a></li>
                            <li><a href="product-layout4.html" className="site-nav">Product Back in stock</a></li>
                            <li><a href="product-layout6.html" className="site-nav">Product Accordion</a></li>
                            <li><a href="product-layout7.html" className="site-nav">Product Tabs Left</a></li>
                            <li><a href="product-layout6.html" className="site-nav">Product Bundle</a></li>
                            <li><a href="prodcut-360-view.html" className="site-nav last">Product 360 View</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="lvl1 parent dropdown"><a href="#;">Pages <i className="icon anm anm-angle-down-l"></i></a>
                <ul className="lvl-2">
                    <li><a href="aboutus-style1.html" className="site-nav">About Us <i className="icon anm anm-angle-down-l"></i></a>
                        <ul className="lvl-3 dropdown">
                            <li><a href="aboutus-style1.html" className="site-nav">About Us Style1</a></li>
                            <li><a href="aboutus-style2.html" className="site-nav">About Us Style2</a></li>
                        </ul>
                    </li>
                    <li><a href="contact-style1.html" className="site-nav">Contact Us <i className="icon anm anm-angle-down-l"></i></a>
                        <ul className="lvl-3 dropdown">
                            <li><a href="contact-style1.html" className="site-nav">Contact Us Style1</a></li>
                            <li><a href="contact-style2.html" className="site-nav">Contact Us Style2</a></li>
                        </ul>
                    </li>
                    <li><a href="my-account.html" className="site-nav">My Account <i className="icon anm anm-angle-down-l"></i></a>
                        <ul className="lvl-3 dropdown">
                            <li><a href="my-account.html" className="site-nav">My Account</a></li>
                            <li><a href="login.html" className="site-nav">Login</a></li>
                            <li><a href="register.html" className="site-nav">Register</a></li>
                            <li><a href="forgot-password.html" className="site-nav">Forgot Password</a></li>
                        </ul>
                    </li>
                    <li><a href="lookbook-grid.html" className="site-nav">Lookbook <i className="icon anm anm-angle-down-l"></i></a>
                        <ul className="lvl-3 dropdown">
                            <li><a href="lookbook-grid.html" className="site-nav">Lookbook Grid</a></li>
                            <li><a href="lookbook-masonry.html" className="site-nav">Lookbook Masonry</a></li>
                            <li><a href="lookbook-shop.html" className="site-nav">Lookbook Shop</a></li>
                        </ul>
                    </li>
                    <li><a href="portfolio-page.html" className="site-nav">Portfolio Page</a></li>
                    <li><a href="faqs-page.html" className="site-nav">FAQs Page</a></li>
                    <li><a href="brands-page.html" className="site-nav">Brands Page</a></li>
                    <li><a href="cms-page.html" className="site-nav">CMS Page</a></li>
                    <li><a href="elements-icons.html" className="site-nav">Icons</a></li>
                    <li><a href="error-404.html" className="site-nav">Error 404</a></li>
                    <li><a href="coming-soon.html" className="site-nav">Coming soon <span className="lbl nm_label2">New</span></a></li>
                </ul>
            </li>
            <li className="lvl1 parent dropdown"><a href="blog-grid.html">Blog <i className="icon anm anm-angle-down-l"></i></a>
                <ul className="lvl-2">
                    <li><a href="blog-grid.html" className="site-nav">Grid View</a></li>
                    <li><a href="blog-list.html" className="site-nav">List View</a></li>
                    <li><a href="blog-grid-sidebar.html" className="site-nav">Left Sidebar</a></li>
                    <li><a href="blog-list-sidebar.html" className="site-nav">Right Sidebar</a></li>
                    <li><a href="blog-masonry.html" className="site-nav">Masonry Grid</a></li>
                    <li><a href="blog-details.html" className="site-nav">Blog Details</a></li>
                </ul>
            </li>

            <li className="mobile-menu-bottom">
                <div className="mobile-links"> 
                    <ul className="list-inline d-inline-flex flex-column w-100">
                        <li><a href="login.html" className="d-flex align-items-center"><i className="icon anm anm-sign-in-al"></i>Sign In</a></li>
                        <li><a href="register.html" className="d-flex align-items-center"><i className="icon anm anm-user-al"></i>Register</a></li>
                        <li><a href="my-account.html" className="d-flex align-items-center"><i className="icon anm anm-user-cil"></i>My Account</a></li>
                        <li className="title h5">Need Help?</li>
                        <li><a href="tel:401234567890" className="d-flex align-items-center"><i className="icon anm anm-phone-l"></i> (+40) 123 456 7890</a></li>
                        <li><a href="mailto:info@example.com" className="d-flex align-items-center"><i className="icon anm anm-envelope-l"></i> info@example.com</a></li>
                    </ul>
                </div>
                <div className="mobile-follow mt-2">  
                    <h5 className="title">Follow Us</h5>
                    <ul className="list-inline social-icons d-inline-flex mt-1">
                        <li className="list-inline-item"><a href="#" title="Facebook"><i className="icon anm anm-facebook-f"></i></a></li>
                        <li className="list-inline-item"><a href="#" title="Twitter"><i className="icon anm anm-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#" title="Pinterest"><i className="icon anm anm-pinterest-p"></i></a></li>
                        <li className="list-inline-item"><a href="#" title="Linkedin"><i className="icon anm anm-linkedin-in"></i></a></li>
                        <li className="list-inline-item"><a href="#" title="Instagram"><i className="icon anm anm-instagram"></i></a></li>
                        <li className="list-inline-item"><a href="#" title="Youtube"><i className="icon anm anm-youtube"></i></a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    
    
    
        </>
    )
}
//   End of Categories 

  

    

    
}

export default Navbar

