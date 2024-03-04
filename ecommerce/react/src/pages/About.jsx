import React, { useState, useEffect } from 'react';
import AppURL from '../AppURL';

const About = () => {

    return (
        <>
          
          <div id="page-content"> 
           
            <div class="page-header text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center">
                            <div class="page-title"><h1>About Us</h1></div>
                            
                            <div class="breadcrumbs"><a href="index.html" title="Back to the home page">Home</a><span class="title"><i class="icon anm anm-angle-right-l"></i>Pages</span><span class="main-title fw-bold"><i class="icon anm anm-angle-right-l"></i>About Us</span></div>
                         
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="destination-section section pt-0">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12 col-sm-12 col-md-6">
                            <div class="about-images">
                                <img class="rounded-0 w-100 blur-up lazyload" src={AppURL.Images+'/about4.jpg'} alt="about" width="700" height="600" />
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6">
                            <div class="about-details faqs-style faqs-style2 px-50">
                                <h2 class="fs-3 mb-3">We Provide Continuous & Kind Service for Customers</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                <div class="accordion" id="accordionFaq">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Customer Service</button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionFaq">
                                            <div class="accordion-body">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Online Consultation</button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFaq">
                                            <div class="accordion-body">
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Sales Management</button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFaq">
                                            <div class="accordion-body">
                                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words discovered source.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="destination-section section section-color-light">
                <div class="container">
                    <div class="row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-2 g-4 text-center">
                        <div class="counterup-items">
                            <i class="icon anm anm-history fs-3 mb-3"></i>
                            <p class="counterup-number"><span class="counterup" data-count="50">50</span><span class="ms-1 text">M+</span></p>
                            <h5 class="counterup-title">Years of foundation</h5>
                        </div>
                        <div class="counterup-items">
                            <i class="icon anm anm-users-r fs-3 mb-3"></i>
                            <p class="counterup-number"><span class="counterup" data-count="100">100</span><span class="ms-1 text">B+</span></p>
                            <h5 class="counterup-title">Skilled team members</h5>
                        </div>
                        <div class="counterup-items">
                            <i class="icon anm anm-handshake-l fs-3 mb-3"></i>
                            <p class="counterup-number"><span class="counterup" data-count="80">80</span><span class="ms-1 text">M+</span></p>
                            <h5 class="counterup-title">Happy customers</h5>
                        </div>
                        <div class="counterup-items">
                            <i class="icon anm anm-bar-chart-o fs-3 mb-3"></i>
                            <p class="counterup-number"><span class="counterup" data-count="70">70</span><span class="ms-1 text">B+</span></p>
                            <h5 class="counterup-title">Monthly orders</h5>
                        </div>
                    </div>
                </div>
            </div>
            
          
           
            <section class="video-popup-section section pb-0">
                <div class="container">
                    <div class="section-header d-none">
                        <h2>Hema fashion store</h2>
                    </div>
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="video-popup-content position-relative">
                                <a href="#aboutVideo-modal" class="popup-video d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#aboutVideo_modal" title="View Video">
                                    <img class="w-100 d-block blur-up lazyload" src={AppURL.Images+'/video-popup-bg.jpg'}  alt="image" title="" width="1100" height="600" />
                                    <i class="icon anm anm-play-cir"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="content-section text-center col-lg-9 mx-auto mt-4">
                                <h3 class="fs-4 mb-3">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
        </div>
        
        <div id="site-scroll"><i class="icon anm anm-arw-up"></i></div>
        
        <div class="aboutVideo-modal modal fade" id="aboutVideo_modal" tabindex="-1" aria-hidden="true">           
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body p-0">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="ratio ratio-16x9 productVideo-wrap">
                            <iframe class="rounded-0" src="https://www.youtube.com/embed/93A2jOW5Mog?controls=0&autoplay=1&rel=0&showinfo=0" title="YouTube video" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
             
         
        </>
    );
};

export default About;

    

    
      
    
            
          

          


  
  
   
           

          


