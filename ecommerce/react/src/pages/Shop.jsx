import React, { useState, useEffect, useContext } from 'react'
import { Link , useParams } from 'react-router-dom'
import { productContext } from "../global/productContext"
import { cartContext } from "../global/cartContext";
import AppURL from '../AppURL';
import axios from 'axios';

const Shop =(props)=>{    
    const [Items, setItems] = useState([]);
    const { products, categories, dispatch } = useContext(productContext); // Destructure dispatch here
    const { dispatch: cartDispatch } = useContext(cartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const params = useParams();


    useEffect(() => {
        if (params.code) {
            axios.get(AppURL.Categories(params.code))
                .then(response => {
                    dispatch({ type: 'ADD_MORE_PRODUCTS', payload: response.data });
                    setLoading(false); // Set loading to false once data is fetched
                })
                .catch(error => console.error("Failed to fetch more products:", error));
        }
    }, [params.code, dispatch]);
  
  
//   useEffect(() => {
//     // Example of how to fetch more products and update categories if needed
//     if (params.code) {
//         axios.get(AppURL.Categories(params.code))
//             .then(response => {
//                 dispatch({ type: 'ADD_MORE_PRODUCTS', payload: response.data });
//                 // Optionally update categories here if needed with setCategories
//             })
//             .catch(error => console.error("Failed to fetch more products:", error));
//     }
//   }, [params.code, dispatch]);

//   const userView = products.filter(product => product.category_id === params.code).map((product,key)=>{
//     return(
//       <>
//             <p>{product.pname}</p><br />
//       </>
//     )
//   });

    let userView = 'No Products';

    useEffect(() => {
        if (!loading) {
             userView = products.filter(product => product.category_id === params.code).map((product,key)=>{
                return(
                <>
                        <p>{product.pname}</p><br />
                </>
                )
            });
        }
    }, [loading, params.code, products]);

  
  return(
    <>
        <h3>{params.code}</h3>
        <h1>Shop Page</h1><br />
        {loading ? <p>Loading...</p> : userView}
    </>
  )
}

export default Shop;
