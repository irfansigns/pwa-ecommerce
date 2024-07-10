import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import Navbar from './Navbar';

const Welcome = (props) =>{
  return(
    <div className="page-holder">        
          <Navbar  />
          <Main items={props.products} />
    </div> 
  )
}

export default Welcome;


