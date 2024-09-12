import React,{useState} from 'react';
import AppURL from '../AppURL';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const Register = (props) =>{
    
  const [values , setValues] = useState({
    name:'',
    email : '',
    contact:'',
    address:'',
    password : '',
    loggedIn:false
  });

  function handleSubmit(e){
    e.preventDefault();
    console.log(values);

    const formData = new FormData();
    formData.append('name' , values.name);
    formData.append('email' , values.email);
    formData.append('contact' , values.contact);
    formData.append('address' , values.address);
    formData.append('password' , values.password);
    
    axios.post(AppURL.UserRegister,formData).then(response =>{ 
      localStorage.setItem('token',response.data.token);
      localStorage.setItem('user',response.data.user);
      setValues(values => ({...values,loggedIn:true}));
      // console.dir(response.data.user);
    }).catch(error=>{

    }); 
  }

  function handleChange(e){
    e.persist();
    setValues(values => ({...values,[e.target.id]: e.target.value}));
  }

  if(localStorage.getItem("user")){
    let navigate = useNavigate();
  
    // To redirect, use:
    navigate('/profile');
  } else{


    return (
    <>
	<section className="vh-50 login-bg">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card login-card">
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" className="img-fluid login-img" />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={handleSubmit}>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3 login-i"></i>
                    <span className="h1 fw-bold mb-0">User Login</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3 login-h5">Sign into your account</h5>

                  <div className="form-outline mb-4">
                    <input type="name" value={values.name} onChange={handleChange} id="name" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="name">Name</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="email" value={values.email} onChange={handleChange} id="email" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="email">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="contact" value={values.contact} onChange={handleChange} id="contact" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="contact">Cell Number</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="address" value={values.address} onChange={handleChange} id="address" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="address">Address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" value={values.password} onChange={handleChange} id="password" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="password">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>

                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2 login-p">Don't have an account? <a className="login-a" href="#!"
                      >Register here</a></p>
                  <a href="#!" className="small text-muted">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
    )}
}

export default Register
