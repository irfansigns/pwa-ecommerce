import React from 'react';
import axiosClient from '../axiosClient';

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
                    <div data-target="#carouselExampleCaptions" data-slide-to="0" className="flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100" src={AppURL.Images+props.images} alt="..." /></div>

                    {
                        props.detailImg.map((igKey,i)=>{
                            return(
                                <div data-target="#carouselExampleCaptions" data-slide-to={i+1} className="flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100"  src={AppURL.Images+igKey} alt="..." /></div>
                            )
                    })
}
                    
                  </div>
                </div>
                <div className="col-sm-10 order-1 order-sm-2">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            {/* <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol> */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={AppURL.Images+props.images}  className="d-block w-100" alt="..." />
                
                </div>    

                {
                    props.detailImg.map(igKey=>{
                        return(
                            <div className="carousel-item ">
                                <img src={AppURL.Images+igKey} className="d-block w-100" alt="..." />
                                
                            </div>
                            
                        )
                    })
                }
    
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
                </div>
              </div>
        </>
    )
}

export default Slider;