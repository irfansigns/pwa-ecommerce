import React, { useState, useEffect, useContext } from 'react';
import axiosClient from '../axiosClient';
import { productContext } from '../context/productContext';

const Brands = () => {
  // State management
  const [state, setState] = useState();
  const {categories} = useContext(productContext);
  const brands = categories.filter(category => category.dept === '5');

//   const brands = categories.filter(function(category) {
//     return category.dept === '5';
//   });


  // Side effects
  useEffect(() => {
    // Component did mount / Component did update logic

    return () => {
      // Component will unmount logic (cleanup)
    };
  }, []); 

  // Event handler example
  const handleEvent = () => {
    // Handle event
  };

  // Render component
  return (
    <>
    <ul className="menuList">
    {brands.map(category => (
          <li key={category.id}>
            <a href="#" className="nav-link">
              {category.cname}
            </a>
          </li>
        ))}
    </ul>
    </>    
  );
};

export default Brands;


