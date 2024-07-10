import React,{useState , useRef} from 'react';
import {Inertia} from '@inertiajs/inertia';

const login = (props) =>{
    const [values , setValues] = useState({
        email : '',
        password : ''
    });

    function handleSubmit(e){
    e.preventDefault();
    // console.log(values);
    const formData = new FormData();
    formData.append('email' , values.email);
    formData.append('password' , values.password);
    
    Inertia.post('/login',formData);
    }

    function handleChange(e){
        e.persist();
        setValues(values => ({...values,[e.target.id]: e.target.value}));
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header"></div>

                        <div className="card-body">
                            <form method="POST" onSubmit={handleSubmit} action="/login" >
                    

                                <div className="form-group row">
                                    <label htmlFor="email" className="col-md-4 col-form-label text-md-right">Email Address</label>

                                    <div className="col-md-6">
                                        <input id="email" type="email" className="form-control" name="email" value={values.email} onChange={handleChange} required />

                                        
                            <small>{props.errors.email }</small>
                                        
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                    <div className="col-md-6">
                                        <input id="password" type="password" value={values.password} onChange={handleChange} className="form-control" name="password" required />
                        {props.errors.password && <span className="invalid-feedback" role="alert">
                                                <strong>{props.errors.password}</strong>
                                            </span>     }   
                                    </div>
                                </div>

                                <div className="form-group row mb-0">
                                    <div className="col-md-6 offset-md-4">
                                        <button type="submit" className="btn btn-primary">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login;

