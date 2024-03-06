import React, {useContext , useState, useEffect} from 'react';
import { productContext } from "../global/productContext";
import { cartContext } from "../global/cartContext";
import AppURL from '../AppURL';
import { Link } from 'react-router-dom'
import ProductSlider from '../components/Slider/ProductSlider';
import CategorySlider from '../components/Slider/CategorySlider';

const HomePage1 =()=>{

    const {products} = useContext(productContext);

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
                
        <section className="section collection-banners four-one-bnr">
            <div className="container">                      
                <div className="section-header d-none">
                    <h2>Explore All Department</h2>
                    <p>There are many variations passages Lorem Ipsum available majority</p>
                </div>

                <div className="collection-banner-grid">
                    <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1">
                        <div className="collection-banner-item mb-3 mt-md-0">
                            <div className="row sp-row row-cols-lg-1 row-cols-md-1 row-cols-sm-1 row-cols-1">
                                <div className="collection-item sp-col large-bnr">
                                    <Link to='shop/11' className="zoom-scal clr-none">
                                        <div className="img">
                                            <img className="blur-up lazyload w-100" src={AppURL.Images+'/1007.jpg'} alt="collection" title="" width="646" height="648" />
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
                                            <img className="blur-up lazyload w-100" src={AppURL.Images+'/1006.jpg'} alt="collection" title="" width="306" height="307" />
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
                                            <img className="blur-up lazyload w-100" src={AppURL.Images+'/1008.jpg'} alt="collection" title="" width="306" height="307" />
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
                                            <img className="blur-up lazyload w-100" src={AppURL.Images+'/1009.jpg'} alt="collection" title="" width="306" height="307" />
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
                                            <img className="blur-up lazyload w-100" src={AppURL.Images+'/1011.jpg'} alt="collection" title="" width="306" height="307" />
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
                                <a href="shop-left-sidebar.html" className="rounded-5 zoom-scal zoom-scal-nopb clr-none">
                                    <div className="img">
                                        <img className="rounded-5 blur-up lazyload" src={AppURL.Images+'/jewellery/j1.jpg'} src={AppURL.Images+'/jewellery/j1.jpg'} alt="collection" title="" width="639" height="429" />
                                    </div>
                                    <div className="details middle-right">
                                        <div className="inner">
                                            <h3 className="title">Necklace</h3>
                                            <p className="counts text-small">18 Products</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 collection-banner-item">
                            <div className="collection-item sp-col">
                                <a href="shop-left-sidebar.html" className="rounded-5 zoom-scal zoom-scal-nopb clr-none">
                                    <div className="img">
                                        <img className="rounded-5 blur-up lazyload" src={AppURL.Images+'/jewellery/j2.jpg'} src={AppURL.Images+'/jewellery/j2.jpg'} alt="collection" title="" width="639" height="429" />
                                    </div>
                                    <div className="details middle-right">
                                        <div className="inner">
                                            <h3 className="title">Rings</h3>
                                            <p className="counts text-small">12 Products</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 collection-banner-item">                                    
                            <div className="collection-item sp-col">
                                <a href="shop-left-sidebar.html" className="rounded-5 zoom-scal zoom-scal-nopb clr-none">
                                    <div className="img">
                                        <img className="rounded-5 blur-up lazyload" src={AppURL.Images+'/jewellery/j3.jpg'} src={AppURL.Images+'/jewellery/j3.jpg'} alt="collection" title="" width="639" height="429" />
                                    </div>
                                    <div className="details middle-right">
                                        <div className="inner">
                                            <h3 className="title">Earrings</h3>
                                            <p className="counts text-small">17 Products</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       
        <section className="section one-banner-section pb-0">
            <div className="container">
                <div className="section-header d-none">
                    <h2>Collection</h2>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <a href="shop-left-sidebar.html" className="bg-size position-relative clr-none irfMin">
                            <img className="bg-img rounded-5 blur-up lazyload" data-src={AppURL.Images+'/logo/banner.jpg'} src={AppURL.Images+'/logo/banner.jpg'} alt="collection-banner" title="" width="1320" height="80" />
                            <div className="details middle-center d-flex-justify-center justify-content-center justify-content-md-between flex-column flex-md-row">
                                <span className="text-white text-uppercase text-center text-md-start mb-3 mb-md-0 fw-600">Now These Bestsellers Are BAck in stock Ready for Action!</span>
                                <span className="btn btn-outline-light mt-0 mb-mt-0 sm-mt-2">Shop Now</span>
                            </div>
                        </a>
                    </div>
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
                            <a href="#;" className="zoom-scal">
                                <img className="blur-up lazyload" src={AppURL.Images+'/undergarments/romper.jpg'}  alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </a>
                        </div>
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <a href="#;" className="zoom-scal">
                                <img className="blur-up lazyload" src={AppURL.Images+'/undergarments/bib.jpg'}  alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </a>
                        </div>
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <a href="#;" className="zoom-scal">
                                <img className="blur-up lazyload" src={AppURL.Images+'/undergarments/babyBed.jpg'}  alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </a>
                        </div>
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <a href="#;" className="zoom-scal">
                                <img className="blur-up lazyload" src={AppURL.Images+'/undergarments/gloves.jpg'}  alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </a>
                        </div>
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <a href="#;" className="zoom-scal">
                                <img className="blur-up lazyload" src={AppURL.Images+'/undergarments/towel.jpg'}  alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </a>
                        </div>
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <a href="#;" className="zoom-scal">
                                <img className="blur-up lazyload" src={AppURL.Images+'/undergarments/52.jpg'} alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </a>
                        </div>
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <a href="#;" className="zoom-scal">
                                <img className="blur-up lazyload" src={AppURL.Images+'/undergarments/25.jpg'}  alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </a>
                        </div>
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <a href="#;" className="zoom-scal">
                                <img className="blur-up lazyload" src={AppURL.Images+'/undergarments/ladiesUnder.jpg'}  alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </a>
                        </div>
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <a href="#;" className="zoom-scal">
                                <img className="blur-up lazyload" src={AppURL.Images+'/undergarments/dsox.jpg'}  alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </a>
                        </div>
                        <div className="instagram-item sp-col" style={{ border: '1px solid #D3D3D3' }}>
                            <a href="#;" className="zoom-scal">
                                <img className="blur-up lazyload" src={AppURL.Images+'/undergarments/leathersocks.jpg'}  alt="image" width="310" height="310" />
                                <span className="ins-icon d-flex-justify-center"><i className="icon anm anm-instagram"></i></span>
                            </a>
                        </div>
                    </div>
                </div>
                                        
            </div>
        </div>
        
       

                <section className="section collection-banners three-one-bnr">
                    <div className="container">                      
                        <div className="collection-banner-grid three-bnr">
                            <div className="row sp-row">
                                <div className="col-12 col-sm-12 col-md-5 col-lg-5 collection-banner-item">
                                    <div className="collection-item sp-col">
                                        <a href="shop-left-sidebar.html" className="zoom-scal clr-none">
                                            <div className="img">
                                            <img className="w-100 blur-up lazyload" src={AppURL.Images+'/pcat/pcat16.jpg'} alt="collection" title="" width="533" height="447" />
                                            </div>
                                            <div className="details middle-left">
                                                <div className="inner text-left">
                                                    {/* <h3 className="title">Construction <br />Tools</h3> */}
                                                    {/* <p className="counts">25 Products</p> */}
                                                </div>
                                            </div>
                                        </a>
                                    </div>                                
                                </div>
                                <div className="col-12 col-sm-12 col-md-2 col-lg-2 collection-banner-item">
                                    <div className="collection-item sp-col h-100">
                                        <a href="shop-left-sidebar.html" className="zoom-scal clr-none h-100">
                                            <div className="img h-100">
                                                <img className="w-100 h-100 blur-up lazyload" data-src={AppURL.Images+'/logo/sale.jpg'} src={AppURL.Images+'/logo/sale.jpg'} alt="collection" title="" width="533" height="447" />
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
                                        <a href="shop-left-sidebar.html" className="zoom-scal clr-none">
                                            <div className="img">
                                                <img className="w-100 blur-up lazyload" src={AppURL.Images+'/pcat/pcat21.jpg'} alt="collection" title="" width="533" height="447" />
                                            </div>
                                            <div className="details middle-right">
                                                <div className="inner text-left">
                                                    {/* <h3 className="title">Garden <br />Tools</h3> */}
                                                    {/* <p className="counts">12 Products</p> */}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
               
        

    </div>
    
  {/* <Outlet /> */}
  </>
)
}

export default HomePage1;
