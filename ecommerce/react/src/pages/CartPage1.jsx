import React, {useContext , useEffect , useState} from "react"
import { cartContext } from "../global/cartContext"
import { productContext } from "../global/productContext"
import {Link, useNavigate} from "react-router-dom";
import AppURL from "../AppURL";
import axios from 'axios';
import {Button,Modal} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    // const placeOrder=()=>{
    //   let data = {
    //     cartData: shoppingCart,
    //     guest: loginMod,
    //   };
      
    //   axios.post(AppURL.storeOrder,data).then(response=>{
    //     console.dir(response.data);
    //     dispatch({type: 'EMPTY'})
    //     setRedirect(true);
    //     // console.dir(shoppingCart);
    //     }).catch(error=>{
            
    //     });
        
    // }

    const placeOrder=()=>{
      let data = {
        cartData: shoppingCart,
        guest: loginMod,
      };
      
      axios.post(AppURL.storeOrder,data,{
        headers: { "Content-Type": "application/json" }
      })
      .then(response=>{
            // console.dir(response.data);
            if(response.data.email){
              setError(response.data);
              setLoginMod(loginMod => ({...loginMod,show:true}));
            }
            if(response.data=="Record Entered Successfully"){
              dispatch({type: 'EMPTY'})
              setRedirect(true);
              toast.success('Order Placed Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            }

            
      })   
    }


    if(redirect){
      let navigate = useNavigate();
  
      // To redirect, use:
      navigate('/');
    }

    let cartData=<h3>Cart is empty</h3>;
    if(shoppingCart.length>0){
        const s_prod = Object.keys(shoppingCart).map(igKey=>{
            return shoppingCart[igKey];
        })
        // console.dir(s_prod);
        
          cartData = s_prod.map((prod,key)=>{
            return(
                <tr key={key}>
                            <th className="pl-0 border-light" scope="row">
                              <div className="media align-items-center"><a className="reset-anchor d-block animsition-link" to="detail.html"><img src={AppURL.Images+prod.i_path} alt="..." width="70"/></a>
                                <div className="media-body ml-3"><strong className="h6"><a className="reset-anchor animsition-link" to="detail.html">{prod.pname}</a></strong></div>
                              </div>
                            </th>
                            <td className="align-middle border-light">
                                  <p className="mb-0 small">${prod.price}</p>
                            </td>
                            <td className="align-middle border-light">
                              <div className="border d-flex align-items-center justify-content-between px-3"><span className="small text-uppercase text-gray headings-font-family">{prod.qty}</span>
                                <div className="quantity">
                                  <Link className="dec-btn p-0" ><i onClick={() => dispatch({type: 'DEC', id: prod.id, products})} className="fas fa-caret-left"></i></Link>
                                  <input className="form-control form-control-sm border-0 shadow-0 p-0" type="text" defaultValue={prod.qty} />
                                  <Link className="inc-btn p-0" ><i onClick={() => dispatch({type: 'INC', id: prod.id, products})} className="fas fa-caret-right"></i></Link>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle border-light">
                              <p className="mb-0 small">{prod.price * prod.qty}</p>
                            </td>
                            <td className="align-middle border-light"><a className="reset-anchor" to="#"><i className="fas fa-trash-alt small text-muted"></i></a></td>
                            </tr>
            )
        })

        
    }
    
    return(
        <>
        <div className="container">
      {/* Start of Modal  */}
      <Modal show={loginMod.show} >
        <Modal.Header >
          <Modal.Title>Please fill before placing the order</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <div className="modal-body">           
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Name</label>
                      <input type="text" value={loginMod.gsname} onChange={handleGuest} className="form-control" id="gsname" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" value={loginMod.email}  onChange={handleGuest} className="form-control" id="email" aria-describedby="emailHelp" />
                    {error.email?<small id="emailHelp" className="form-text text-danger">{error.email[0]}</small>:""}
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobilenum">Mobile Number</label>
                    <input type="text" value={loginMod.gscontact} onChange={handleGuest} className="form-control" id="gscontact" />
                    {error.gscontact?<small id="emailHelp" className="form-text text-danger">{error.gscontact[0]}</small>:""}
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" value={loginMod.gsaddress} onChange={handleGuest} className="form-control" id="gsaddress" />
                  </div>       

                  <button type="button" className="btn btn-secondary" onClick={handleClose} data-dismiss="modal">Close</button>
                  <button  type="submit" className="btn btn-primary ml-1">Place Order
                  
                  </button>
                  
                </form>           
                
              </div>
        
      </Modal>
      {/* End of Modal */}
      {/* <section className="py-5 bg-light "> PAGE START  */}
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
                <div className="col-md-6 text-md-right"><Link className="btn btn-outline-dark btn-sm" data-toggle="modal" data-target="#exampleModal" onClick={submitHandler}>Place Order<i className="fas fa-long-arrow-alt-right ml-2"></i></Link></div>
                {/* href={props.order_confirm} */}
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card border-0 rounded-0 p-lg-4 bg-light">
              <div className="card-body">
                <h5 className="text-uppercase mb-4">Payment Method</h5>
                <ul className="list-unstyled mb-0">
                  <form>
                  <li className="d-flex align-items-center justify-content-between mb-2"><strong className="text-uppercase small font-weight-bold"><i className="fas fa-money-check-alt mr-1"></i> Bank Transfer</strong><span className="text-muted small"><input  value="COD" id="paymentMethod" type="radio" name="payment" aria-label="Radio button for following text input" /></span></li>
                  <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold"><i className="fas fa-truck-moving mr-1"></i> Cash on Delivery</strong><span className="text-muted small"><input  value="Bank" id="paymentMethod" type="radio" name="payment" aria-label="Radio button for following text input" /></span></li>
                  </form>
                  <li className="border-bottom my-2"></li>
                  <li className="d-flex align-items-center justify-content-between mb-4"><strong className="text-uppercase small font-weight-bold">Total</strong><span>${totalPrice}</span></li>
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
    <ToastContainer />
        </>
    )
}

export default CartPage
