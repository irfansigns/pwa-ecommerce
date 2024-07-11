import React from 'react';
import {Inertia , InertiaLink , usePage} from '@inertiajs/inertia-react';
import Navbar from './Navbar';
import Slider from './Slider';
import Footer from './Footer';
import SingleProduct from './SingleProduct';
import SingleProductBD from './SingleProductBD';

const Detail = (props) => {
  //console.log(props.detimage);
  return(
    <div className="page-holder">        
      <Navbar />

      <section className="py-5">
        <div className="container">
          <SingleProduct {...props}/>
          <SingleProductBD {...props}/>
        </div>
      </section>
      <Footer />
    </div> 
  )
}

export default Detail;