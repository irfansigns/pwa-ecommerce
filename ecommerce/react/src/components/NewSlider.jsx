import React from 'react';
import AppURL from '../AppURL';

const Slider = (props) =>{
    const detailImages = props.detailImg.map(igKey=>{
        return AppURL.Images+igKey;       
    });
    // Very Very Important data was not coming in the form of Array.was coming in form of Object.map function is only available on Array.
    console.log(detailImages);
    return(
        <>
        <div className="row m-sm-0">
                <div className="col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0">
                  <div className=" d-flex flex-row flex-sm-column" data-slider-id="1">
                    <div className="flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100" src={AppURL.Images+"/product-detail-1.jpg"} alt="..." /></div>
                    <div className="flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100" src={AppURL.Images+"/product-detail-2.jpg"} alt="..." /></div>
                    <div className="flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100" src={AppURL.Images+"/product-detail-3.jpg"} alt="..." /></div>
                    <div className="flex-fill mb-2"><img className="w-100" src={AppURL.Images+"/product-detail-4.jpg"} alt="..." /></div>
                  </div>
                </div>
                <div className="col-sm-10 order-1 order-sm-2">
                  {/* <div className="owl-carousel product-slider" data-slider-id="1"><a className="d-block" href="img/product-detail-1.jpg" data-lightbox="product" title="Product item 1"><img className="img-fluid" src="img/product-detail-1.jpg" alt="..." /></a><a className="d-block" href="img/product-detail-2.jpg" data-lightbox="product" title="Product item 2"><img className="img-fluid" src="img/product-detail-2.jpg" alt="..." /></a><a className="d-block" href="img/product-detail-3.jpg" data-lightbox="product" title="Product item 3"><img className="img-fluid" src="img/product-detail-3.jpg" alt="..." /></a><a className="d-block" href="img/product-detail-4.jpg" data-lightbox="product" title="Product item 4"><img className="img-fluid" src="img/product-detail-4.jpg" alt="..." /></a></div> */}
                  <a className="d-block" href="img/product-detail-1.jpg" data-lightbox="product" title="Product item 1"><img className="img-fluid" src={AppURL.Images+"/product-detail-1.jpg"} alt="..." /></a>
                </div>
              </div>
        </>
    )
}

export default Slider;