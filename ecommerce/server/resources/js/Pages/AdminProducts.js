import React,{useEffect, useState} from 'react';
import {Inertia , InertiaLink} from '@inertiajs/inertia-react';
import route from "ziggy-js";
import axios from 'axios';

const AdminProducts =(props)=>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        console.log(props.category);
        axios.get(route('showCat',{id:props.category})).then(respond=>{
            setProducts(respond.data);
            console.log(respond.data);
        });
       
    },[]);

    return(
        <>
        <table className="table table-hover">
                                                <thead>
                                                  <tr>
                                                    <th style={{width: "3%"}}>Id</th>
                                                    <th style={{width: "20%"}}>Name</th>
                                                    <th style={{width: "10%"}}>Price</th>
                                                    <th style={{width: "30%"}}>Action</th>
                                                    <th style={{width: "37%"}}>Img</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                {products?products.map(product=>{
                                                  return(
                                                      <tr id={product.id}>
                                                          <td>{product.id}</td>
                                                          <td>{product.pname}</td>
                                                          <td>{product.price}</td>
                                                          <td>
                                                            <button  className="btn-small btn-primary mr-1 aButton"><InertiaLink href={base_url +'/product/watch/'+product.id}>Edit</InertiaLink></button>
                                                            {/* <button onClick={()=>{const id = product.id; delProduct(id);}} className="btn-small btn-danger">Delete</button> */}
                                                            <button onClick={()=>{props.deleteRoute(product.id)}} className="btn-small btn-danger">Delete</button>
                                                          </td>
                                                          <td><img className="w-25" src={base_url +'/storage/img/' +product.i_path} alt="..." /></td>
                                                      </tr>
                                                  )
                                                }):''}
                                                  
                                                </tbody>
                                              </table>
        </>
        )
}

export default AdminProducts