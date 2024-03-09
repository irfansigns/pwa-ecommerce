import React, { useContext, useEffect } from 'react';
import { productContext } from '../global/productContext';
import axios from 'axios';
import AppURL from '../AppURL';
import { useParams } from 'react-router-dom';

const Shop = () => {
    const { categories, setCategories, products, dispatch } = useContext(productContext);
    const params = useParams();

    useEffect(() => {
        // Example of how to fetch more products and update categories if needed
        if (params.code) {
            axios.get(`${AppURL.Shop}/${params.code}`)
                .then(response => {
                    dispatch({ type: 'ADD_MORE_PRODUCTS', payload: response.data });
                    // Optionally update categories here if needed with setCategories
                })
                .catch(error => console.error("Failed to fetch more products:", error));
        }
    }, [params.code, dispatch, setCategories]);

    // Rendering logic...
};
