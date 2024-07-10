import React,{useState , useRef} from 'react';
import {Inertia} from '@inertiajs/inertia';

const register = ({errors}) =>{
    const [values , setValues] = useState({
        name : '',
        email : '',
        password : '',
        password_confirmation : ''
    });

    function handleSubmit(e){
    e.preventDefault();
    // console.log(values);
    const formData = new FormData();
    formData.append('name' , values.name);
    formData.append('email' , values.email);
    formData.append('password' , values.password);
    formData.append('password_confirmation' , values.password_confirmation);
    
    Inertia.post('/register',formData);
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
                            <form method="POST" onSubmit={handleSubmit} action="/register" >
                            
                                <div className="form-group row">
                                    <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Name</label>
                                    <div className="col-md-6">
                                        <input id="name" type="text" className="form-control" value={values.name} onChange={handleChange} required /> 
                            {errors.name && <span className="invalid-feedback" role="alert">
                                                <strong>{errors.name}</strong>
                                            </span> }
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="email" className="col-md-4 col-form-label text-md-right">Email Address</label>

                                    <div className="col-md-6">
                                        <input id="email" type="email" className="form-control" name="email" value={values.email} onChange={handleChange} required />

                                        
                            {errors.email &&<span className="invalid-feedback" role="alert">
                                                <strong>{errors.email}</strong>
                                            </span> }
                                        
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                    <div className="col-md-6">
                                        <input id="password" type="password" value={values.password} onChange={handleChange} className="form-control" name="password" required />
                        {errors.password && <span className="invalid-feedback" role="alert">
                                                <strong>{errors.password}</strong>
                                            </span>     }   
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="password_confirmation" className="col-md-4 col-form-label text-md-right">Confirm Password</label>

                                    <div className="col-md-6">
                                        <input id="password_confirmation" type="password" value={values.password_confirmation} onChange={handleChange} className="form-control" name="password_confirmation" required />
                                    </div>
                                </div>

                                <div className="form-group row mb-0">
                                    <div className="col-md-6 offset-md-4">
                                        <button type="submit" className="btn btn-primary">
                                            Register
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

export default register;

