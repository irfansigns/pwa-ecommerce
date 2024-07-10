import axios from 'axios';
import React,{useState} from 'react';
import {InertiaLink, usePage} from '@inertiajs/inertia-react';

const AdminForm =(props)=>{
    
    const page = usePage();

    return(
    <>
        <section className="py-2">
            <form method="POST" onSubmit={props.submit} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="cate">Category Name</label>
                    <select id="proCat" className="custom-select" onChange={props.change} >
                        <option>All Categories</option>
                            {
                                page.props.categories.map(category=>{
                                    return(
                                        <option key={category.id} value={category.id}>{category.cname}</option>
                                    )
                                })
                            }
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>      
    </>
    )
}

export default AdminForm;