import React from 'react'
import Cat1Slider from './Cat1Slider';
import { Link } from 'react-router-dom'

const MCatSlider = () => {
    return (
        <>
            <section className="pt-5">
          <header className="text-center">
            <p className="small text-muted small text-uppercase mb-1">Carefully created collections</p>
            <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
          </header>
          <div className="row">
            {/* 

            <div className="col-md-4 mb-4 mb-md-0">
              <a className="category-item" href="shop.html">

                <img className="img-fluid" src="img/cat-img-1.jpg" alt="" />
                <strong className="category-item-title">Clothes</strong>
              </a>
            </div> 

            */}

            <div className="col-md-4 mb-4 mb-md-0">
              <Link to={'/shop/'+1} className="category-item" href="shop.html">

              <Cat1Slider speed="6200" code="1" cat="1" />

              <strong className="category-item-title">Jewellery</strong>

              </Link>
            </div>

            <div className="col-md-4 mb-4 mb-md-0"><Link to={'/shop/'+2} className="category-item mb-4" href="shop.html"><Cat1Slider speed="6000" code="2" cat="2" /><strong className="category-item-title">Kids</strong></Link><Link to={'/shop/'+3} className="category-item" href="shop.html"><Cat1Slider speed="5800" code="3" cat="3" /><strong className="category-item-title">Fashion</strong></Link></div>
            <div className="col-md-4"><Link to={'/shop/'+4} className="category-item" href="shop.html"><Cat1Slider speed="6400" code="4" cat="4" /><strong className="category-item-title">Electronics</strong></Link></div>
          </div>
            </section>  
        </>
    )
}

export default MCatSlider
