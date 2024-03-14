import React, { useState, useEffect, useContext } from 'react'
import Slider from "react-slick";
import axios from 'axios';
import { Link } from 'react-router-dom';
import AppURL from '../../AppURL';
import { productContext } from "../../global/productContext";
// import { cartContext } from "../global/cartContext";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assets/css/cascade.css'


const ProductSlider = () => {

    const {products} = useContext(productContext);
    // console.log(products);
    const userView = products.map((product,key)=>{
        return(
          <>
           
           <div className="item col-item" style={{ width: '100%', display: 'inline-block' }}>
                <div className="product-box">
                    
                    <div className="product-image">
                    
                        <Link to={"/details/"+product.id} className="product-img" tabIndex="0">
                        
                            <img className="primary blur-up lazyloaded"  src={AppURL.Images+'/'+product.i_path} alt="Product" title="Product" width="625" height="703" />
                        
                            <img className="hover blur-up lazyloaded"  src={AppURL.Images+'/'+product.i_path} alt="Product" title="Product" width="625" height="703" />
                        
                        </Link>
                    
                        
                    </div>
                
                    <div className="product-details text-center">
                    
                        <div className="product-name">
                            <a href="product-layout1.html" tabIndex="0">{product.pname}</a>
                        </div>
                    
                        <div className="product-price">
                            <span className="price">Rs.{product.price}</span>
                        </div>
                        
                    </div>
                
                </div>
            </div>

           
          </>
        )
      })
    

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
            
            {userView}
        </Slider>
       
    )
}

export default ProductSlider
