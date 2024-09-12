import React, {useState,useEffect,createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"
import axios from "axios";
import AppURL from "../AppURL";
export const productContext = createContext();


const ProductContextProvider = props => {
    const [products , setProducts] = useState([]);
    const [categories , setCategories] = useState([]);
    
    useEffect(() => {
        const fetchUser = () => {
           
            axios.get(AppURL.ProductList).then(response=>{
                setProducts(response.data);
            })

            axios.get(AppURL.Shop).then(response=>{
                setCategories(response.data);
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
