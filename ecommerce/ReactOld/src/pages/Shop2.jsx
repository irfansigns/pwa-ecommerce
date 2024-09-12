import React from 'react'

const Shop = () => {
    return (
        <>
            <div className="page-holder">
      
      <header className="header bg-white">
        <div className="container px-0 px-lg-3">
          <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0"><a className="navbar-brand" href="index.html"><span className="font-weight-bold text-uppercase text-dark">Boutique</span></a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="shop.html">Shop</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="detail.html">Product detail</a>
                </li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="pagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <div className="dropdown-menu mt-3" aria-labelledby="pagesDropdown"><a className="dropdown-item border-0 transition-link" href="index.html">Homepage</a><a className="dropdown-item border-0 transition-link" href="shop.html">Category</a><a className="dropdown-item border-0 transition-link" href="detail.html">Product detail</a><a className="dropdown-item border-0 transition-link" href="cart.html">Shopping cart</a><a className="dropdown-item border-0 transition-link" href="checkout.html">Checkout</a></div>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">               
                <li className="nav-item"><a className="nav-link" href="cart.html"> <i className="fas fa-dolly-flatbed mr-1 text-gray"></i>Cart<small className="text-gray">(2)</small></a></li>
                <li className="nav-item"><a className="nav-link" href="#"> <i className="far fa-heart mr-1"></i><small className="text-gray"> (0)</small></a></li>
                <li className="nav-item"><a className="nav-link" href="#"> <i className="fas fa-user-alt mr-1 text-gray"></i>Login</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      
      
      <div className="container">
         
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Shop</h1>
              </div>
              <div className="col-lg-6 text-lg-right">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Shop</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container p-0">
            <div className="row">
              
              <div className="col-lg-3 order-2 order-lg-1">
                <h5 className="text-uppercase mb-4">Categories</h5>
                <div className="py-2 px-4 bg-dark text-white mb-3"><strong className="small text-uppercase font-weight-bold">Fashion &amp; Acc</strong></div>
                <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                  <li className="mb-2"><a className="reset-anchor" href="#">Women's T-Shirts</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#">Men's T-Shirts</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#">Dresses</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#">Novelty socks</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#">Women's sunglasses</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#">Men's sunglasses</a></li>
                </ul>
                <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase font-weight-bold">Health &amp; Beauty</strong></div>
                <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                  <li className="mb-2"><a className="reset-anchor" href="#">Shavers</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#">bags</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#">Cosmetic</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#">Nail Art</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#">Skin Masks &amp; Peels</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#">Korean cosmetics</a></li>
                </ul>
                <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase font-weight-bold">Electronics</strong></div>
                <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal mb-5">
                  <li className="mb-2"><a className="reset-anchor" href="#">Electronics</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#">USB Flash drives</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#">Headphones</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#">Portable speakers</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#">Cell Phone bluetooth headsets</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#">Keyboards</a></li>
                </ul>
                <h6 className="text-uppercase mb-4">Price range</h6>
                <div className="price-range pt-4 mb-5">
                  <div id="range"></div>
                  <div className="row pt-2">
                    <div className="col-6"><strong className="small font-weight-bold text-uppercase">From</strong></div>
                    <div className="col-6 text-right"><strong className="small font-weight-bold text-uppercase">To</strong></div>
                  </div>
                </div>
                <h6 className="text-uppercase mb-3">Show only</h6>
                <div className="custom-control custom-checkbox mb-1">
                  <input className="custom-control-input" id="customCheck1" type="checkbox" />
                  <label className="custom-control-label text-small" for="customCheck1">Returns Accepted</label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input className="custom-control-input" id="customCheck2" type="checkbox" />
                  <label className="custom-control-label text-small" for="customCheck2">Returns Accepted</label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input className="custom-control-input" id="customCheck3" type="checkbox" />
                  <label className="custom-control-label text-small" for="customCheck3">Completed Items</label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input className="custom-control-input" id="customCheck4" type="checkbox" />
                  <label className="custom-control-label text-small" for="customCheck4">Sold Items</label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input className="custom-control-input" id="customCheck5" type="checkbox" />
                  <label className="custom-control-label text-small" for="customCheck5">Deals &amp; Savings</label>
                </div>
                <div className="custom-control custom-checkbox mb-4">
                  <input className="custom-control-input" id="customCheck6" type="checkbox" />
                  <label className="custom-control-label text-small" for="customCheck6">Authorized Seller</label>
                </div>
                <h6 className="text-uppercase mb-3">Buying format</h6>
                <div className="custom-control custom-radio">
                  <input className="custom-control-input" id="customRadio1" type="radio" name="customRadio" />
                  <label className="custom-control-label text-small" for="customRadio1">All Listings</label>
                </div>
                <div className="custom-control custom-radio">
                  <input className="custom-control-input" id="customRadio2" type="radio" name="customRadio" />
                  <label className="custom-control-label text-small" for="customRadio2">Best Offer</label>
                </div>
                <div className="custom-control custom-radio">
                  <input className="custom-control-input" id="customRadio3" type="radio" name="customRadio" />
                  <label className="custom-control-label text-small" for="customRadio3">Auction</label>
                </div>
                <div className="custom-control custom-radio">
                  <input className="custom-control-input" id="customRadio4" type="radio" name="customRadio" />
                  <label className="custom-control-label text-small" for="customRadio4">Buy It Now</label>
                </div>
              </div>
              
              <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
                <div className="row mb-3 align-items-center">
                  <div className="col-lg-6 mb-2 mb-lg-0">
                    <p className="text-small text-muted mb-0">Showing 1–12 of 53 results</p>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                      <li className="list-inline-item text-muted mr-3"><a className="reset-anchor p-0" href="#"><i className="fas fa-th-large"></i></a></li>
                      <li className="list-inline-item text-muted mr-3"><a className="reset-anchor p-0" href="#"><i className="fas fa-th"></i></a></li>
                      <li className="list-inline-item">
                        <select className="selectpicker ml-auto" name="sorting" data-width="200" data-style="bs-select-form-control" data-title="Default sorting">
                          <option value="default">Default sorting</option>
                          <option value="popularity">Popularity</option>
                          <option value="low-high">Price: Low to High</option>
                          <option value="high-low">Price: High to Low</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                   
                  <div className="col-lg-4 col-sm-6">
                    <div className="product text-center">
                      <div className="mb-3 position-relative">
                        <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-1.jpg" alt="..." /></a>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <h6> <a className="reset-anchor" href="detail.html">Kui Ye Chen’s AirPods</a></h6>
                      <p className="small text-muted">$250</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-sm-6">
                    <div className="product text-center">
                      <div className="mb-3 position-relative">
                        <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-2.jpg" alt="..." /></a>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <h6> <a className="reset-anchor" href="detail.html">Air Jordan 12 gym red</a></h6>
                      <p className="small text-muted">$300</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-sm-6">
                    <div className="product text-center">
                      <div className="mb-3 position-relative">
                        <div className="badge text-white badge-primary">New</div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-3.jpg" alt="..." /></a>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <h6> <a className="reset-anchor" href="detail.html">Cyan cotton t-shirt</a></h6>
                      <p className="small text-muted">$25</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-sm-6">
                    <div className="product text-center">
                      <div className="mb-3 position-relative">
                        <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-4.jpg" alt="..." /></a>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <h6> <a className="reset-anchor" href="detail.html">Timex Unisex Originals</a></h6>
                      <p className="small text-muted">$351</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-sm-6">
                    <div className="product text-center">
                      <div className="mb-3 position-relative">
                        <div className="badge text-white badge-info">Sale</div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-5.jpg" alt="..." /></a>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <h6> <a className="reset-anchor" href="detail.html">Red digital smartwatch</a></h6>
                      <p className="small text-muted">$250</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-sm-6">
                    <div className="product text-center">
                      <div className="mb-3 position-relative">
                        <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-6.jpg" alt="..." /></a>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <h6> <a className="reset-anchor" href="detail.html">Nike air max 95</a></h6>
                      <p className="small text-muted">$300</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-sm-6">
                    <div className="product text-center">
                      <div className="mb-3 position-relative">
                        <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-7.jpg" alt="..." /></a>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <h6> <a className="reset-anchor" href="detail.html">Joemalone Women prefume</a></h6>
                      <p className="small text-muted">$25</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-sm-6">
                    <div className="product text-center">
                      <div className="mb-3 position-relative">
                        <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-8.jpg" alt="..." /></a>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <h6> <a className="reset-anchor" href="detail.html">Apple Watch</a></h6>
                      <p className="small text-muted">$351</p>
                    </div>
                  </div>
                 
                  <div className="col-lg-4 col-sm-6">
                    <div className="product text-center">
                      <div className="mb-3 position-relative">
                        <div className="badge text-white badge-danger">Sold</div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-9.jpg" alt="..." /></a>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <h6> <a className="reset-anchor" href="detail.html">Men silver Byron Watch</a></h6>
                      <p className="small text-muted">$351</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-sm-6">
                    <div className="product text-center">
                      <div className="mb-3 position-relative">
                        <div className="badge text-white badge-primary">New</div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-10.jpg" alt="..." /></a>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <h6> <a className="reset-anchor" href="detail.html">Ploaroid one step camera</a></h6>
                      <p className="small text-muted">$351</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-sm-6">
                    <div className="product text-center">
                      <div className="mb-3 position-relative">
                        <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-11.jpg" alt="..." /></a>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <h6> <a className="reset-anchor" href="detail.html">Gray Nike running shoes</a></h6>
                      <p className="small text-muted">$351</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-sm-6">
                    <div className="product text-center">
                      <div className="mb-3 position-relative">
                        <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-12.jpg" alt="..." /></a>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <h6> <a className="reset-anchor" href="detail.html">Black DSLR lense</a></h6>
                      <p className="small text-muted">$351</p>
                    </div>
                  </div>
                </div>
                
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center justify-content-lg-end">
                    <li className="page-item"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-dark text-white">
        <div className="container py-4">
          <div className="row py-5">
            <div className="col-md-4 mb-3 mb-md-0">
              <h6 className="text-uppercase mb-3">Customer services</h6>
              <ul className="list-unstyled mb-0">
                <li><a className="footer-link" href="#">Help &amp; Contact Us</a></li>
                <li><a className="footer-link" href="#">Returns &amp; Refunds</a></li>
                <li><a className="footer-link" href="#">Online Stores</a></li>
                <li><a className="footer-link" href="#">Terms &amp; Conditions</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <h6 className="text-uppercase mb-3">Company</h6>
              <ul className="list-unstyled mb-0">
                <li><a className="footer-link" href="#">What We Do</a></li>
                <li><a className="footer-link" href="#">Available Services</a></li>
                <li><a className="footer-link" href="#">Latest Posts</a></li>
                <li><a className="footer-link" href="#">FAQs</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6 className="text-uppercase mb-3">Social media</h6>
              <ul className="list-unstyled mb-0">
                <li><a className="footer-link" href="#">Twitter</a></li>
                <li><a className="footer-link" href="#">Instagram</a></li>
                <li><a className="footer-link" href="#">Tumblr</a></li>
                <li><a className="footer-link" href="#">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="border-top pt-4" style="border-color: #1d1d1d !important">
            <div className="row">
              <div className="col-lg-6">
                <p className="small text-muted mb-0">&copy; 2020 All rights reserved.</p>
              </div>
              <div className="col-lg-6 text-lg-right">
                <p className="small text-muted mb-0">Template designed by <a className="text-white reset-anchor" href="https://bootstraptemple.com/p/bootstrap-ecommerce">Bootstrap Temple</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
            
    </div>
        </>
    )
}

export default Shop
