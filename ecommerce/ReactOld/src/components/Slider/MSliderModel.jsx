import React, {useEffect , useState} from "react"
import Slider from "react-slick";
import axios from 'axios';
import { Link } from 'react-router-dom';

const MSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        className:'collection-slider-3items gp15 arwOut5 hov-arrow',
    };

    return (
        <div>
        <Slider {...settings}>
            <div class="category-item zoomscal-hov">
                <a href="shop-left-sidebar.html" class="category-link clr-none">
                    <div class="zoom-scal zoom-scal-nopb"><img class="blur-up lazyload" data-src="assets/images/collection/1001.jpg" src="assets/images/collection/slider.jpg" alt="collection" title="" width="420" height="521" /></div>
                    <div class="details mt-4 text-left d-flex align-items-start">
                        <div class="pr-2">
                            <h4 class="category-title h2">Designer Frames</h4>
                            <p class="dec">There are many variations of passages of Lorem Ipsum but the text</p>
                        </div>
                        <div class="btnOut"><span class="btn btn-secondary"><i class="anm anm-arw-right"></i></span></div>
                    </div>
                </a>
            </div>
            <div class="category-item zoomscal-hov">
                <a href="shop-left-sidebar.html" class="category-link clr-none">
                    <div class="zoom-scal zoom-scal-nopb"><img class="blur-up lazyload" data-src="assets/images/collection/1002.jpg" src="assets/images/collection/slider.jpg" alt="collection" title="" width="420" height="521" /></div>
                    <div class="details mt-4 text-left d-flex align-items-start">
                        <div class="pr-2">
                            <h4 class="category-title h2">Black polarized</h4>
                            <p class="dec">Dum majority have suffered alteration in some form humour</p>
                        </div>
                        <div class="btnOut"><span class="btn btn-secondary"><i class="anm anm-arw-right"></i></span></div>
                    </div>
                </a>
            </div>
            <div class="category-item zoomscal-hov">
                <a href="shop-left-sidebar.html" class="category-link clr-none">
                    <div class="zoom-scal zoom-scal-nopb"><img class="blur-up lazyload" data-src="assets/images/collection/1012.jpg" src="assets/images/collection/slider.jpg" alt="collection" title="" width="420" height="521" /></div>
                    <div class="details mt-4 text-left d-flex align-items-start">
                        <div class="pr-2">
                            <h4 class="category-title h2">matt brown sunglasses</h4>
                            <p class="dec">There are many variations of passages of Lorem Ipsum but the text</p>
                        </div>
                        <div class="btnOut"><span class="btn btn-secondary"><i class="anm anm-arw-right"></i></span></div>
                    </div>
                </a>
            </div>                           
        </Slider>
        </div>
    )
}

export default MSlider
