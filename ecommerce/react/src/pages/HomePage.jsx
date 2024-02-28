import React, { Component } from 'react'
import AppURL from '../AppURL';
import axios from 'axios';
import { Link } from 'react-router-dom'


class HomePage extends Component {
  
    constructor(){
        super();
        this.state={
             ProductData:[],
             isLoading:"",
             mainDiv:"d-none"      
        }
    }

   componentDidMount(){
       axios.get(AppURL.ProductList).then(response=>{
           console.log(response.data);
           this.setState({ProductData:response.data});
       }).catch(error=>{
           
       });
   }

    render() {
      
        const ProductList = this.state.ProductData;
        const userView = ProductList.map((product,key)=>{
            return(
                <div className="col-xl-3 col-lg-4 col-sm-6" key={product.id}>
                  <div className="product text-center">
                    <div className="position-relative mb-3">
                      <div className="badge text-white badge-"></div><Link className="d-block" to={product.detail_url}><img className="img-fluid w-100" src={AppURL.Images+product.i_path} alt="..." /></Link>
                      <div className="product-overlay">
                        <ul className="mb-0 list-inline">
                          {/* <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" href={product.detail_url}><i className="far fa-heart"></i></Link></li> */}
                          {/* <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">{product.quantity}</a></li> */}
                          {/* <li className="list-inline-item mr-0"><button className="btn btn-sm btn-outline-dark" onClick={()=>{const id = product.id; addToCart(id);}}  ><i className="fas fa-shopping-cart"><span className="ml-1">Add to Cart</span></i></button></li> */}
                          <li className="list-inline-item mr-0"><button className="btn btn-sm btn-outline-dark"><i className="fas fa-shopping-cart"><span className="ml-1">Add to Cart</span></i></button></li>
                        </ul>
                      </div>
                    </div>
                    <h6> <a className="reset-anchor" to="detail.html">{product.pname}</a></h6>
                    <p className="small text-muted">${product.price}</p>
                    {/* <button className="btn btn-small"><a href={product.edit_url}>Edit</a></button> */}
                  </div>
                </div>
              )
        })
        return (
          <div className="container">
            <section className="py-5">
            <div className="row">
              
              <header>
                <p className="small text-muted small text-uppercase mb-1">Made the hard way</p>
                <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
              </header>
              {userView}
              
            </div>
            </section>
          </div>
        )
    }
}

export default HomePage
