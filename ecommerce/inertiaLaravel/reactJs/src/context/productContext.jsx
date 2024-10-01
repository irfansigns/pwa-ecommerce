import React, {useState,useEffect,createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"
import axiosClient from '../axiosClient';
export const productContext = createContext();

const initialState = {
    products: [],
};

const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);
    const [categories, setCategories] = useState([]); 

    useEffect(() => {
        // Fetch products
        axiosClient.getProducts()
            .then(response => {
                dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
            });

        // Fetch categories separately with useState
        axiosClient.shop()
            .then(response => {
                setCategories(response.data);
                // Returns full detail of categories 
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