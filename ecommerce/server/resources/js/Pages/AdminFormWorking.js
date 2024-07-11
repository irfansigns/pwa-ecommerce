import axios from 'axios';
import React,{useState} from 'react';
import {InertiaLink, usePage} from '@inertiajs/inertia-react';

const AdminForm =(props)=>{
    const [value , setValue] = useState({
        category:""
    });

    // const [items , showItems] = useState(false);

    const page = usePage();

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     showItems(true);
        // alert(value.category);
        // const formData  = new formData();
        // formData.append('category' , values.category);

        // axios.post('',formData);
    // }

    function handleChange(e){
        e.persist();
        setValue(value => ({...value,category: e.target.value}));
        console.log(value.category);
    }

    return(
    <>
        <section className="py-2">
            <form  encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="cate">Category Name</label>
                    <select id="category" value={value.category} className="custom-select" onChange={handleChange} >
                        <option value="0">All Categories</option>
                            {
                                page.props.categories.map(category=>{
                                    return(
                                        <option key={category.id} value={category.id}>{category.cname}</option>
                                    )
                                })
                            }
                    </select>
                </div>

                <button type="button" onClick={() => props.submit(value)} className="btn btn-primary">Submit</button>
            </form>
        </section>      
    </>
    )
}

export default AdminForm;