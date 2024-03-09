// Inside ProductContextProvider component

// import React, { useEffect, createContext, useReducer } from "react";
// import axios from "axios";
// import AppURL from "../AppURL";
// import { ProductReducer } from "./productReducer";

// export const productContext = createContext();

// const initialState = {
//     products: [],
//     categories: []
// };

// const ProductContextProvider = (props) => {
//     const [state, dispatch] = useReducer(ProductReducer, initialState);

//     useEffect(() => {
//         // Fetch initial products and categories
//         axios.get(AppURL.ProductList).then(response => {
//             dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
//         });
//         axios.get(AppURL.Shop).then(response => {
//             // Assuming you have a separate action to set categories
//             dispatch({ type: 'SET_CATEGORIES', payload: response.data });
//         });
//     }, []);

//     return (
//         <productContext.Provider value={{ ...state, dispatch }}>
//             {props.children}
//         </productContext.Provider>
//     );
// };

// export default ProductContextProvider;



import React, { createContext, useReducer, useState, useEffect } from 'react';
import axios from 'axios';
import AppURL from '../AppURL';
import { ProductReducer } from './productReducer';

export const productContext = createContext();

const initialState = {
    products: [],
};

const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);
    const [categories, setCategories] = useState([]); 

    useEffect(() => {
        // Fetch products
        axios.get(AppURL.ProductList)
            .then(response => {
                dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
            });

        // Fetch categories separately with useState
        axios.get(AppURL.Shop)
            .then(response => {
                setCategories(response.data);
            });
    }, []);

    // Passing categories and its setter along with state and dispatch
    const value = { ...state, categories, setCategories, dispatch };

    return (
        <productContext.Provider value={value}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;








































// import React, { useContext, useEffect } from 'react';
// import { productContext } from "../global/productContext";
// import axios from 'axios';
// import AppURL from '../AppURL';

// const Shop = () => {
//     const { dispatch } = useContext(productContext);
//     const params = useParams();

//     useEffect(() => {
//         const fetchMoreProducts = () => {
//             axios.get(`${AppURL.Shop}/${params.code}`).then(response => {
//                 dispatch({ type: 'ADD_MORE_PRODUCTS', payload: response.data });
//             }).catch(error => console.error("Failed to fetch more products:", error));
//         };

//         if (params.code) {
//             fetchMoreProducts();
//         }
//     }, [params.code, dispatch]);

    
// };





// import React, { useContext, useEffect } from 'react';
// import { productContext } from '../global/productContext';
// import axios from 'axios';
// import AppURL from '../AppURL';
// import { useParams } from 'react-router-dom';

// const Shop = () => {
//     const { categories, setCategories, products, dispatch } = useContext(productContext);
//     const params = useParams();

//     useEffect(() => {
//         // Example of how to fetch more products and update categories if needed
//         if (params.code) {
//             axios.get(`${AppURL.Shop}/${params.code}`)
//                 .then(response => {
//                     dispatch({ type: 'ADD_MORE_PRODUCTS', payload: response.data });
//                     // Optionally update categories here if needed with setCategories
//                 })
//                 .catch(error => console.error("Failed to fetch more products:", error));
//         }
//     }, [params.code, dispatch, setCategories]);

//     // Rendering logic...
// };
