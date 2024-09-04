import React, {useContext, useEffect} from 'react'
import { productContext } from "../context/productContext";
import { cartContext } from "../context/cartContext";
import axiosClient from "../axiosClient";
import { Link , useLocation} from 'react-router-dom'
import CategorySlider from '../Components/Slider/CategorySlider';
import MCatSlider from "../Components/Slider/MCatSlider";
import ProductSlider from "../Components/Slider/ProductSlider"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage =()=>{

    
    const location = useLocation();

    useEffect(() => {
        if (location.state?.showToast) {
            toast[location.state.toastType](location.state.toastMessage); 

            // Clear the state after displaying the toast
            setTimeout(() => {
                window.history.replaceState({}, document.title);
            }, 100); // Adjust timeout if needed
        }
    }, [location]);

    useEffect(() => {
        // This code will run after the component has been rendered
    
        // Add 'b-top' className to elements with 'bg-top' className
        const bgTopElements = document.querySelectorAll('.bg-top');
        bgTopElements.forEach((element) => {
          element.parentElement.classList.add('b-top');
        });
    
        // Add 'b-bottom' className to elements with 'bg-bottom' className
        const bgBottomElements = document.querySelectorAll('.bg-bottom');
        bgBottomElements.forEach((element) => {
          element.parentElement.classList.add('b-bottom');
        });
    
        // Add other classes as needed (e.g., 'b-center', 'b-left', 'b-right', 'b_size_content')
    
        // Apply background image styling to elements with 'bg-img' className
        const bgImgElements = document.querySelectorAll('.bg-img');
        bgImgElements.forEach((element) => {
          const src = element.getAttribute('src');
          const parent = element.parentElement;
    
          parent.style.backgroundImage = `url(${src})`;
          parent.style.backgroundSize = 'cover';
          parent.style.backgroundPosition = 'center';
          parent.style.backgroundRepeat = 'no-repeat';
    
          element.style.display = 'none'; // Hide the image element
        });
      }, []);

    

return(
  <>
    <div id="page-content" className="mb-0">  

        <section className="slideshow slideshow-wrapper">
            <div className="container container-1330">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 d-none d-lg-block">
                        <div className="header-vertical-menu">
                        <div className="vertical-menu-content rounded-5">
                            <h4 className="menuTitle">
                            <span>Browse Categories</span>
                            </h4>
                            <ul className="menuList">
                            <li className="has-submenu">
                                <a href="#" className="nav-link">
                                Jewellery
                                </a>
                                <ul className="megamenu d-flex rounded-5 rounded-start-0">
                                <li>
                                    <h4 className="sub-menu-title">Diamonds Jewelry</h4>
                                    <ul>
                                    <li>
                                        <a href="shop-right-sidebar.html">New Arrivals</a>
                                    </li>
                                    <li>
                                        <a href="shop-right-sidebar.html">Best Sellers</a>
                                    </li>
                                    <li>
                                        <a href="shop-right-sidebar.html">Trending</a>
                                    </li>
                                    <li>
                                        <a href="shop-right-sidebar.html">Necklaces</a>
                                    </li>
                                    <li>
                                        <a href="shop-right-sidebar.html">Engagement ring</a>
                                    </li>
                                    <li>
                                        <a href="shop-right-sidebar.html">Gospel bracelet</a>
                                    </li>
                                    <li>
                                        <a href="shop-right-sidebar.html">Rosary beads</a>
                                    </li>
                                    <li>
                                        <a href="shop-right-sidebar.html">Puzzle jewelry</a>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <h4 className="sub-menu-title">Featured Jewelry</h4>
                                    <ul>
                                    <li>
                                        <a href="shop-right-sidebar.html">Belly chain</a>
                                    </li>
                                    <li>
                                        <a href="shop-right-sidebar.html">Chatelaine</a>
                                    </li>
                                    <li>
                                        <a href="shop-right-sidebar.html">Slave bracelet</a>
                                    </li>
                                    <li>
                                        <a href="shop-right-sidebar.html">Breastplate</a>
                                    </li>
                                    <li>
                                        <a href="shop-right-sidebar.html">Diamonds</a>
                                    </li>
                                    <li>
                                        <a href="shop-right-sidebar.html">Perfect rings</a>
                                    </li>
                                    <li>
                                        <a href="shop-right-sidebar.html">Accessories</a>
                                    </li>
                                    <li>
                                        <a href="shop-right-sidebar.html">Prayer jewelry</a>
                                    </li>
                                    </ul>
                                </li>
                                <li className="bannerImg p-0">
                                    <a href="shop-left-sidebar.html">
                                    <img
                                        className="rounded-5 rounded-start-0 blur-up lazyload"
                                        data-src="assets/images/megamenu/vertical-megamenu-banner1.jpg"
                                        src="assets/images/megamenu/vertical-megamenu-banner1.jpg"
                                        alt="banner"
                                        width="340"
                                        height="330"
                                    />
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="has-submenu">
                                <a href="#" className="nav-link">
                                Fashion
                                </a>
                                <ul className="megamenu type2 rounded-5 rounded-start-0">
                                <li>
                                    <div className="row">
                                    <div className="col-md-3 col-lg-3 col-6">
                                        <h4 className="sub-menu-title">Accessories</h4>
                                        <ul>
                                        <li>
                                            <a href="shop-right-sidebar.html">Jackets</a>
                                        </li>
                                        <li>
                                            <a href="shop-right-sidebar.html">Dresses</a>
                                        </li>
                                        <li>
                                            <a href="shop-right-sidebar.html">
                                            Blouses & Tops
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-right-sidebar.html">Skirts</a>
                                        </li>
                                        <li>
                                            <a href="shop-right-sidebar.html">Outerwear</a>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-6">
                                        <h4 className="sub-menu-title">Pullovers</h4>
                                        <ul>
                                        <li>
                                            <a href="shop-right-sidebar.html">
                                            Pants &amp; Shorts
                                            </a>
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
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-6">
                                        <h4 className="sub-menu-title">Handbags</h4>
                                        <ul>
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
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-6">
                                        <h4 className="sub-menu-title">Dress Material</h4>
                                        <ul>
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
                                    </div>
                                    </div>
                                </li>
                                <li className="pt-0">
                                    <div className="row row-cols-2">
                                    <div className="banner-botm">
                                        <a href="shop-left-sidebar.html">
                                        <img
                                            className="blur-up lazyload rounded-4"
                                            data-src="assets/images/megamenu/vertical-megamenu-banner2.jpg"
                                            src="assets/images/megamenu/vertical-megamenu-banner2.jpg"
                                            alt="banner"
                                            width="400"
                                            height="150"
                                        />
                                        </a>
                                    </div>
                                    <div className="banner-botm">
                                        <a href="shop-left-sidebar.html">
                                        <img
                                            className="blur-up lazyload rounded-4"
                                            data-src="assets/images/megamenu/vertical-megamenu-banner2.jpg"
                                            src="assets/images/megamenu/vertical-megamenu-banner2.jpg"
                                            alt="banner"
                                            width="400"
                                            height="150"
                                        />
                                        </a>
                                    </div>
                                    </div>
                                </li>
                                </ul>
                            </li>
                            <li className="has-submenu dropdown-in">
                                <a href="#" className="nav-link">
                                Electronics
                                </a>
                                <ul className="dropdown sub-level1 rounded-5 rounded-start-0">
                                <li>
                                    <a href="#;">Accessories</a>
                                </li>
                                <li className="sub-menu">
                                    <a href="#;">Footwear</a>
                                    <ul className="dropdown sub-level2 rounded-5 rounded-start-0">
                                    <li>
                                        <a href="#;">Backpacks</a>
                                    </li>
                                    <li>
                                        <a href="#;">Wallets</a>
                                    </li>
                                    <li>
                                        <a href="#;">Belts</a>
                                    </li>
                                    <li>
                                        <a href="#;">Sunglasses</a>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#;">Bottom wear</a>
                                </li>
                                <li>
                                    <a href="#;">Cargos</a>
                                </li>
                                <li>
                                    <a href="#;">Track pants</a>
                                </li>
                                <li>
                                    <a href="#;">Winter wear</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="nav-link">
                                Cosmetics &amp; Beauty
                                </a>
                            </li>
                          
                            <li>
                                <a href="#" className="nav-link">
                                Smart Phones
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">
                                Furniture
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">
                                Toys &amp; Game
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">
                                Health &amp; Beauty
                                </a>
                            </li>
                           
                            <li>
                                <a href="#" className="nav-link">
                                Health Care
                                </a>
                            </li>
                            <li>
                                <ul className="moreSlideOpen">
                                <li>
                                    <a href="#" className="nav-link">
                                    Watches
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                    Shoes
                                    </a>
                                </li>
                                </ul>
                            </li>
                            </ul>
                            
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-9">
                        {/* Start of Gallery  */}
                        <div className="collection-banner-grid">
                            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1">
                                <div className="collection-banner-item mb-3 mt-md-0">
                                    <div className="row sp-row row-cols-lg-1 row-cols-md-1 row-cols-sm-1 row-cols-1">
                                        <div className="collection-item sp-col large-bnr">
                                            <Link to='shop/11' className="zoom-scal clr-none">
                                                <div className="img">
                                                    <img className="blur-up lazyload w-100" src={axiosClient.Images+'/1007.jpg'} alt="collection" title="" width="646" height="648" />
                                                </div>
                                                <div className="details bottom-right p-lg-0">
                                                    <div className="inner">
                                                        <span className="small-title mb-2 d-block">Clear Black</span>
                                                        <h3 className="title">Sunglass Trends</h3>
                                                        <span className="btn btn-primary btn-md rounded-pill mt-3">Order Now</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="collection-banner-item">
                                    <div className="row sp-row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-2">
                                        <div className="collection-item sp-col">
                                            <Link to='shop/11' className="zoom-scal clr-none">
                                                <div className="img">
                                                    <img className="blur-up lazyload w-100" src={axiosClient.Images+'/1006.jpg'} alt="collection" title="" width="306" height="307" />
                                                </div>
                                                <div className="details bottom-center p-lg-0">
                                                    <div className="inner">
                                                        <span className="btn btn-primary btn-lg text-nowrap">UNISEX SQUARE</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="collection-item sp-col sale-banner">
                                            <Link to='shop/11' className="zoom-scal clr-none">
                                                <div className="img">
                                                    <img className="blur-up lazyload w-100" src={axiosClient.Images+'/1008.jpg'} alt="collection" title="" width="306" height="307" />
                                                </div>
                                                <div className="details middle-center text-center w-100">
                                                    <div className="inner">
                                                        <span className="small-title mb-2 mb-lg-2 d-block text-white text-uppercase">The Best Discount Ever</span>
                                                        <h3 className="title text-white">Sale <br/>70% OFF</h3>
                                                        <span className="btn btn-secondary btn-md mt-3 xs-hide">Shop Now</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>   
                                        <div className="collection-item sp-col">
                                            <Link to='shop/11' className="zoom-scal clr-none">
                                                <div className="img">
                                                    <img className="blur-up lazyload w-100" src={axiosClient.Images+'/1009.jpg'} alt="collection" title="" width="306" height="307" />
                                                </div>
                                                <div className="details bottom-center p-lg-0">
                                                    <div className="inner">
                                                        <span className="btn btn-primary btn-lg text-nowrap">Stylish Glass</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="collection-item sp-col">
                                            <Link to='shop/11' className="zoom-scal clr-none">
                                                <div className="img">
                                                    <img className="blur-up lazyload w-100" src={axiosClient.Images+'/1011.jpg'} alt="collection" title="" width="306" height="307" />
                                                </div>
                                                <div className="details bottom-center p-lg-0">
                                                    <div className="inner">
                                                        <span className="btn btn-primary btn-lg text-nowrap">Antiglare</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End of Gallery  */}
                    </div>
                </div>
            </div>
        </section>             
                    
      
        <section className="section collection-slider section-clr cs_1 irfBg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-sm-12 col-md-12">
                        <div className="section-header">
                            <h2>Shop by Categories</h2>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12">
                        
                            <CategorySlider />
                    
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="section product-slider pb-0">
            <div className="container">
                <div className="section-header">
                    <h2>Top sales this week</h2>
                </div>

                   <ProductSlider />     
  
                <div className="view-collection text-center mt-4 mt-md-5 d-none">
                    <a href="shop-left-sidebar.html" className="btn btn-outline-secondary btn-lg">View Collection</a>
                </div>
            </div>
        </section>

     
        
       
        <div className="section home-instagram">
            <div className="container">
                {/* <div className="section-header style2 d-flex-center justify-content-sm-between">
                    <div className="section-header-left text-start">
                        <h2>Follow Us On Instagram</h2>
                        <p>@Hema Instagram</p>
                    </div>
                    <div className="section-header-right text-start text-sm-end mt-3 mt-sm-0">
                        <a href="#" className="btn btn-primary">View Gallery <i className="icon anm anm-arw-right ms-2"></i></a>
                    </div>
                </div> */}

                
                <div className="instagram-section instagram-grid">
                    <div className="row sp-row row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2">  
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <Link to="shop/14" className="zoom-scal">
                                <img className="blur-up lazyload" src={axiosClient.Images+'/undergarments/romper.jpg'}  alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </Link>
                        </div>
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <Link to="shop/14" className="zoom-scal">
                                <img className="blur-up lazyload" src={axiosClient.Images+'/undergarments/bib.jpg'}  alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </Link>
                        </div>
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <Link to="shop/14" className="zoom-scal">
                                <img className="blur-up lazyload" src={axiosClient.Images+'/undergarments/babyBed.jpg'}  alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </Link>
                        </div>
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <Link to="shop/9" className="zoom-scal">
                                <img className="blur-up lazyload" src={axiosClient.Images+'/undergarments/gloves.jpg'}  alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </Link>
                        </div>
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <Link to="shop/9" className="zoom-scal">
                                <img className="blur-up lazyload" src={axiosClient.Images+'/undergarments/towel.jpg'}  alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </Link>
                        </div>
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <Link to="shop/9" className="zoom-scal">
                                <img className="blur-up lazyload" src={axiosClient.Images+'/undergarments/52.jpg'} alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </Link>
                        </div>
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <Link to="shop/9" className="zoom-scal">
                                <img className="blur-up lazyload" src={axiosClient.Images+'/undergarments/25.jpg'}  alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </Link>
                        </div>
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <Link to="shop/9" className="zoom-scal">
                                <img className="blur-up lazyload" src={axiosClient.Images+'/undergarments/ladiesUnder.jpg'}  alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </Link>
                        </div>
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <Link to="shop/9" className="zoom-scal">
                                <img className="blur-up lazyload" src={axiosClient.Images+'/undergarments/dsox.jpg'}  alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </Link>
                        </div>
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <Link to="shop/9" className="zoom-scal">
                                <img className="blur-up lazyload" src={axiosClient.Images+'/undergarments/leathersocks.jpg'}  alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </Link>
                        </div>
                    </div>
                </div>
                                        
            </div>
        </div>
        

        <section className="section one-banner-section pb-0">
            <div className="container">
                <div className="section-header d-none">
                    <h2>Collection</h2>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <a href="shop-left-sidebar.html" className="bg-size position-relative clr-none irfMin">
                            <img className="bg-img rounded-5 blur-up lazyload" data-src={axiosClient.Images+'/logo/banner.jpg'} src={axiosClient.Images+'/logo/banner.jpg'} alt="collection-banner" title="" width="1320" height="80" />
                            <div className="details middle-center d-flex-justify-center justify-content-center justify-content-md-between flex-column flex-md-row">
                                <span className="text-white text-uppercase text-center text-md-start mb-3 mb-md-0 fw-600">Now These Bestsellers Are BAck in stock Ready for Action!</span>
                                <span className="btn btn-outline-light mt-0 mb-mt-0 sm-mt-2">Shop Now</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="section collection-banners pb-0">
            <div className="container container-1330">                      
                <div className="section-header d-none">
                    <h2>Popular Collection</h2>
                    <p>Our most popular products based on sales. Updated daily.</p>
                </div>

                <div className="collection-banner-grid">
                    <div className="row sp-row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 collection-banner-item">
                            <div className="collection-item sp-col">
                                <Link to="shop/5" className="rounded-5 zoom-scal zoom-scal-nopb clr-none">
                                    <div className="img">
                                        <img className="rounded-5 blur-up lazyload"  src={axiosClient.Images+'/jewellery/j1.jpg'} alt="collection" title="" width="639" height="429" />
                                    </div>
                                    <div className="details middle-right">
                                        <div className="inner">
                                            <h3 className="title">Necklace</h3>
                                            <p className="counts text-small">18 Products</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 collection-banner-item">
                            <div className="collection-item sp-col">
                                <Link to="shop/5" className="rounded-5 zoom-scal zoom-scal-nopb clr-none">
                                    <div className="img">
                                        <img className="rounded-5 blur-up lazyload"  src={axiosClient.Images+'/jewellery/j2.jpg'} alt="collection" title="" width="639" height="429" />
                                    </div>
                                    <div className="details middle-right">
                                        <div className="inner">
                                            <h3 className="title">Rings</h3>
                                            <p className="counts text-small">12 Products</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 collection-banner-item">                                    
                            <div className="collection-item sp-col">
                                <Link to="shop/5" className="rounded-5 zoom-scal zoom-scal-nopb clr-none">
                                    <div className="img">
                                        <img className="rounded-5 blur-up lazyload"  src={axiosClient.Images+'/jewellery/j3.jpg'} alt="collection" title="" width="639" height="429" />
                                    </div>
                                    <div className="details middle-right">
                                        <div className="inner">
                                            <h3 className="title">Earrings</h3>
                                            <p className="counts text-small">17 Products</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       

        <section className="section collection-banners three-one-bnr">
                    <div className="container">                      
                        <div className="collection-banner-grid three-bnr">
                            <div className="row sp-row">
                                <div className="col-12 col-sm-12 col-md-5 col-lg-5 collection-banner-item">
                                    <div className="collection-item sp-col">
                                        <Link to="shop/1" className="zoom-scal clr-none">
                                            <div className="img">
                                            <img className="w-100 blur-up lazyload" src={axiosClient.Images+'/pcat/pcat16.jpg'} alt="collection" title="" width="533" height="447" />
                                            </div>
                                            <div className="details middle-left">
                                                <div className="inner text-left">
                                                    {/* <h3 className="title">Construction <br />Tools</h3> */}
                                                    {/* <p className="counts">25 Products</p> */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>                                
                                </div>
                                <div className="col-12 col-sm-12 col-md-2 col-lg-2 collection-banner-item">
                                    <div className="collection-item sp-col h-100">
                                        <a href="shop-left-sidebar.html" className="zoom-scal clr-none h-100">
                                            <div className="img h-100">
                                                <img className="w-100 h-100 blur-up lazyload" data-src={axiosClient.Images+'/logo/sale.jpg'} src={axiosClient.Images+'/logo/sale.jpg'} alt="collection" title="" width="533" height="447" />
                                            </div>
                                            <div className="details middle-center text-center d-flex-justify-center whiteText offerText w-100 h-100 p-0">
                                                <p className="tex-top text-uppercase m-0">Super Sale</p>
                                                <h3 className="pro-sale m-0"><span className="tex1 d-block">Get 40%</span><span className="tex2 d-block my-2 my-md-0">OFF</span><span className="tex3 d-block">All Products</span></h3>
                                                <p className="tex-bom m-0">Discount Code <span className="code fw-bold m-0 d-block text-uppercase">BEYOND40</span></p>
                                            </div>
                                        </a>
                                    </div>                                
                                </div>
                                <div className="col-12 col-sm-12 col-md-5 col-lg-5 collection-banner-item">
                                    <div className="collection-item sp-col">
                                        <Link to="shop/1" className="zoom-scal clr-none">
                                            <div className="img">
                                                <img className="w-100 blur-up lazyload" src={axiosClient.Images+'/pcat/pcat21.jpg'} alt="collection" title="" width="533" height="447" />
                                            </div>
                                            <div className="details middle-right">
                                                <div className="inner text-left">
                                                    {/* <h3 className="title">Garden <br />Tools</h3> */}
                                                    {/* <p className="counts">12 Products</p> */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </div>
    <ToastContainer />
  {/* <Outlet /> */}
  </>
)
}

export default HomePage;