import React, {useContext , useEffect , useState} from "react"
import { cartContext } from "../context/cartContext";
import { productContext } from "../context/productContext";
import {Link, useNavigate} from "react-router-dom";
import axiosClient from "../axiosClient";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const CartPage = () => {
    const {dispatch, shoppingCart, totalPrice, qty , user} = useContext(cartContext);
    const [error,setError] = useState('');
    const {products} = useContext(productContext);
    const [redirect,setRedirect] = useState(false);
    const [loginMod,setLoginMod] = useState({
      show:false,
      gsname:'',
      email:'',
      gsaddress:'',
      gscontact:''
    });
    
    const navigate = useNavigate();

    // toast.success('Order Placed Successfully!', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     });

    function handleClose(){
      setLoginMod(loginMod => ({...loginMod,show:false}));
    }

    function handleGuest(e){
      e.persist();
      setLoginMod(loginMod => ({...loginMod,[e.target.id]: e.target.value}));
    }
    
    const submitHandler = (e) =>{
      
      e.preventDefault();
            // alert("Order placed");
      if(user || loginMod.gsname && loginMod.email && loginMod.gsaddress && loginMod.gscontact){
        // alert("USER IS LOGGED IN");
        placeOrder();
      }else{   
        // alert("User is not logged In");
        setLoginMod(loginMod => ({...loginMod,show:true}));
        // $('#guestModal').modal('show');
      }
    }

    const placeOrder=()=>{
      let data = {
        cartData: shoppingCart,
        guest: loginMod,
      };
      
      
      axiosClient.storeOrder(data)
      .then(response=>{
            // console.dir(response.data);
            if(response.data.email){
              setError(response.data);
              setLoginMod(loginMod => ({...loginMod,show:true}));
            }
            if(response.data=="Record Entered Successfully"){
                console.log(response.data);
              dispatch({type: 'EMPTY'});

              navigate('/', { 
                  //an object named 'state' is passed with 'navigate' which will be accessed using location hook on home page.
                state: { 
                    showToast: true,
                    toastMessage: 'Order Placed Successfully!',
                    toastType: 'success' // You can optionally customize the toast type
                } 
              });
              
            }            
      })   
    }


    if(redirect){
        console.log("Navigate");
    //   let navigate = useNavigate();
  
      // To redirect, use:
    //   navigate('/');
    }

    let cartData=<h3>Cart is empty</h3>;
    if(shoppingCart.length>0){
        const s_prod = Object.keys(shoppingCart).map(igKey=>{
            return shoppingCart[igKey];
        })
        // console.dir(s_prod);
        
          cartData = s_prod.map((prod,key)=>{
            return(

                <tr className="cart-row cart-flex position-relative">
                    <td className="cart-delete text-center small-hide"><a href="#" className="cart-remove remove-icon position-static" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove to Cart"><i className="icon anm anm-times-r"></i></a></td>
                    <td className="cart-image cart-flex-item">
                        <a href="product-layout1.html"><img className="cart-image rounded-0 blur-up lazyload" src={axiosClient.Images+prod.i_path} alt="Sunset Sleep Scarf Top" width="120" height="170" /></a>
                    </td>
                    <td className="cart-meta small-text-left cart-flex-item">
                        <div className="list-view-item-title">
                            <a href="product-layout1.html">{prod.pname}</a>
                        </div>
                        <div className="cart-meta-text">
                            Color: Black<br />Size: Small<br />Qty: {prod.qty}
                        </div>
                        <div className="cart-price d-md-none">
                            <span className="money fw-500">Rs.{prod.price}</span>
                        </div>
                    </td>
                    <td className="cart-price cart-flex-item text-center small-hide">
                        <span className="money">Rs.{prod.price}</span>
                    </td>
                    <td className="cart-update-wrapper cart-flex-item text-end text-md-center">
                        <div className="cart-qty d-flex justify-content-end justify-content-md-center">
                            <div className="qtyField">
                                <Link className="qtyBtn minus" onClick={() => dispatch({type: 'DEC', id: prod.id, products})}><i className="icon anm anm-minus-r"></i></Link>
                                <input className="cart-qty-input qty" type="text" name="updates[]" Value={prod.qty} pattern="[0-9]*" />
                                <Link className="qtyBtn plus" onClick={() => dispatch({type: 'INC', id: prod.id, products})}><i className="icon anm anm-plus-r"></i></Link>
                            </div>
                        </div>
                        <a href="#" title="Remove" className="removeMb d-md-none d-inline-block text-decoration-underline mt-2 me-3">Remove</a>
                    </td>
                    <td className="cart-price cart-flex-item text-center small-hide">
                        <span className="money fw-500">Rs.{prod.price * prod.qty}</span>
                    </td>
                </tr>

                // <tr key={key}>
                //             <th className="pl-0 border-light" scope="row">
                //               <div className="media align-items-center"><a className="reset-anchor d-block animsition-link" to="detail.html"><img src={AppURL.Images+prod.i_path} alt="..." width="70"/></a>
                //                 <div className="media-body ml-3"><strong className="h6"><a className="reset-anchor animsition-link" to="detail.html">{prod.pname}</a></strong></div>
                //               </div>
                //             </th>
                //             <td className="align-middle border-light">
                //                   <p className="mb-0 small">${prod.price}</p>
                //             </td>
                //             <td className="align-middle border-light">
                //               <div className="border d-flex align-items-center justify-content-between px-3"><span className="small text-uppercase text-gray headings-font-family">{prod.qty}</span>
                //                 <div className="quantity">
                //                   <Link className="dec-btn p-0" ><i onClick={() => dispatch({type: 'DEC', id: prod.id, products})} className="fas fa-caret-left"></i></Link>
                //                   <input className="form-control form-control-sm border-0 shadow-0 p-0" type="text" defaultValue={prod.qty} />
                //                   <Link className="inc-btn p-0" ><i onClick={() => dispatch({type: 'INC', id: prod.id, products})} className="fas fa-caret-right"></i></Link>
                //                 </div>
                //               </div>
                //             </td>
                //             <td className="align-middle border-light">
                //               <p className="mb-0 small">{prod.price * prod.qty}</p>
                //             </td>
                //             <td className="align-middle border-light"><a className="reset-anchor" to="#"><i className="fas fa-trash-alt small text-muted"></i></a></td>
                //             </tr>
            )
        }) 
    }
    
    return(
        <>
      <div id="page-content"> 
               
                <div className="page-header text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center">
                                <div className="page-title"><h1>Your Shopping Cart Style1</h1></div>
                            
                                <div className="breadcrumbs"><a href="index.html" title="Back to the home page">Home</a><span className="main-title"><i className="icon anm anm-angle-right-l"></i>Your Shopping Cart Style1</span></div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container">     
                    <div className="row">
                        
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 main-col">
                            <div className="alert alert-success py-2 alert-dismissible fade show cart-alert" role="alert">
                                <i className="align-middle icon anm anm-truck icon-large me-2"></i><strong className="text-uppercase">Congratulations!</strong> You've got free shipping!
                                <button type="button"  className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                           
                            <form action="#" method="post" className="cart-table table-bottom-brd">
                                <table className="table align-middle">
                                    <thead className="cart-row cart-header small-hide position-relative">
                                        <tr>
                                            <th className="action">&nbsp;</th>
                                            <th colspan="2" className="text-start">Product</th>
                                            <th className="text-center">Price</th>
                                            <th className="text-center">Quantity</th>
                                            <th className="text-center">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {
                                            cartData
                                        }
                                        
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colspan="3" className="text-start"><a href="#" className="btn btn-outline-secondary btn-sm cart-continue"><i className="icon anm anm-angle-left-r me-2 d-none"></i> Continue shopping</a></td>
                                            <td colspan="3" className="text-end">
                                                <button type="submit" name="clear" className="btn btn-outline-secondary btn-sm small-hide"><i className="icon anm anm-times-r me-2 d-none"></i> Clear Shoping Cart</button>
                                                <button type="submit" name="update" className="btn btn-secondary btn-sm cart-continue ms-2"><i className="icon anm anm-sync-ar me-2 d-none"></i> Update Cart</button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table> 
                            </form>    
                           

                            
                        </div>
                        
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 cart-footer">
                            <div className="cart-info sidebar-sticky">
                                <div className="cart-order-detail cart-col">
                                    <div className="row g-0 border-bottom pb-2">
                                        <span className="col-6 col-sm-6 cart-subtotal-title"><strong>Subtotal</strong></span>
                                        <span className="col-6 col-sm-6 cart-subtotal-title cart-subtotal text-end"><span className="money">Rs.{totalPrice}</span></span>
                                    </div>
                                    <div className="row g-0 border-bottom py-2">
                                        <span className="col-6 col-sm-6 cart-subtotal-title"><strong>Coupon Discount</strong></span>
                                        <span className="col-6 col-sm-6 cart-subtotal-title cart-subtotal text-end"><span className="money">-Rs.00</span></span>
                                    </div>
                                    <div className="row g-0 border-bottom py-2">
                                        <span className="col-6 col-sm-6 cart-subtotal-title"><strong>Tax</strong></span>
                                        <span className="col-6 col-sm-6 cart-subtotal-title cart-subtotal text-end"><span className="money">Rs.00</span></span>
                                    </div>
                                    <div className="row g-0 border-bottom py-2">
                                        <span className="col-6 col-sm-6 cart-subtotal-title"><strong>Shipping</strong></span>
                                        <span className="col-6 col-sm-6 cart-subtotal-title cart-subtotal text-end"><span className="money">Rs.250</span></span>
                                    </div>
                                    <div className="row g-0 pt-2">
                                        <span className="col-6 col-sm-6 cart-subtotal-title fs-6"><strong>Total</strong></span>
                                        <span className="col-6 col-sm-6 cart-subtotal-title fs-5 cart-subtotal text-end text-primary"><b className="money">Rs.{totalPrice + 250}</b></span>
                                    </div>

                                    <p className="cart-shipping mt-3">Shipping &amp; taxes calculated at checkout</p>
                                    <p className="cart-shipping fst-normal freeShipclaim"><i className="me-2 align-middle icon anm anm-truck-l"></i><b>FREE SHIPPING</b> ELIGIBLE</p>
                                    <div className="customCheckbox cart-tearm">
                                        <input type="checkbox" value="allen-vela" id="cart-tearm" />
                                        <label htmlFor="cart-tearm">I agree with the terms and conditions</label>
                                    </div>
                                    <Link onClick={submitHandler} id="cartCheckout" className="btn btn-lg my-4 checkout w-100">Place Order</Link>
                                    <div className="paymnet-img text-center"><img src="assets/images/icons/safepayment.png" alt="Payment" width="299" height="28" /></div>
                                </div>                               
                            </div>
                        </div>
                       
                    </div>
                </div>
              {/* Modal Start  */}
             
            <div className={`newsletter-modal style2 modal fade ${loginMod.show ? 'show' : ''}`} style={{ display: loginMod.show ? 'block' : 'none' }} id="newsletter_modal" tabIndex="-1" aria-hidden={!loginMod.show}>           
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content border-0">
                        <div className="modal-body p-0 whiteText">
                            <button type="button" className="btn-close" onClick={handleClose} data-bs-dismiss="modal" aria-label="Close"><i className="icon anm anm-times-l"></i></button>
                            <div className="newsletter-wrap d-flex flex-row align-items-center">
                                <div className="newsltr-img overlay position-absolute w-100 h-100 bg-size overflow-hidden">
                                    <img className="bg-img blur-up" src={axiosClient.Images+"/logo/guestLogin.jpg"} alt="image" width="546" height="392" />
                                </div>
                                <div className="newsltr-text text-center w-100">
                                    <div className="wraptext mw-100">
                                        <h2 className="title mb-2">Please enter your info</h2>
                                        
                                        <form onSubmit={submitHandler} className="mcNewsletter mb-3">                               
                                        
                                        <div className="form-group row">
                                            <label inputFor="gsname" className="col-sm-2 col-form-label">Name</label>
                                            <div className="col-sm-10">
                                            <input value={loginMod.gsname} onChange={handleGuest} type="text" className="form-control" id="gsname" placeholder="Type your name" />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label inputFor="" className="col-sm-2 col-form-label">Email</label>
                                            <div className="col-sm-10">
                                            <input type="email" value={loginMod.email} onChange={handleGuest} className="form-control" id="email" placeholder="Enter your email address" />
                                            {error.email?<small id="emailHelp" className="form-text text-danger">{error.email[0]}</small>:""}
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label inputFor="mobilenum" className="col-sm-2 col-form-label">Phone</label>
                                            <div className="col-sm-10">
                                            <input type="" value={loginMod.gscontact} onChange={handleGuest} className="form-control" id="gscontact" placeholder="Enter your mobile number" />
                                            {error.gscontact?<small id="emailHelp" className="form-text text-danger">{error.gscontact[0]}</small>:""}
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label inputFor="address" className="col-sm-2 col-form-label">Address</label>
                                            <div className="col-sm-10">
                                            <input type="text" value={loginMod.gsaddress} onChange={handleGuest} className="form-control" id="gsaddress" placeholder="Enter your address" />
                                            </div>
                                        </div>

                                        <button type="button" className="btn btn-primary ml-1">Place Order</button>
                                        {/* className="btn btn-lg my-4 checkout w-100"  */}
                                        </form>
                                        {/* <ul className="list-inline social-icons d-inline-flex justify-content-center mb-3 w-100">
                                            <li className="list-inline-item"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook"><i className="icon anm anm-facebook-f"></i></a></li>
                                            <li className="list-inline-item"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter"><i className="icon anm anm-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Pinterest"><i className="icon anm anm-pinterest-p"></i></a></li>
                                            <li className="list-inline-item"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Linkedin"><i className="icon anm anm-linkedin-in"></i></a></li>
                                            <li className="list-inline-item"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram"><i className="icon anm anm-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Youtube"><i className="icon anm anm-youtube"></i></a></li>
                                        </ul> */}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
              {/* Modal End  */}
            </div>
            
        </>
    )
}

export default CartPage
