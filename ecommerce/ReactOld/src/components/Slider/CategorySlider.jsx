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
            <Link to="shop/3" className="category-link clr-none">
                <div className="zoom-scal zoom-scal-nopb"><img className="blur-up lazyload" src={AppURL.Images+'/pcat/pcat1.jpg'}  alt="collection" title="" width="300" height="300" /></div>
                <div className="details mt-3 text-center irfDt">
                    <h4 className="category-title mb-0">Beauty</h4>
                    <p className="counts">20 Products</p>
                </div>
            </Link>
        </div>
        <div className="category-item irfCt zoomscal-hov" style={categoryItemStyle}>
            <Link to="shop/2" className="category-link clr-none">
                <div className="zoom-scal zoom-scal-nopb"><img className="blur-up lazyload" src={AppURL.Images+'/pcat/pcat2.jpg'} alt="collection" title="" width="300" height="300" /></div>
                <div className="details mt-3 text-center irfDt">
                    <h4 className="category-title mb-0">Cosmetics</h4>
                    <p className="counts">20 Products</p>
                </div>
            </Link>
        </div>
        <div className="category-item irfCt zoomscal-hov" style={categoryItemStyle}>
            <Link to="shop/5" className="category-link clr-none">
                <div className="zoom-scal zoom-scal-nopb"><img className="blur-up lazyload" src={AppURL.Images+'/pcat/pcat3.jpg'} alt="collection" title="" width="300" height="300" /></div>
                <div className="details mt-3 text-center irfDt">
                    <h4 className="category-title mb-0">Jewellery</h4>
                    <p className="counts">20 Products</p>
                </div>
            </Link>
        </div>
        
        <div className="category-item irfCt zoomscal-hov" style={categoryItemStyle}>
            <Link to="shop/1" className="category-link clr-none">
                <div className="zoom-scal zoom-scal-nopb"><img className="blur-up lazyload" src={AppURL.Images+'/pcat/pcat5.jpg'} alt="collection" title="" width="300" height="300" /></div>
                <div className="details mt-3 text-center irfDt">
                    <h4 className="category-title mb-0">Gadgetry</h4>
                    <p className="counts">20 Products</p>
                </div>
            </Link>
        </div>
        <div className="category-item irfCt zoomscal-hov" style={categoryItemStyle}>
            <Link to="shop/6" className="category-link clr-none">
                <div className="zoom-scal zoom-scal-nopb"><img className="blur-up lazyload" src={AppURL.Images+'/pcat/pcat8.jpg'} alt="collection" title="" width="300" height="300" /></div>
                <div className="details mt-3 text-center irfDt">
                    <h4 className="category-title mb-0">Trousers</h4>
                    <p className="counts">20 Products</p>
                </div>
            </Link>
        </div>
        <div className="category-item irfCt zoomscal-hov" style={categoryItemStyle}>
            <Link to="shop/12" className="category-link clr-none">
                <div className="zoom-scal zoom-scal-nopb"><img className="blur-up lazyload" src={AppURL.Images+'/pcat/pcat9.jpg'} alt="collection" title="" width="300" height="300" /></div>
                <div className="details mt-3 text-center irfDt">
                    <h4 className="category-title mb-0">Toys</h4>
                    <p className="counts">20 Products</p>
                </div>
            </Link>
        </div>
        <div className="category-item irfCt zoomscal-hov" style={categoryItemStyle}>
            <Link to="shop/7" className="category-link clr-none">
                <div className="zoom-scal zoom-scal-nopb"><img className="blur-up lazyload" src={AppURL.Images+'/pcat/pcat10.jpg'} alt="collection" title="" width="300" height="300" /></div>
                <div className="details mt-3 text-center irfDt">
                    <h4 className="category-title mb-0">Shirts</h4>
                    <p className="counts">20 Products</p>
                </div>
            </Link>
        </div>

        <div className="category-item irfCt zoomscal-hov" style={categoryItemStyle}>
            <Link to="shop/9" className="category-link clr-none">
                <div className="zoom-scal zoom-scal-nopb"><img className="blur-up lazyload" src={AppURL.Images+'/pcat/pcat7.jpg'} alt="collection" title="" width="300" height="300" /></div>
                <div className="details mt-3 text-center irfDt">
                    <h4 className="category-title mb-0">Undergarments</h4>
                    <p className="counts">20 Products</p>
                </div>
            </Link>
        </div>
        
         </Slider>
       
    )
}

export default CategorySlider
