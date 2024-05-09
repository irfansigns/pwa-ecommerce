import React from 'react';

const Category = () =>{
    return(
    <>
       {/* <section className="hero pb-3 bg-cover bg-center d-flex align-items-center"  style={{backgroundImage: "url(" + "img/hero-banner-alt.jpg" + ")" }}>
            <div className="container py-5">
              <div className="row px-4 px-lg-5">
                <div className="col-lg-6">
                  <p className="text-muted small text-uppercase mb-2">New Inspiration 2020</p>
                  <h1 className="h2 text-uppercase mb-3">20% off on new season</h1><a className="btn btn-dark" href="shop.html">Browse collections</a>
                </div>
              </div>
            </div>
          </section> */}

         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={base_url +'/img/cover2.jpeg'}alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={base_url +'/img/cover11.jpeg'} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={base_url +'/img/cover22.jpeg'}alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>


          <section className="pt-5">
            <header className="text-center">
              <p className="small text-muted small text-uppercase mb-1">Carefully created collections</p>
              <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
            </header>
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-0"><a className="category-item" href="shop.html"><img className="img-fluid" src="img/cat-img-1.jpg" alt="" /><strong className="category-item-title">Clothes</strong></a></div>
              <div className="col-md-4 mb-4 mb-md-0"><a className="category-item mb-4" href="shop.html"><img className="img-fluid" src="img/cat-img-2.jpg" alt="" /><strong className="category-item-title">Shoes</strong></a><a className="category-item" href="shop.html"><img className="img-fluid" src="img/cat-img-3.jpg" alt="" /><strong className="category-item-title">Watches</strong></a></div>
              <div className="col-md-4"><a className="category-item" href="shop.html"><img className="img-fluid" src="img/cat-img-4.jpg" alt="" /><strong className="category-item-title">Electronics</strong></a></div>
            </div>
          </section>
        </>
    )
}

export default Category;