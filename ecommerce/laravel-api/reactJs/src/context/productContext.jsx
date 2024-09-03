import React, {useState,useEffect,createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"
import axiosClient from '../axiosClient';
export const productContext = createContext();


const ProductContextProvider = props => {
    const [products , setProducts] = useState([]);
    const [categories , setCategories] = useState([]);
    
    useEffect(() => {
        const fetchUser = () => {
           
            axiosClient.getProducts().then(response=>{
                setProducts(response.data);
                console.log(response.data);
            })
        }
      
          fetchUser();
    
    }, [])
    
    
   if(products.length)   {
    return(
       
        <productContext.Provider value={{products,categories}}>
           {props.children}
        </productContext.Provider>
        
    );
   }else{
       return<h1>Loading</h1>
   }
}



export default ProductContextProvider
