import React, {createContext, useReducer, useEffect} from "react"
import {CartReducer} from "./cartReducer"
export const cartContext = createContext();

const CartContextProvider = (props) => {
    
    const [cart, dispatch] = useReducer(CartReducer, {shoppingCart: [], totalPrice: 0, message: '', qty: 0,user:false})

    useEffect(()=>{
        if(localStorage.getItem('token')){
            localStorage.clear();
        }
    },[]);

    return(
        <cartContext.Provider value={{...cart, dispatch}}>
           {props.children}
        </cartContext.Provider>
    )

}

export default CartContextProvider;