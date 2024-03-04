import React, { useState, useEffect } from 'react';

const Contact = () => {

    return (
        <>
                  
            <div id="page-content"> 
                
                <div className="page-header text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center">
                                <div className="page-title"><h1>Contact Us </h1></div>
                              
                                <div className="breadcrumbs"><a href="index.html" title="Back to the home page">Home</a><span className="title"><i className="icon anm anm-angle-right-l"></i>Pages</span><span className="main-title fw-bold"><i className="icon anm anm-angle-right-l"></i>Contact Us</span></div>
                             
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="container contact-style1">
                   
                    <div className="contact-form-details section pt-0">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                              
                                <div className="formFeilds contact-form form-vertical mb-4 mb-md-0">
                                    <div className="section-header">
                                        <h2>Let's Get in touch!</h2>
                                        <p>You can contact us any way that is convenient for you. We are available 24/7 via fax or email. You can also use a quick contact form below or visit our office personally. We would be happy to answer your questions.</p>
                                    </div>

                                    <form action="php/ajax_sendmail.php" name="contactus" method="post" id="contact-form" className="contact-form">	
                                        <div className="form-row">
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" id="ContactFormName" name="name" className="form-control" placeholder="Name" />
                                                    <span className="error_msg" id="name_error"></span>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">                               
                                                <div className="form-group">
                                                    <input type="email" id="ContactFormEmail" name="email" className="form-control" placeholder="Email" />
                                                    <span className="error_msg" id="email_error"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="tel" id="ContactFormPhone" name="phone" pattern="[0-9\-]*" placeholder="Phone Number"  />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" id="ContactSubject" name="subject" className="form-control" placeholder="Subject" />
                                                    <span className="error_msg" id="subject_error"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                <div className="form-group">
                                                    <textarea id="ContactFormMessage" name="message" className="form-control" rows="5" placeholder="Message"></textarea>
                                                    <span className="error_msg" id="message_error"></span>
                                                </div>
                                            </div>  
                                        </div>
                                        <div className="form-row">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                <div className="form-group mailsendbtn mb-0 w-100">	
                                                    <input className="btn btn-lg" type="submit" name="contactus" value="Send Message" />
                                                    <div className="loading"><img className="img-fluid" src="assets/images/icons/ajax-loader.gif" alt="loading" width="16" height="16" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="response-msg"></div>
                                </div>
                              
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                               
                                <div className="contact-details bg-block">
                                    <h3 className="mb-3 fs-5">Store information</h3>
                                    <ul className="list-unstyled">
                                        <li className="mb-2 address">
                                            <strong className="d-block mb-2">Address :</strong>
                                            <p><i className="icon anm anm-map-marker-al me-2 d-none"></i> 123, The Company Name Inc, Street Road City name, State name and Zip code.</p>
                                        </li>
                                        <li className="mb-2 phone"><strong>Phone :</strong><i className="icon anm anm-phone me-2 d-none"></i> <a href="tel:401234567890">(+40) 123 456 7890</a></li>
                                        <li className="mb-0 email"><strong>Email :</strong><i className="icon anm anm-envelope-l me-2 d-none"></i> <a href="mailto:contact@example.com">contact@example.com</a></li>
                                    </ul>
                                    <hr />
                                    <div className="open-hours">
                                        <strong className="d-block mb-2">Opening Hours</strong>
                                        <p className="lh-lg">
                                            Mon - Sat : 9:30 AM - 6:30 PM<br />
                                            Sunday: 11:00 AM - 5:00 PM
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="follow-us">
                                        <label className="d-block mb-3"><strong>Stay Connected</strong></label>
                                        <ul className="list-inline social-icons">
                                            <li className="list-inline-item"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook"><i className="icon anm anm-facebook-f"></i></a></li>
                                            <li className="list-inline-item"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter"><i className="icon anm anm-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Pinterest"><i className="icon anm anm-pinterest-p"></i></a></li>
                                            <li className="list-inline-item"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram"><i className="icon anm anm-linkedin-in"></i></a></li>
                                            <li className="list-inline-item"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Google plus"><i className="icon anm anm-google-plus-g"></i></a></li>
                                            <li className="list-inline-item"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Whatsapp"><i className="icon anm anm-whatsapp"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                 
                    <div className="contact-maps section p-0">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="map-section ratio ratio-16x9">
                                    <iframe className="rounded-5" src="https://www.google.com/maps/embed?pb=" allowfullscreen="" height="650"></iframe>  
                                    <div className="map-section-overlay-wrapper">
                                        <div className="map-section-overlay rounded-0">
                                            <h3>Our store</h3>
                                            <div className="content mb-3">
                                                <p className="mb-2">123, The Company Name Inc,<br />Toronto, Canada</p>
                                                <p>Mon - Fri, 10am - 9pm<br />Saturday, 11am - 9pm<br />Sunday, 11am - 5pm</p>
                                            </div>
                                            <p><a href="https://www.google.com/maps?daddr=80+Spadina+Ave,+Toronto" className="btn btn-secondary btn-sm">Get directions</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
               
            </div>
          
            <div id="site-scroll"><i className="icon anm anm-arw-up"></i></div>
        </>
    );
};

export default Contact;

    

    
      
    
            
          

          


  
  