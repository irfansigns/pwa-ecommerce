import React, { useState , useEffect } from 'react';
import {InertiaLink, usePage} from '@inertiajs/inertia-react';

const TComponent = (props) =>{
  const card = usePage();
  
  return(
    <div className="container">
      <h1>This is component</h1>
      <p>{card.props.appName}</p>
    </div>
  )
}

export default TComponent;