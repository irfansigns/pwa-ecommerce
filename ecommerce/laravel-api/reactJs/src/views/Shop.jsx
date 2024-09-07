import React, { useState, useEffect, useContext } from 'react'
import { Link , useParams } from 'react-router-dom'
import { productContext } from "../context/productContext"
import { cartContext } from "../context/cartContext";
import axiosClient from '../axiosClient';


const Shop =(props)=>{    
    const [Items, setItems] = useState([]);
    const { products, categories, dispatch } = useContext(productContext); // Destructure dispatch here
    const { dispatch: cartDispatch } = useContext(cartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    const [loading, setLoading] = useState(true);
    
    const params = useParams();


    useEffect(() => {
        if (params.code) {
            setLoading(true);
            console.log(params.code);
            axiosClient.Categories(params.code)
                .then(response => {
                    dispatch({ type: 'ADD_MORE_PRODUCTS', payload: response.data });
                    setLoading(false); // Set loading to false once data is fetched
                    // console.dir(products);
                })
                .catch(error => console.error("Failed to fetch more products:", error));
        }
    }, [params]);
  

    useEffect(() => {
        if (!loading) {
            const newProducts = products.filter(product => product.category_id == params.code);
            // const newProducts = products[products.length - 1];
            // console.log(newProducts);
            console.dir(products);
            setItems(newProducts);
            
        }
    }, [loading]);

    

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
      };
    
      if(!categories){
        return(
          <>
          <h4>Loading</h4>
          </>
        )
      }else{
        const brands = categories.map((cats,key)=>{
          if(cats.dept==2){
          return (
            // <li className="mb-2"><Link className="reset-anchor" to={'/shop/'+ cats.id }>{cats.cname}</Link></li>
            <li className="lvl1 more-item"><Link to={'/shop/'+ cats.id } className="site-nav">{cats.cname} <span className="count">(14)</span></Link></li>
          )}
        });
    
        const names = categories.map((ecat,key)=>{
          if(ecat.dept=='1'){
          return (
            // <li className="mb-2"><Link className="reset-anchor" to={`/shop/${ ecat.id }`}>{ecat.cname}</Link></li>
            <li className="lvl1 more-item"><Link to={`/shop/${ ecat.id }`} className="site-nav">{ecat.cname} <span className="count">(14)</span></Link></li>
          )}
        });
    
        const arts = categories.map((mcat,key)=>{
            if(mcat.dept=='3'){
            return (
              // <li className="mb-2"><Link className="reset-anchor" to={`/shop/${ ecat.id }`}>{ecat.cname}</Link></li>
              <li className="lvl1 more-item"><Link to={`/shop/${ mcat.id }`} className="site-nav">{mcat.cname} <span className="count">(14)</span></Link></li>
            )}
        });
    
        
    
        let ProductList = Items;
        if(!params.code){
          ProductList = products;
        }
        const userView = ProductList.map((product,key)=>{
          return(
            <>
             <div className="item col-item">
                                            <div className="product-box">
                                                
                                                <div className="product-image">
                                                  
                                                    <Link to={"/details/"+product.id} className="product-img rounded-0"><img className="rounded-0 blur-up lazyload" src={axiosClient.Images+product.i_path} alt="Product" title="Product" width="625" height="808" /></Link>
                                                   
                                                    {/* <div className="product-labels"><span className="lbl on-sale">Sale</span></div> */}
                                                   
                                                    <div className="saleTime" data-countdown="2025/01/01"></div>
                                                   
                                                    <div className="button-set style1">
                                                       
                                                        <a href="#quickshop-modal" onClick={() => cartDispatch({type: 'ADD_TO_CART', id: product.id, products})} className="btn-icon addtocart quick-shop-modal" data-bs-toggle="modal" data-bs-target="#quickshop_modal">
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick Shop"><i className="icon anm anm-cart-l"></i><span className="text">Quick Shop</span></span>
                                                        </a>
                                                      
                                                        <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal" onClick={() => handleProductClick(product)}>
                                                            <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="icon anm anm-search-plus-l"></i><span className="text">Quick View</span></span>
                                                        </a>
                                                       
                                                        <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist"><i className="icon anm anm-heart-l"></i><span className="text">Add To Wishlist</span></a>
                                                       
                                                        <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="icon anm anm-random-r"></i><span className="text">Add to Compare</span></a>
                                                      
                                                    </div>
                                                    
                                                </div>
                                               
                                                <div className="product-details text-center">
                                                                                                
                                                    <div className="product-name">
                                                        <a href="product-layout1.html">{product.pname}</a>
                                                    </div>
                                                  
                                                    <div className="product-price">
                                                        <span className="price old-price">Rs.{product.price * 1.25}</span><span className="price">Rs.{product.price}</span>
                                                    </div>
                                                  
                                                   
                                                   
                                                    <p className="sort-desc hidden">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage...</p>
                                                    
                                                    
                                                   
                                                    <div className="button-action hidden">
                                                        <div className="addtocart-btn">
                                                            <form className="addtocart" action="#" method="post">
                                                                <a href="#quickshop-modal" className="btn btn-md quick-shop quick-shop-modal" data-bs-toggle="modal" data-bs-target="#quickshop_modal">
                                                                    <i className="icon anm anm-cart-l me-2"></i><span className="text">Quick Shop</span>
                                                                </a>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>
            </>
          )
        })
    
        
    
    return(
      <>
      <div id="page-content">
        <div className="page-header text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center">
                        <div className="page-title">
                            <h1>Shop Left Sidebar</h1>
                        </div>
                        <div className="breadcrumbs">
                            <a href="index.html" title="Back to the home page">Home</a>
                            <span className="title">
                                <i className="icon anm anm-angle-right-l"></i>Shop
                            </span>
                            <span className="main-title">
                                <i className="icon anm anm-angle-right-l"></i>Shop Left Sidebar
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 sidebar sidebar-bg filterbar">
                    <div className="closeFilter d-block d-lg-none">
                        <i className="icon anm anm-times-r"></i>
                    </div>
                    <div className="sidebar-tags sidebar-sticky clearfix">
                        <div className="sidebar-widget clearfix categories filterBox filter-widget">
                            <div className="widget-title">
                                <h2>Categories</h2>
                            </div>
                            <div className="widget-content filterDD">
                                <ul className="sidebar-categories scrollspy morelist clearfix">
                                {names}
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-widget clearfix categories filterBox filter-widget">
                            <div className="widget-title">
                                <h2>Categories</h2>
                            </div>
                            <div className="widget-content filterDD">
                                <ul className="sidebar-categories scrollspy morelist clearfix">
                                {brands}
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-widget static-banner p-0">
                            <a href="shop-left-sidebar.html">
                                <img
                                    className="rounded-0 blur-up lazyload"
                                    data-src="assets/images/banners/shop-banner.jpg"
                                    src="assets/images/banners/shop-banner.jpg"
                                    alt="image"
                                    width="300"
                                    height="370"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-9 main-col">
                    <div className="grid-products grid-view-items">
                        <div className="row col-row product-options row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2">
                           
                            {userView}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    {/* Quick View Modal  */}
    {isModalOpen && (
    <div className="quickview-modal modal fade" id="quickview_modal" tabIndex="-1" style={{ display: 'none' }} aria-hidden="true">           
          <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                  <div className="modal-body">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      <div className="row">
                          <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-3 mb-md-0">
                             
                              <div id="quickView" className="carousel slide">
                                 
                                  <div className="carousel-inner">
                                      <div className="item carousel-item active" data-bs-slide-number="0">
                                          <img className="rounded-0 blur-up lazyloaded" data-src={axiosClient.Images+"/1011.jpg"} src={axiosClient.Images+"/1011.jpg"} alt="product" title="Product" width="625" height="808" />
                                      </div>
                                      <div className="item carousel-item" data-bs-slide-number="1">
                                          <img className="rounded-0 blur-up lazyload" data-src={axiosClient.Images+"/1011.jpg"} src={axiosClient.Images+"/1011.jpg"} alt="product" title="Product" width="625" height="808" />
                                      </div>
                                      <div className="item carousel-item" data-bs-slide-number="2">
                                          <img className="rounded-0 blur-up lazyload" data-src={axiosClient.Images+"/1011.jpg"} src={axiosClient.Images+"/1011.jpg"} alt="product" title="Product" width="625" height="808" />
                                      </div>
                                      <div className="item carousel-item" data-bs-slide-number="3">
                                          <img className="rounded-0 blur-up lazyload" data-src={axiosClient.Images+"/1011.jpg"} src={axiosClient.Images+"/1011.jpg"} alt="product" title="Product" width="625" height="808" />
                                      </div>
                                      <div className="item carousel-item" data-bs-slide-number="4">
                                          <img className="rounded-0 blur-up lazyload" data-src={axiosClient.Images+"/1011.jpg"} src={axiosClient.Images+"/1011.jpg"} alt="product" title="Product" width="625" height="808" />
                                      </div>
                                      <div className="item carousel-item" data-bs-slide-number="5">
                                          <img className="rounded-0 blur-up lazyload" data-src={axiosClient.Images+"/1011.jpg"} src={axiosClient.Images+"/1011.jpg"} alt="product" title="Product" width="625" height="808" />
                                      </div>
                                  </div>
                                 
                                  <div className="model-thumbnail-img">
                                      
                                      <div className="carousel-indicators list-inline">
                                          <div className="list-inline-item active" id="carousel-selector-0" data-bs-slide-to="0" data-bs-target="#quickView">
                                              <img className="rounded-0 blur-up lazyloaded" src={axiosClient.Images+"/1001.jpg"} alt="product" title="Product" width="625" height="808" />
                                          </div>
                                          <div className="list-inline-item" id="carousel-selector-1" data-bs-slide-to="1" data-bs-target="#quickView">
                                              <img className="rounded-0 blur-up lazyloaded" src={axiosClient.Images+"/1001.jpg"} alt="product" title="Product" width="625" height="808" />
                                          </div>
                                          <div className="list-inline-item" id="carousel-selector-2" data-bs-slide-to="2" data-bs-target="#quickView">
                                              <img className="rounded-0 blur-up lazyloaded" src={axiosClient.Images+"/1001.jpg"} alt="product" title="Product" width="625" height="808" />
                                          </div>
                                          <div className="list-inline-item" id="carousel-selector-3" data-bs-slide-to="3" data-bs-target="#quickView">
                                              <img className="rounded-0 blur-up lazyloaded" src={axiosClient.Images+"/1001.jpg"} alt="product" title="Product" width="625" height="808" />
                                          </div>
                                          <div className="list-inline-item" id="carousel-selector-4" data-bs-slide-to="4" data-bs-target="#quickView">
                                              <img className="rounded-0 blur-up lazyloaded" src={axiosClient.Images+"/1001.jpg"} alt="product" title="Product" width="625" height="808" />
                                          </div>
                                          <div className="list-inline-item" id="carousel-selector-5" data-bs-slide-to="5" data-bs-target="#quickView">
                                              <img className="rounded-0 blur-up lazyloaded" src={axiosClient.Images+"/1001.jpg"} alt="product" title="Product" width="625" height="808" />
                                          </div>
                                      </div>
                                     
                                      <a className="carousel-control-prev carousel-arrow rounded-1" href="#quickView" data-bs-target="#quickView" data-bs-slide="prev"><i className="icon anm anm-angle-left-r"></i></a>
                                      <a className="carousel-control-next carousel-arrow rounded-1" href="#quickView" data-bs-target="#quickView" data-bs-slide="next"><i className="icon anm anm-angle-right-r"></i></a>
                                   
                                  </div>
                                
                              </div>
                             
                              <div className="text-center mt-3"><a href="product-layout1.html" className="text-link">View More Details</a></div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                              <div className="product-arrow d-flex justify-content-between">
                                  <h2 className="product-title">{selectedProduct.pname}</h2>
                              </div>
                              <div className="product-review d-flex mt-0 mb-2">
                                  <div className="rating"><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i></div>
                                  <div className="reviews ms-2"><a href="#">6 Reviews</a></div>
                              </div>
                              <div className="product-info">
                                  <p className="product-vendor">Vendor:<span className="text"><a href="#">HVL</a></span></p>  
                                  <p className="product-sku">SKU:<span className="text">RF104</span></p>
                              </div>
                              <div className="pro-stockLbl my-2">
                                  <span className="d-flex-center stockLbl instock d-none"><span> In stock</span></span>
                                  <span className="d-flex-center stockLbl preorder d-none"><span> Pre-order Now</span></span>
                                  <span className="d-flex-center stockLbl outstock d-none"><span>Sold out</span></span>
                              </div>
                              <div className="product-price d-flex-center my-3">
                                  <span className="price old-price">Rs.{selectedProduct.price * 1.25}</span><span className="price">Rs.{selectedProduct.price}</span>
                              </div>
                              <div className="sort-description">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
                              <form method="post" action="#" id="product_form--option" className="product-form">
                                  <div className="product-options d-flex-wrap">
                                      <div className="product-action d-flex-wrap w-100 pt-1 mb-3 clearfix">
                                          <div className="quantity">
                                              {/* Qty */}
                                          </div>                                
                                          <div className="addtocart ms-3 fl-1">
                                              <button type="submit" name="add" className="btn product-cart-submit w-100"><span>Add to cart</span></button>
                                              <button type="submit" name="sold" className="btn btn-secondary product-sold-out w-100 d-none" disabled="disabled"><span>Sold out</span></button>
                                              <button type="submit" name="buy" className="btn btn-secondary proceed-to-checkout w-100 d-none"><span>Buy it now</span></button>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                              <div className="wishlist-btn d-flex-center">
                                  <a className="add-wishlist d-flex-center me-3" href="wishlist-style1.html" title="Add to Wishlist"><i className="icon anm anm-heart-l me-1"></i> <span>Add to Wishlist</span></a>
                                  <a className="add-compare d-flex-center" href="compare-style1.html" title="Add to Compare"><i className="icon anm anm-random-r me-2"></i> <span>Add to Compare</span></a>
                              </div>
                           
                              <div className="social-sharing share-icon d-flex-center mx-0 mt-3">
                                  <span className="sharing-lbl">Share :</span>
                                  <a href="#" className="d-flex-center btn btn-link btn--share share-facebook" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Share on Facebook"><i className="icon anm anm-facebook-f"></i><span className="share-title d-none">Facebook</span></a>
                                  <a href="#" className="d-flex-center btn btn-link btn--share share-twitter" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Tweet on Twitter"><i className="icon anm anm-twitter"></i><span className="share-title d-none">Tweet</span></a>
                                  <a href="#" className="d-flex-center btn btn-link btn--share share-pinterest" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Pin on Pinterest"><i className="icon anm anm-pinterest-p"></i> <span className="share-title d-none">Pin it</span></a>
                                  <a href="#" className="d-flex-center btn btn-link btn--share share-linkedin" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Share on Instagram"><i className="icon anm anm-linkedin-in"></i><span className="share-title d-none">Instagram</span></a>
                                  <a href="#" className="d-flex-center btn btn-link btn--share share-whatsapp" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Share on WhatsApp"><i className="icon anm anm-envelope-l"></i><span className="share-title d-none">WhatsApp</span></a>
                                  <a href="#" className="d-flex-center btn btn-link btn--share share-email" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Share by Email"><i className="icon anm anm-whatsapp"></i><span className="share-title d-none">Email</span></a>
                              </div>
                             
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    
    )}
    {/* End of Quick View Modal  */}
     </>
    )}
    }
    
    export default Shop;
    


















  
//   return(
//     <>
            
            
//             {loading ? <p>Loading...</p> : Items.map((product,key)=>{
//                 return(
//                 <>
//                     <p>{product.pname}</p><br />
//                 </>
//                 )
//             })}
//     </>
//   )
// }

// export default Shop;
