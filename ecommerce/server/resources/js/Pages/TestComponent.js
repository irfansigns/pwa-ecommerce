import React,{useState} from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import {InertiaLink, usePage} from '@inertiajs/inertia-react';
import route from "ziggy-js"

const Cart = (props) =>{
    //const [product , setProduct] = useState(1);
    let cartData = (<h4 className="text-danger">No Items Selected</h4>);
    let tempVar = null;

    if(props.cart.items){
      const s_prod = Object.keys(props.cart.items).map(igKey=>{
          return props.cart.items[igKey];
          console.log(s_prod);

      })
          tempVar = "12500";
          cartData = s_prod.map(prod=>{
          return(

        
                                <tr>
                            <th className="pl-0 border-light" scope="row">
                              <div className="media align-items-center"><a className="reset-anchor d-block animsition-link" href="detail.html"><img src={base_url + '/img/'+ prod.item.i_path} alt="..." width="70"/></a>
                                <div className="media-body ml-3"><strong className="h6"><a className="reset-anchor animsition-link" href="detail.html">{prod.pname}</a></strong></div>
                              </div>
                            </th>
                            <td className="align-middle border-light">
                                  <p className="mb-0 small">${prod.item.price}</p>
                            </td>
                            <td className="align-middle border-light">
                              <div className="border d-flex align-items-center justify-content-between px-3"><span className="small text-uppercase text-gray headings-font-family">Quantity</span>
                                <div className="quantity">
                                  <InertiaLink className="dec-btn p-0" href={route('product.lessOne',{id:prod.item.id})}><i className="fas fa-caret-left"></i></InertiaLink>
                                  <input className="form-control form-control-sm border-0 shadow-0 p-0" type="text" defaultValue={prod.qty} />
                                  <InertiaLink className="inc-btn p-0" href={route('product.addCart',{id:prod.item.id})}><i className="fas fa-caret-right"></i></InertiaLink>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle border-light">
                              <p className="mb-0 small">{prod.price}</p>
                            </td>
                            <td className="align-middle border-light"><a className="reset-anchor" href="#"><i className="fas fa-trash-alt small text-muted"></i></a></td>
                            </tr>
                  )


          })
    }//end of if(props.cart.items)

    
    // if (typeof tempVar === 'undefined') {
    //   alert("s_prod is notDetecting")
    // }

    // alert(tempVar);
    
    
    return(
        <div className="page-holder">
        
        <Navbar />
        
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Customer Information</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    
                    <form>
                      <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Name</label>
                          <input type="text" className="form-control" id="exampleInputPassword1" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                      </div>
                      <div className="form-group">
                        <label htmlFor="mobilenum">Mobile Number</label>
                        <input type="text" className="form-control" id="mobilenum" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your Mobile number with anyone else.</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" />
                      </div>        
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" type="submit" className="btn btn-primary ml-1"><InertiaLink href={route('product.lessOne',{id:prod.item.id})}>Place Order</InertiaLink></button>
                      
                    </form>           
                    
                  </div>
                  {/* <div className="modal-footer">
                    
                  </div> */}
                  
                </div>
              </div>
            </div>
            {/* End of Modal */}
        <div className="container">
          
          {/* <section className="py-5 bg-light "> */}
          <section className="py-5 bg-yel" style={{backgroundImage: "url(/img/cart5.jpg)"}}>
            <div className="container">
              <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
                <div className="col-lg-6">
                  <h1 className="h2 text-uppercase mb-0">Cart</h1>
                </div>
                <div className="col-lg-6 text-lg-right">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Cart</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5">
            <h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
            <div className="row">
              <div className="col-lg-8 mb-4 mb-lg-0">
                
                <div className="table-responsive mb-4">
                  <table className="table">
                    <thead className="bg-light">
                      <tr>
                        <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Product</strong></th>
                        <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Price</strong></th>
                        <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Quantity</strong></th>
                        <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Total</strong></th>
                        <th className="border-0" scope="col"> </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartData
                      }
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-light px-4 py-3">
                  <div className="row align-items-center text-center">
                    <div className="col-md-6 mb-3 mb-md-0 text-md-left"><a className="btn btn-link p-0 text-dark btn-sm" href="shop.html"><i className="fas fa-long-arrow-alt-left mr-2"> </i>Continue shopping</a></div>
                    <div className="col-md-6 text-md-right"><InertiaLink className="btn btn-outline-dark btn-sm" data-toggle="modal" data-target="#exampleModal" >Place Order<i className="fas fa-long-arrow-alt-right ml-2"></i></InertiaLink></div>
                    {/* href={props.order_confirm} */}
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4">
                <div className="card border-0 rounded-0 p-lg-4 bg-light">
                  <div className="card-body">
                    <h5 className="text-uppercase mb-4">Payment Method</h5>
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold"><i className="fas fa-money-check-alt mr-1"></i>Bank Transfer</strong><span className="text-muted small"><input type="radio" name="payment" aria-label="Radio button for following text input" /></span></li>
                      <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold"><i className="fas fa-truck-moving mr-1"></i>Cash on Delivery</strong><span className="text-muted small"><input type="radio" name="payment" aria-label="Radio button for following text input" /></span></li>
                      <li className="border-bottom my-2"></li>
                      <li className="d-flex align-items-center justify-content-between mb-4"><strong className="text-uppercase small font-weight-bold">Total</strong><span>${props.cart.totalprice}</span></li>
                      <li>
                        <form action="#">
                          <div className="form-group mb-0">
                            <input className="form-control" type="text" placeholder="Enter your coupon" />
                            <button className="btn btn-dark btn-sm btn-block" type="submit"> <i className="fas fa-gift mr-2"></i>Apply coupon</button>
                          </div>
                        </form>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    )
}

export default Cart;