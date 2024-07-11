import React,{useState , useRef} from 'react';
import {Inertia} from '@inertiajs/inertia';
import {usePage} from '@inertiajs/inertia-react';

const NewProduct = (props) =>{
    const thumbnailRef = useRef(null);
    const detailImg = useRef(null);
    const page = usePage();
    const [values , setValues] = useState({
        name : '',
        dept: '',
    });

    const cat = page.props.categories;
    // console.log(cat); Everytime write something in Input field whole component rerenders?

    function handleSubmit(e){
    e.preventDefault();
    console.log(values);
    const formData = new FormData();
    formData.append('name' , values.name);
    formData.append('dept' , values.dept);

    Inertia.post('/ncategory',formData);
    }

    function handleChange(e){
        e.persist();
        setValues(values => ({...values,[e.target.id]: e.target.value}));
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="form-group">
                            <label htmlFor="name">Category Name</label>
                            <input type="text" value={values.name} className="form-control" id="name" aria-describedby="prodName" onChange={handleChange} />
                            <small id="prodName" className="form-text text-muted">Please Enter Category Name.</small>
                        </div>

                        

                        <div className="form-group">
                            <label htmlFor="dept">Department</label>
                            <input type="text" value={values.dept} id="dept" className="form-control" onChange={handleChange} />
                        </div>

                       
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewProduct;