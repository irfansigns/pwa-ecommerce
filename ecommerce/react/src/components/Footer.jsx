import React from 'react'

const Footer = () => {
    return (
        <>
             
            <div className="footer ftr-bg-black footer-4 footer-10">               
                <div className="footer-top clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-2 footer-links">
                                <h4 className="h4 text-uppercase">My Account</h4>
                                <ul>
                                    <li><a href="my-account.html">My Account</a></li>
                                    <li><a href="cart-style1.html">View Cart</a></li>
                                    <li><a href="wishlist-style1.html">My Wishlist</a></li>
                                    <li><a href="my-account.html">Track My Order</a></li>
                                    <li><a href="faqs-page.html">Help</a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-2 footer-links ps-lg-5">
                                <h4 className="h4 text-uppercase">Quick Shop</h4>
                                <ul>
                                    <li><a href="#">Bags &amp; Accessories</a></li>
                                    <li><a href="#">Tools &amp; Parts</a></li>
                                    <li><a href="#">Vegetables</a></li>
                                    <li><a href="#">Jewelry</a></li>
                                    <li><a href="#">Cosmetics</a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-3 footer-links ps-lg-5">
                                <h4 className="h4 text-uppercase">Information</h4>
                                <ul>
                                    <li><a href="aboutus-style1.html">About Us</a></li>
                                    <li><a href="#">Order History</a></li>
                                    <li><a href="#">Returns & Exchange</a></li>
                                    <li><a href="#">Custom Services</a></li>
                                    <li><a href="#">Terms & Condition</a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 footer-contact mt-1 mt-md-4 mt-lg-0">
                                <h4 className="h4 text-uppercase">Contact Us</h4>
                                <p className="address d-flex"><i className="icon anm anm-map-marker-al pt-1"></i> 123 Street Name, City, England</p>
                                <p className="phone d-flex align-items-center"><i className="icon anm anm-phone-l"></i>  <b className="me-1 d-none">Phone:</b> <a href="tel:401234567890">(+40) 123 456 7890</a></p>
                                <p className="email d-flex align-items-center"><i className="icon anm anm-envelope-l"></i> <b className="me-1 d-none">Email:</b> <a href="mailto:info@example.com">info@example.com</a></p>
                                <p className="work-hour d-flex mb-0"><i className="icon anm anm-clock-r pt-1"></i><span className="hour-time">Working Hours: <br/>Mon - Sun / 9:00 AM - 8:00 PM</span></p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-2 footer-appstore mt-4 mt-lg-0">
                                <h4 className="h4 text-uppercase">Download App</h4>
                                <div className="row g-3 pt-1">
                                    <a href="#"><img src="assets/images/icons/google-play.png" alt="Google Play" title="Google Play" width="150" height="50" /></a>
                                    <a href="#"><img src="assets/images/icons/app-store.png" alt="App Store" title="App Store" width="150" height="50" /></a>
                                </div>
                            </div>
                        </div>               
                    </div>
                </div>
                <div className="footer-bottom clearfix">
                    <div className="container">
                        <div className="row">
                            <ul className="list-inline social-icons d-inline-flex align-items-center justify-content-center justify-content-sm-start col-12 col-sm-6 col-lg-4">
                                <li className="list-inline-item"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook"><i className="icon anm anm-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter"><i className="icon anm anm-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Pinterest"><i className="icon anm anm-pinterest-p"></i></a></li>
                                <li className="list-inline-item"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Linkedin"><i className="icon anm anm-linkedin-in"></i></a></li>
                                <li className="list-inline-item"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram"><i className="icon anm anm-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Youtube"><i className="icon anm anm-youtube"></i></a></li>
                            </ul>
                            <div className="copytext text-center col-12 col-md-12 col-lg-4 order-2 order-lg-0 mt-3 mt-lg-0">&copy; 2023 Hema. All Rights Reserved.</div>
                            <ul className="payment-icons d-flex-center justify-content-center justify-content-sm-end col-12 col-sm-6 col-lg-4 mt-3 mt-sm-0">
                                <li><i className="icon anm anm-cc-visa"></i></li>
                                <li><i className="icon anm anm-cc-mastercard"></i></li>
                                <li><i className="icon anm anm-cc-amex"></i></li>
                                <li><i className="icon anm anm-cc-paypal"></i></li>
                                <li><i className="icon anm anm-cc-discover"></i></li>
                                <li><i className="icon anm anm-cc-stripe"></i></li>
                                <li><i className="icon anm anm-cc-jcb"></i></li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Footer
