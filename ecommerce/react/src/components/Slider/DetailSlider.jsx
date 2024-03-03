import React, {useEffect , useState} from "react"
import Slider from "react-slick";
import axios from 'axios';
import { Link } from 'react-router-dom';
import AppURL from '../../AppURL';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import '../../assets/css/cascade.css'


const DetailSlider = ({ handleImageClick, detailImg , images, category }) => { 

    const detailImages = detailImg.map(igKey=>{
        return AppURL.Images+igKey;       
    });

    console.log(AppURL.Images+images+" is the image link");

    const settings = {
        infinite: true,
        slidesToShow: 5,
        stageMargin: 5,
        slidesToScroll: 1,
        
    };

    
    return (
        
        <Slider {...settings}>


            {/* <a onClick={() => handleImageClick(AppURL.Images+'/1009.jpg')} data-image={AppURL.Images+'/1009.jpg'} data-zoom-image={AppURL.Images+'/1009.jpg'} className="slick-slide slick-cloned active">
                <img className="blur-up lazyload" data-src={AppURL.Images+'/1009.jpg'} src={AppURL.Images+'/1009.jpg'} alt="product" width="625" height="808" />
            </a> */}
            {/* <a onClick={() => handleImageClick(AppURL.Images+igKey)}  className="slick-slide slick-cloned active">
                <img className="blur-up lazyload" data-src={AppURL.Images+igKey} src={AppURL.Images+igKey} alt="product" width="625" height="808" />
            </a> */}

            {
                
                
                detailImg.map((igKey,i)=>{
                    return(
                        <a onClick={() => handleImageClick(AppURL.Images+igKey)}  className="slick-slide slick-cloned active">
                            <img className="blur-up lazyload" data-src={AppURL.Images+igKey} src={AppURL.Images+igKey} alt="product" width="625" height="808" />
                        </a>
                    )
                })

            }


        </Slider>
       
    )
}

export default DetailSlider
