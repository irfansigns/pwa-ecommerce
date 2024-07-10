import React from 'react';
import Slider from './Slider';

const SingleProductBD = (props) =>{
    console.log(props.name);
    return(
        <>
            <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
            <li className="nav-item"><a className="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a></li>
            <li className="nav-item"><a className="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a></li>
          </ul>
          <div className="tab-content mb-5" id="myTabContent">
            <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
              <div className="p-4 p-lg-5 bg-white">
                <h6 className="text-uppercase">Product description </h6>
                <p className="text-muted text-small mb-0">{props.description}</p>
              </div>
            </div>
            <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
              <div className="p-4 p-lg-5 bg-white">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="media mb-3"><img className="rounded-circle" src="img/customer-1.png" alt="" width="50" />
                      <div className="media-body ml-3">
                        <h6 className="mb-0 text-uppercase">Jason Doe</h6>
                        <p className="small text-muted mb-0 text-uppercase">20 May 2020</p>
                        <ul className="list-inline mb-1 text-xs">
                          <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                          <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                          <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                          <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                          <li className="list-inline-item m-0"><i className="fas fa-star-half-alt text-warning"></i></li>
                        </ul>
                        <p className="text-small mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                    <div className="media"><img className="rounded-circle" src="img/customer-2.png" alt="" width="50" />
                      <div className="media-body ml-3">
                        <h6 className="mb-0 text-uppercase">Jason Doe</h6>
                        <p className="small text-muted mb-0 text-uppercase">20 May 2020</p>
                        <ul className="list-inline mb-1 text-xs">
                          <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                          <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                          <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                          <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                          <li className="list-inline-item m-0"><i className="fas fa-star-half-alt text-warning"></i></li>
                        </ul>
                        <p className="text-small mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           
          <h2 className="h5 text-uppercase mb-4">Related products</h2>
          <div className="row">
             {/* PRODUCT */}
            <div className="col-lg-3 col-sm-6">
              <div className="product text-center skel-loader">
                <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-1.jpg" alt="..." /></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#">Add to cart</a></li>
                      <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Kui Ye Chen’s AirPods</a></h6>
                <p className="small text-muted">$250</p>
              </div>
            </div>
             {/* PRODUCT */}
            <div className="col-lg-3 col-sm-6">
              <div className="product text-center skel-loader">
                <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-2.jpg" alt="..." /></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#">Add to cart</a></li>
                      <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Air Jordan 12 gym red</a></h6>
                <p className="small text-muted">$300</p>
              </div>
            </div>
             {/* PRODUCT */}
            <div className="col-lg-3 col-sm-6">
              <div className="product text-center skel-loader">
                <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-3.jpg" alt="..." /></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#">Add to cart</a></li>
                      <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Cyan cotton t-shirt</a></h6>
                <p className="small text-muted">$25</p>
              </div>
            </div>
             {/* PRODUCT */}
            <div className="col-lg-3 col-sm-6">
              <div className="product text-center skel-loader">
                <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-4.jpg" alt="..." /></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#">Add to cart</a></li>
                      <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Timex Unisex Originals</a></h6>
                <p className="small text-muted">$351</p>
              </div>
            </div>
          </div>
         </>
    )
}

export default SingleProductBD;