import React, {createContext , useReducer} from 'react';
import {Inertia , InertiaLink} from '@inertiajs/inertia-react';
import {ProductReducer} from './productReducer';
import Footer from './Footer';
import Category from './Category';
import Navbar from './Navbar';
import axios from 'axios';
import route from "ziggy-js";
import DashContent from './DashContent';

const AdminDash = (props) =>{
  

  const testRoute=(id)=>{
    // alert(id);
    axios.get(route('delProduct',{id:id})).then(respond=>{
      document.getElementById(respond.data).remove();
    })
  }

    return(
        <>
        <div className="page-holder">        
          <Navbar  />
          <DashContent 
            delRoute={testRoute}
          />
        </div>
        </>
    )
}
 
export default AdminDash;