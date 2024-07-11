import React, {useState , useReducer} from 'react';
import {Inertia , InertiaLink, usePage} from '@inertiajs/inertia-react';
import {ProductReducer} from './productReducer';
import Footer from './Footer';
import Category from './Category';
import Navbar from './Navbar';
import axios from 'axios';
import route from "ziggy-js";
import AdminProducts from './AdminProducts';
import AdminForm from './AdminForm';
import ProductForm from './NewApp/ProductForm';
import NewProduct from './NewProduct';
import NewCategory from './NewCategory';

const DashContent = (props) =>{
   
    const [items , showItems] = useState(false);
    const [cat , setCat] = useState();
    
    const page = usePage();

    const handleSubmit = (e) =>{
      e.preventDefault();
      if(cat){
        showItems(true);
      }else{
        alert("Choose one category");
      }
    }

    const handleChange = (e) =>{
      setCat(e.target.value);
    }

    const resetProducts = (e) =>{
      showItems(false);
    }
  

    return(
        <>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-11 col-11 mx-auto">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
              </nav>
              <div className="row">
                <div className="col-lg-2 col-md-2 d-md-block">
                  <div className="card bg-common card-left">
                    <nav className="nav flex-column">
                      <a data-toggle="tab" className="nav-link" aria-current="page" href="#profile">
                        <i className="fas fa-user mr-2"></i>Profile</a>
                      <a data-toggle="tab" className="nav-link" href="#setting">
                        <i className="fas fa-user-cog mr-2"></i>Account Settings</a>
                      <a data-toggle="tab" className="nav-link" href="#notification">
                        <i className="fas fa-bell mr-2"></i>New Category</a>
                      <a data-toggle="tab" className="nav-link" href="#security">
                        <i className="fas fa-user-shield mr-2"></i>Security</a>
                      <a  data-toggle="tab" className="nav-link" href="#billing">
                        <i className="fas fa-money-check-alt mr-2"></i>New Product</a>
                      <a onClick={resetProducts} data-toggle="tab" className="nav-link" href="#product">
                        <i className="fas fa-tshirt mr-2 active"></i>Products</a>
                      <a data-toggle="tab" className="nav-link" href="#slider">
                        <i className="fas fa-camera mr-2 active"></i>Slider Images</a>
                      <a data-toggle="tab" className="nav-link" href="#siteData">
                        <i className="fas fa-list-alt mr-2 active"></i>Site Data</a>
                    </nav>
                  </div>
                </div>

                <div className="col-lg-10 col-md-9">
                  <div className="card">
                    <div className="card-header border-bottom mb-3">
                      <ul className="nav nav-tabs card-header-tabs nav-fill">
                        <li className="nav-item">
                          <a data-toggle="tab" className="nav-link " aria-current="page" href="#profile">
                          <i className="fas fa-user mr-2"></i></a></li>
                        <li className="nav-item">
                          <a data-toggle="tab" className="nav-link" aria-current="page" href="#setting">
                          <i className="fas fa-user-cog mr-2"></i></a></li>
                        <li className="nav-item">
                          <a data-toggle="tab" className="nav-link" aria-current="page" href="#notification">
                          <i className="fas fa-bell mr-2"></i></a></li>
                        <li className="nav-item">
                          <a data-toggle="tab" className="nav-link" aria-current="page" href="#security">
                          <i className="fas fa-user-shield mr-2"></i></a></li>
                        <li className="nav-item">
                          <a data-toggle="tab" className="nav-link" aria-current="page" href="#billing">
                          <i className="fas fa-money-check-alt mr-2"></i></a></li>
                        <li className="nav-item">
                          <a data-toggle="tab" className="nav-link " aria-current="page" href="#product">
                          <i className="fas fa-tshirt mr-2"></i></a></li>
                        <li className="nav-item">
                          <a data-toggle="tab" className="nav-link " aria-current="page" href="#slider">
                          <i className="fas fa-camera mr-2"></i></a></li>
                        <li className="nav-item">
                          <a data-toggle="tab" className="nav-link " aria-current="page" href="#siteData">
                          <i className="fas fa-list-alt mr-2"></i></a></li>
                          
                          
                          
                      </ul>
                    </div>

                    <div className="card-body tab-content border-0">
                      <div className="tab-pane " id="profile">
                        <h6>YOUR PROFILE INFORMATION</h6>
                        <hr />
                        <form>
                          <div className="mb-3">
                            <label htmlFor="examplename" className="form-label">Email</label>                            
                            <input type="text" className="form-control-plaintext" id="examplename" />
                            
                          </div>
                          <div className="mb-3">
                            <label htmlFor="exampleTextArea" className="form-label">Your Bio</label>
                            <textarea className="form-control" id="exampleTextArea" placeholder="I am a full stack developer freelancer."></textarea>                          
                          </div>
                          <div className="mb-3">
                            <label htmlFor="examplurl" className="form-label">URL</label>                            
                            <input type="text" className="form-control-plaintext" id="examplurl" />
                          </div>
                          <br />
                          <button className="btn btn-outline-info" type="button">Update Profile</button>
                          <button className="btn btn-outline-info ml-1" type="reset">Reset Changes</button>
                        </form>
                      </div>
                      <div className="tab-pane" id="setting">
                        <h6>YOUR ACCOUNT SETTINGS</h6>
                        <hr />
                        <form>
                          <div className="mb-3">
                            <label htmlFor="exampluser" className="form-label">Username</label>                            
                            <input type="text" className="form-control-plaintext" id="exampluser" />
                          </div>
                        </form>
                        <hr />
                        <form>
                          <div className="mb-3">
                            <label htmlFor="examplinput2" className="form-label text-danger">Delete Account</label>
                            <p id="examplinput2" className="text-muted">Once you delete your account there's no way back.</p>
                            <button className="btn btn-danger">Delete Account</button>
                          </div>
                        </form>
                      </div>
                      <div className="tab-pane" id="notification">
                        <h6>NEW CATEGORY</h6>
                        <hr />
                        <NewCategory />
                      </div>
                      <div className="tab-pane" id="security">
                        <h6>YOUR SECURITY</h6>
                        <hr />
                        <form>
                          <div className="mb-3">
                            <input type="password" className="form-control" id="examplpass" placeholder="Enter Your Old Password"></input>
                            <br />
                            <input type="password" className="form-control" id="examplpass" placeholder="Enter Your New Password"></input>
                            <input type="password" className="form-control" id="examplpass" placeholder="Enter Your New Password"></input><br />
                            <button className="btn btn-primary">Update Password</button>
                          </div>
                        </form>
                        <hr />
                        <form>
                          <div className="form-group">
                          <label htmlFor="examplinput2" className="d-block mb-2">Two Factor Authentication</label>
                          <button className="btn btn-outline-info mb-1" type="button">Enable Two-Factor Authentication</button>
                          <p className="text-muted small">Two factor authentication adds additional layer of authentication to your account</p>
                          </div>
                        </form>
                      </div>
                      <div className="tab-pane" id="billing">
                        <h6>NEW PRODUCT</h6>
                        <hr />
                        <form>
                          <div className="mb-3">
                            <label className="d-block">Product Entry</label>
                            <h4>ENTER NEW PRODUCT</h4>
                            <NewProduct />
                          </div>
                        </form>
                      </div>

                      <div className="tab-pane active" id="product">
                        <h6>YOUR PRODUCTS</h6>
                          <div className="container">
                              <section className="py-2">
                                  <div className="card mb-4" id="tables">
                                    <div className="card-header">Categories</div>
                                    <div className="card-body">
                                      {items?<AdminProducts
                                      category = {cat}
                                      deleteRoute = {props.delRoute}
                                      />
                                      :<AdminForm
                                      change={handleChange}
                                      submit={handleSubmit}
                                      />}                                    
                                      
                                      
                                    </div>
                                  </div>
                              </section>
                            </div>
                      </div>

                      <div className="tab-pane " id="slider">
                        <h6>SELECT IMAGES FOR MAIN SLIDER</h6>
                        <hr />
                        
                      </div>

                      <div className="tab-pane " id="siteData">
                        <h6>Enter Contact and AboutUs Information</h6>
                        <hr />
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
 
export default DashContent;