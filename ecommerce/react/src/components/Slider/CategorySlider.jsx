import React, {useEffect , useState} from "react"
import Slider from "react-slick";
import axios from 'axios';
import { Link } from 'react-router-dom';
import AppURL from '../../AppURL';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assets/css/cascade.css'


const CategorySlider = () => {

    const categoryItemStyle = {
        position: 'relative',
        border: '5px solid #fff'
    };
      
    

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        className:'collection-slider-4items gp15 arwOut5 hov-arrow dots-hide slick-slider',
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
        <div className="category-item irfCt zoomscal-hov" style={categoryItemStyle}>
            <a href="shop-left-sidebar.html" className="category-link clr-none">
                <div className="zoom-scal zoom-scal-nopb"><img className="blur-up lazyload" data-src={AppURL.Images+'/1011.jpg'} src={AppURL.Images+'/1011.jpg'} alt="collection" title="" width="300" height="300" /></div>
                <div className="details mt-3 text-center irfDt">
                    <h4 className="category-title mb-0">Agriculture Tools</h4>
                    <p className="counts">20 Products</p>
                </div>
            </a>
        </div>
        <div className="category-item irfCt zoomscal-hov" style={categoryItemStyle}>
            <a href="shop-left-sidebar.html" className="category-link clr-none">
                <div className="zoom-scal zoom-scal-nopb"><img className="blur-up lazyload" data-src={AppURL.Images+'/1009.jpg'} src={AppURL.Images+'/1011.jpg'} alt="collection" title="" width="300" height="300" /></div>
                <div className="details mt-3 text-center irfDt">
                    <h4 className="category-title mb-0">Agriculture Tools</h4>
                    <p className="counts">20 Products</p>
                </div>
            </a>
        </div>
        <div className="category-item irfCt zoomscal-hov" style={categoryItemStyle}>
            <a href="shop-left-sidebar.html" className="category-link clr-none">
                <div className="zoom-scal zoom-scal-nopb"><img className="blur-up lazyload" data-src={AppURL.Images+'/1010.jpg'} src={AppURL.Images+'/1011.jpg'} alt="collection" title="" width="300" height="300" /></div>
                <div className="details mt-3 text-center irfDt">
                    <h4 className="category-title mb-0">Agriculture Tools</h4>
                    <p className="counts">20 Products</p>
                </div>
            </a>
        </div>
        <div className="category-item irfCt zoomscal-hov" style={categoryItemStyle}>
            <a href="shop-left-sidebar.html" className="category-link clr-none">
                <div className="zoom-scal zoom-scal-nopb"><img className="blur-up lazyload" data-src={AppURL.Images+'/1012.jpg'} src={AppURL.Images+'/1011.jpg'} alt="collection" title="" width="300" height="300" /></div>
                <div className="details mt-3 text-center irfDt">
                    <h4 className="category-title mb-0">Agriculture Tools</h4>
                    <p className="counts">20 Products</p>
                </div>
            </a>
        </div>
        <div className="category-item irfCt zoomscal-hov" style={categoryItemStyle}>
            <a href="shop-left-sidebar.html" className="category-link clr-none">
                <div className="zoom-scal zoom-scal-nopb"><img className="blur-up lazyload" data-src={AppURL.Images+'/1018.jpg'} src={AppURL.Images+'/1011.jpg'} alt="collection" title="" width="300" height="300" /></div>
                <div className="details mt-3 text-center irfDt">
                    <h4 className="category-title mb-0">Agriculture Tools</h4>
                    <p className="counts">20 Products</p>
                </div>
            </a>
        </div>
        <div className="category-item irfCt zoomscal-hov" style={categoryItemStyle}>
            <a href="shop-left-sidebar.html" className="category-link clr-none">
                <div className="zoom-scal zoom-scal-nopb"><img className="blur-up lazyload" data-src={AppURL.Images+'/1017.jpg'} src={AppURL.Images+'/1011.jpg'} alt="collection" title="" width="300" height="300" /></div>
                <div className="details mt-3 text-center irfDt">
                    <h4 className="category-title mb-0">Agriculture Tools</h4>
                    <p className="counts">20 Products</p>
                </div>
            </a>
        </div>
        
         </Slider>
       
    )
}

export default CategorySlider
