import React,{useState , useRef , useEffect} from 'react';
import {Inertia} from '@inertiajs/inertia';
import {InertiaLink, usePage} from '@inertiajs/inertia-react';
import Loader from '../Loader';
import axios from 'axios';
import route from "ziggy-js";

const ProductForm = (props) =>{
    
    useEffect(()=>{
        
        // if(props.product.description_id){
        //     // alert("Description Showing");
        //     axios.get(route('prod.des',{id:props.product.id})).then(de=>{
        //         document.getElementById('description').value = de.data;
        //     })
        // }

      
            document.getElementById('description').value = props.description;
            
       

        
    },[]);

    const page = usePage();
    const thumbnailRef = useRef(null);
    const detailImg = useRef(null);
    const descrip = useRef(null);
    const [values , setValues] = useState({
        name : props.product.pname,
        price: props.product.price,
        quantity: props.product.qty,
        category:props.product.category_id,
        // description:props.product.description_id
    });
    const [state , setState] = useState({
        showLoader:false
    })
    
    console.log(page.props);
    // console.log(form_error);
    const cat = props.categories;
    // console.log(props.submitUrl);
    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('name' , values.name);
        formData.append('price' , values.price);
        formData.append('quantity' , values.quantity);
        formData.append('category' , values.category);
        formData.append('thumbnail' , thumbnailRef.current.files[0]);
        formData.append('description' , descrip.current.value);
        // formData.append('_method' , props.method);
        if(props.method){
            // alert("Method is coming");
            formData.append('_method' , props.method);
        }
        
        //formData.append('detailImg' , detailImg.current.files);
    
        for (let i = 0; i < detailImg.current.files.length; i++) {
            formData.append('IoFiles[]', detailImg.current.files[i]);
        }
        Inertia.post(props.submitUrl,formData,{
            onStart:()=>{
                setState({ ...state, showLoader: true })
            },

            onFinish:()=>{
                setState({ ...state, showLoader: false })
            }
        });
        
    }

    function handleChange(e){
        e.persist();
        setValues(values => ({...values,[e.target.id]: e.target.value}));
    }

    return(
        
        <div className="col-md-6">
            {state.showLoader? (<Loader />) : ''}
            <form method="POST" onSubmit={handleSubmit}  encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="name">Product Name</label>
                    <input type="text" value={values.name} className="form-control" id="name" aria-describedby="prodName" onChange={handleChange} />
                    {page.props.errors?.name && (
                    <small id="prodName" className="form-text text-muted">{page.props.errors.name[0]}</small>
                    )}
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
                                    <option key={category.id} value={category.id}>{category.catname}</option>
                                )
                            })
                        }
                    </select>
                    {page.props.errors?.category && (
                    <small id="prodName" className="form-text text-muted">{page.props.errors.category[0]}</small>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" value={values.price} id="price" className="form-control" onChange={handleChange} />
                    {page.props.errors?.price && (
                    <small id="prodName" className="form-text text-muted">{page.props.errors.price[0]}</small>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="Quantity">Quantity</label>
                    <input type="text" value={values.quantity} className="form-control" id="quantity" onChange={handleChange} />
                    {page.props.errors?.quantity && (
                    <small id="prodName" className="form-text text-muted">{page.props.errors.quantity[0]}</small>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="thumbnail">Product Picture</label>
                    <input ref={thumbnailRef} type="file" className="form-control" id="thumbnail" value={values.thumbnail} />
                    {page.props.errors?.thumbnail && (
                    <small id="prodName" className="form-text text-muted">{page.props.errors.thumbnail[0]}</small>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="detailImg">Product Picture</label>
                    <input ref={detailImg} type="file" multiple className="form-control" id="detailImg" />
                    
                </div>

                <div className="form-group">
                    <label htmlFor="description">Product Description</label>
                    <textarea ref={descrip}  className="form-control" id="description" aria-describedby="prodName" />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ProductForm