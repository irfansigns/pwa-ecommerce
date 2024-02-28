import React, {useEffect , useState} from "react"
import Slider from "react-slick";
import axios from 'axios';
import { Link } from 'react-router-dom';
import AppURL from '../../AppURL';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assets/css/cascade.css'


const ProductSlider = () => {

    

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        className:'grid-products product-slider-4items gp15 arwOut5 hov-arrow',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    
    return (
        
        <Slider {...settings}>
        <div className="item col-item" style="width: 100%; display: inline-block;">
                                <div className="product-box">
                                    
                                    <div className="product-image">
                                      
                                        <a href="product-layout1.html" className="product-img" tabIndex="0">
                                          
                                            <img className="primary blur-up lazyloaded" data-src="assets/images/products/cosmetic-product2.jpg" src={AppURL.Images+'/1011.jpg'} alt="Product" title="Product" width="625" height="703" />
                                          
                                            <img className="hover blur-up lazyloaded" data-src="assets/images/products/cosmetic-product2-1.jpg" src={AppURL.Images+'/1009.jpg'} alt="Product" title="Product" width="625" height="703" />
                                           
                                        </a>
                                       
                                        <div className="button-set style2">
                                           
                                            <a href="#quickshop-modal" className="btn-icon addtocart quick-shop-modal" data-bs-toggle="modal" data-bs-target="#quickshop_modal" tabIndex="0">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Select Options"><i className="icon anm anm-cart-l"></i><span className="text">Select Options</span></span>
                                            </a>
                                          
                                            <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal" tabIndex="0">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"><i className="icon anm anm-search-plus-l"></i><span className="text">Quick View</span></span>
                                            </a>
                                          
                                            <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Wishlist" tabIndex="0"><i className="icon anm anm-heart-l"></i><span className="text">Add To Wishlist</span></a>
                                          
                                            <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Compare" tabIndex="0"><i className="icon anm anm-random-r"></i><span className="text">Add to Compare</span></a>
                                            
                                        </div>
                                       
                                    </div>
                                  
                                    <div className="product-details text-center">
                                     
                                        <div className="product-name">
                                            <a href="product-layout1.html" tabIndex="0">Ditsy Floral Makeup</a>
                                        </div>
                                      
                                        <div className="product-price">
                                            <span className="price">$128.00</span>
                                        </div>
                                        
                                        <div className="product-review">
                                            <i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i>
                                            <span className="caption hidden ms-1">8 Reviews</span>
                                        </div>
                                        
                                    </div>
                                   
                                </div>
                            </div>

                            <div className="item col-item" style="width: 100%; display: inline-block;">
                                <div className="product-box">
                                    
                                    <div className="product-image">
                                      
                                        <a href="product-layout1.html" className="product-img" tabIndex="0">
                                          
                                            <img className="primary blur-up lazyloaded" data-src="assets/images/products/cosmetic-product2.jpg" src={AppURL.Images+'/1011.jpg'} alt="Product" title="Product" width="625" height="703" />
                                          
                                            <img className="hover blur-up lazyloaded" data-src="assets/images/products/cosmetic-product2-1.jpg" src={AppURL.Images+'/1009.jpg'} alt="Product" title="Product" width="625" height="703" />
                                           
                                        </a>
                                       
                                        <div className="button-set style2">
                                           
                                            <a href="#quickshop-modal" className="btn-icon addtocart quick-shop-modal" data-bs-toggle="modal" data-bs-target="#quickshop_modal" tabIndex="0">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Select Options"><i className="icon anm anm-cart-l"></i><span className="text">Select Options</span></span>
                                            </a>
                                          
                                            <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal" tabIndex="0">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"><i className="icon anm anm-search-plus-l"></i><span className="text">Quick View</span></span>
                                            </a>
                                          
                                            <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Wishlist" tabIndex="0"><i className="icon anm anm-heart-l"></i><span className="text">Add To Wishlist</span></a>
                                          
                                            <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Compare" tabIndex="0"><i className="icon anm anm-random-r"></i><span className="text">Add to Compare</span></a>
                                            
                                        </div>
                                       
                                    </div>
                                  
                                    <div className="product-details text-center">
                                     
                                        <div className="product-name">
                                            <a href="product-layout1.html" tabIndex="0">Ditsy Floral Makeup</a>
                                        </div>
                                      
                                        <div className="product-price">
                                            <span className="price">$128.00</span>
                                        </div>
                                        
                                        <div className="product-review">
                                            <i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i>
                                            <span className="caption hidden ms-1">8 Reviews</span>
                                        </div>
                                        
                                    </div>
                                   
                                </div>
                            </div>

                            <div className="item col-item" style="width: 100%; display: inline-block;">
                                <div className="product-box">
                                    
                                    <div className="product-image">
                                      
                                        <a href="product-layout1.html" className="product-img" tabIndex="0">
                                          
                                            <img className="primary blur-up lazyloaded" data-src="assets/images/products/cosmetic-product2.jpg" src={AppURL.Images+'/1011.jpg'} alt="Product" title="Product" width="625" height="703" />
                                          
                                            <img className="hover blur-up lazyloaded" data-src="assets/images/products/cosmetic-product2-1.jpg" src={AppURL.Images+'/1009.jpg'} alt="Product" title="Product" width="625" height="703" />
                                           
                                        </a>
                                       
                                        <div className="button-set style2">
                                           
                                            <a href="#quickshop-modal" className="btn-icon addtocart quick-shop-modal" data-bs-toggle="modal" data-bs-target="#quickshop_modal" tabIndex="0">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Select Options"><i className="icon anm anm-cart-l"></i><span className="text">Select Options</span></span>
                                            </a>
                                          
                                            <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal" tabIndex="0">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"><i className="icon anm anm-search-plus-l"></i><span className="text">Quick View</span></span>
                                            </a>
                                          
                                            <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Wishlist" tabIndex="0"><i className="icon anm anm-heart-l"></i><span className="text">Add To Wishlist</span></a>
                                          
                                            <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Compare" tabIndex="0"><i className="icon anm anm-random-r"></i><span className="text">Add to Compare</span></a>
                                            
                                        </div>
                                       
                                    </div>
                                  
                                    <div className="product-details text-center">
                                     
                                        <div className="product-name">
                                            <a href="product-layout1.html" tabIndex="0">Ditsy Floral Makeup</a>
                                        </div>
                                      
                                        <div className="product-price">
                                            <span className="price">$128.00</span>
                                        </div>
                                        
                                        <div className="product-review">
                                            <i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i>
                                            <span className="caption hidden ms-1">8 Reviews</span>
                                        </div>
                                        
                                    </div>
                                   
                                </div>
                            </div>

                            <div className="item col-item" style="width: 100%; display: inline-block;">
                                <div className="product-box">
                                    
                                    <div className="product-image">
                                      
                                        <a href="product-layout1.html" className="product-img" tabIndex="0">
                                          
                                            <img className="primary blur-up lazyloaded" data-src="assets/images/products/cosmetic-product2.jpg" src={AppURL.Images+'/1011.jpg'} alt="Product" title="Product" width="625" height="703" />
                                          
                                            <img className="hover blur-up lazyloaded" data-src="assets/images/products/cosmetic-product2-1.jpg" src={AppURL.Images+'/1009.jpg'} alt="Product" title="Product" width="625" height="703" />
                                           
                                        </a>
                                       
                                        <div className="button-set style2">
                                           
                                            <a href="#quickshop-modal" className="btn-icon addtocart quick-shop-modal" data-bs-toggle="modal" data-bs-target="#quickshop_modal" tabIndex="0">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Select Options"><i className="icon anm anm-cart-l"></i><span className="text">Select Options</span></span>
                                            </a>
                                          
                                            <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal" tabIndex="0">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"><i className="icon anm anm-search-plus-l"></i><span className="text">Quick View</span></span>
                                            </a>
                                          
                                            <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Wishlist" tabIndex="0"><i className="icon anm anm-heart-l"></i><span className="text">Add To Wishlist</span></a>
                                          
                                            <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Compare" tabIndex="0"><i className="icon anm anm-random-r"></i><span className="text">Add to Compare</span></a>
                                            
                                        </div>
                                       
                                    </div>
                                  
                                    <div className="product-details text-center">
                                     
                                        <div className="product-name">
                                            <a href="product-layout1.html" tabIndex="0">Ditsy Floral Makeup</a>
                                        </div>
                                      
                                        <div className="product-price">
                                            <span className="price">$128.00</span>
                                        </div>
                                        
                                        <div className="product-review">
                                            <i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i>
                                            <span className="caption hidden ms-1">8 Reviews</span>
                                        </div>
                                        
                                    </div>
                                   
                                </div>
                            </div>

                            <div className="item col-item" style="width: 100%; display: inline-block;">
                                <div className="product-box">
                                    
                                    <div className="product-image">
                                      
                                        <a href="product-layout1.html" className="product-img" tabIndex="0">
                                          
                                            <img className="primary blur-up lazyloaded" data-src="assets/images/products/cosmetic-product2.jpg" src={AppURL.Images+'/1011.jpg'} alt="Product" title="Product" width="625" height="703" />
                                          
                                            <img className="hover blur-up lazyloaded" data-src="assets/images/products/cosmetic-product2-1.jpg" src={AppURL.Images+'/1009.jpg'} alt="Product" title="Product" width="625" height="703" />
                                           
                                        </a>
                                       
                                        <div className="button-set style2">
                                           
                                            <a href="#quickshop-modal" className="btn-icon addtocart quick-shop-modal" data-bs-toggle="modal" data-bs-target="#quickshop_modal" tabIndex="0">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Select Options"><i className="icon anm anm-cart-l"></i><span className="text">Select Options</span></span>
                                            </a>
                                          
                                            <a href="#quickview-modal" className="btn-icon quickview quick-view-modal" data-bs-toggle="modal" data-bs-target="#quickview_modal" tabIndex="0">
                                                <span className="icon-wrap d-flex-justify-center h-100 w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"><i className="icon anm anm-search-plus-l"></i><span className="text">Quick View</span></span>
                                            </a>
                                          
                                            <a href="wishlist-style2.html" className="btn-icon wishlist" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Wishlist" tabIndex="0"><i className="icon anm anm-heart-l"></i><span className="text">Add To Wishlist</span></a>
                                          
                                            <a href="compare-style2.html" className="btn-icon compare" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Compare" tabIndex="0"><i className="icon anm anm-random-r"></i><span className="text">Add to Compare</span></a>
                                            
                                        </div>
                                       
                                    </div>
                                  
                                    <div className="product-details text-center">
                                     
                                        <div className="product-name">
                                            <a href="product-layout1.html" tabIndex="0">Ditsy Floral Makeup</a>
                                        </div>
                                      
                                        <div className="product-price">
                                            <span className="price">$128.00</span>
                                        </div>
                                        
                                        <div className="product-review">
                                            <i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i>
                                            <span className="caption hidden ms-1">8 Reviews</span>
                                        </div>
                                        
                                    </div>
                                   
                                </div>
                            </div>
        </Slider>
       
    )
}

export default ProductSlider
