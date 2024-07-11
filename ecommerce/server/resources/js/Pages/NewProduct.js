import React,{useState , useRef} from 'react';
import {Inertia} from '@inertiajs/inertia';
import {usePage} from '@inertiajs/inertia-react';

const NewProduct = (props) =>{
    const thumbnailRef = useRef(null);
    const detailImg = useRef(null);
    const page = usePage();
    const [values , setValues] = useState({
        name : '',
        price: '',
        quantity: '',
        category:'',
        featured:false
    });

    const cat = page.props.categories;
    const aname = page.props.appName;
    // console.log(cat); Everytime i write something in Input field whole component rereders?

    function handleSubmit(e){
    e.preventDefault();
    // console.log(values);
    const formData = new FormData();
    formData.append('name' , values.name);
    formData.append('price' , values.price);
    formData.append('quantity' , values.quantity);
    formData.append('category' , values.category);
    formData.append('featured' , values.featured);
    formData.append('thumbnail' , thumbnailRef.current.files[0]);
    //formData.append('detailImg' , detailImg.current.files);

    for (let i = 0; i < detailImg.current.files.length; i++) {
        formData.append('IoFiles[]', detailImg.current.files[i]);
    }
    Inertia.post('/nproduct',formData);
    }

    function handleChange(e){
        e.persist();
        setValues(values => ({...values,[e.target.id]: e.target.value}));
    }

    function onChangeFeatured() {
        setValues(values=>({...values,featured:!values.featured}))    
    }
    

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="form-group">
                            <label htmlFor="name">Product Name</label>
                            <input type="text" value={values.name} className="form-control" id="name" aria-describedby="prodName" onChange={handleChange} />
                            <small id="prodName" className="form-text text-muted">Please Enter Product Name.</small>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="category">Brand</label>
                            </div>
                            <select value={values.category} className="custom-select" id="category" onChange={handleChange}>
                                <option value="0">Choose...</option>
                                {
                                    cat.map(category=>{
                                        return(
                                            <option key={category.id} value={category.id}>{category.cname}</option>
                                        )
                                    })
                                }
                            </select>
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

                        <div className="form-group">
                            <label htmlFor="detailImg">Product Picture</label>
                            <input ref={detailImg} type="file" multiple className="form-control" id="detailImg" />
                        </div>

                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="featured"
                            checked={values.featured}
                            onChange={onChangeFeatured}
                             />
                            <label className="form-check-label" htmlFor="exampleCheck1">Featured</label>
                        </div>

                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewProduct;