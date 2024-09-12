import React from 'react'
import Orders from '../components/Orders'
import {  useNavigate } from 'react-router-dom'

const Profile = () => {
    
    let loggedUser = "";
    if (localStorage.getItem("user")) {
      loggedUser = localStorage.getItem("user");
      const userData = JSON.parse(loggedUser);
      console.log(userData);
      return (
        <>
        <section style={{"backgroundColor" : "#eee"}}>
           <div className="container py-5 ">

<div className="row">
  <div className="col-lg-4">
    <div className="card mb-4">
      <div className="card-body text-center">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{"width" : "150px"}} />
        <h5 className="my-3">{loggedUser.name}</h5>
        <p className="text-muted mb-1">Full Stack Developer</p>
        <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
        <div className="d-flex justify-content-center mb-2">
          <button type="button" className="btn btn-primary">Follow</button>
          <button type="button" className="btn btn-outline-primary ms-1">Message</button>
        </div>
      </div>
    </div>
    <div className="card mb-4 mb-lg-0">
      <div className="card-body p-0">
        <ul className="list-group list-group-flush rounded-3">
          <li className="list-group-item d-flex justify-content-between align-items-center p-3">
            <i className="fas fa-globe fa-lg text-warning"></i>
            <p className="mb-0">https://mdbootstrap.com</p>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center p-3">
            <i className="fab fa-github fa-lg" style={{ "color" : "#333333"}} ></i>
            <p className="mb-0">mdbootstrap</p>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center p-3">
            <i className="fab fa-twitter fa-lg" style={{"color" : "#55acee"}} ></i>
            <p className="mb-0">@mdbootstrap</p>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center p-3">
            <i className="fab fa-instagram fa-lg" style={{"color" : "#ac2bac"}} ></i>
            <p className="mb-0">mdbootstrap</p>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center p-3">
            <i className="fab fa-facebook-f fa-lg" style={{"color" : "#3b5998"}} ></i>
            <p className="mb-0">mdbootstrap</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col-lg-8">
    <div className="card mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Full Name</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">{userData.name}</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Email</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">{userData.email}</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Mobile</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">{userData.contact}</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Address</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">{userData.address}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      
      <div className="col-md-12">
        <div className="card mb-4 mb-md-0">
          
            <Orders />        
         
        </div>
      </div>
    </div>
  </div>
</div>
</div> 
</section>
</>
    )
    }else{
      let navigate = useNavigate();
  
  // To redirect, use:
  navigate('/');
    }

    
}

export default Profile
