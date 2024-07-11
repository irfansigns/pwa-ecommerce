import React,{useState , useRef} from 'react';
import {Inertia} from '@inertiajs/inertia';

const Edit =  (props) =>{
    const {id , name , quantity , price , ipath} = props;
    const thumbnailRef = useRef(null);
    const [values , setValues] = useState({
        name ,  quantity , price 
    });

    function handleSubmit(e){
    e.preventDefault();
    // console.log(values);
    const formData = new FormData();
    formData.append('name' , values.name);
    formData.append('price' , values.price);
    formData.append('quantity' , values.quantity);
    formData.append('thumbnail',thumbnailRef.current.files[0]);
    formData.append('_method', 'PUT');
    Inertia.post('/products/' + id,formData);
    }

    function handleChange(e){
        e.persist();
        setValues(values => ({...values,[e.target.id]: e.target.value}));
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
                        <div className="form-group">
                            <label htmlFor="name">Product Name</label>
                            <input type="text" value={values.name} className="form-control" id="name" aria-describedby="prodName" onChange={handleChange} />
                            <small id="prodName" className="form-text text-muted">Please Enter Product Name.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input type="text" value={values.price} id="price" className="form-control" onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="Quantity">Quantity</label>
                            <input type="text" value={values.quantity} className="form-control" id="quantity" onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="thumbnail">Product Picture</label>
                            <input ref={thumbnailRef} type="file" className="form-control" id="thumbnail" value={values.thumbnail} />
                        </div>

                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit;