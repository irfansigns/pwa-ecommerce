import React, {useEffect , useState} from "react"
import Slider from "react-slick";
import axios from 'axios';
import { Link } from 'react-router-dom';
import axiosClient from "../../axiosClient";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import '../../assets/css/cascade.css'


const DetailSlider = ({ handleImageClick, detailImg , images, category }) => { 

    const detailImages = detailImg.map(igKey=>{
        return axiosClient.Images+igKey;       
    });

    const settings = {
        infinite: true,
        slidesToShow: 5,
        stageMargin: 5,
        slidesToScroll: 1,
        
    };

    
    return (
        
        <Slider {...settings}>

            {
                
                
                detailImg.map((igKey,i)=>{
                    return(
                        <a onClick={() => handleImageClick(axiosClient.Images+category+'/'+igKey)}  className="slick-slide slick-cloned active">
                            <img className="blur-up lazyload" data-src={axiosClient.Images+category+'/'+igKey} src={axiosClient.Images+category+'/'+igKey} alt="product" width="625" height="808" />
                        </a>
                    )
                })

            }

{
                
                
                detailImg.map((igKey,i)=>{
                    return(
                        <a onClick={() => handleImageClick(axiosClient.Images+category+'/'+igKey)}  className="slick-slide slick-cloned active">
                            <img className="blur-up lazyload" data-src={axiosClient.Images+category+'/'+igKey} src={axiosClient.Images+category+'/'+igKey} alt="product" width="625" height="808" />
                        </a>
                    )
                })

            }


        </Slider>
       
    )
}

export default DetailSlider
