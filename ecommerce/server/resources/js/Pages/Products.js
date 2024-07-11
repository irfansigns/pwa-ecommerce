import React, {createContext , useReducer} from 'react';

export const productContext = createContext();

const ProductContextProvider = (props) => {

    return(
        <productContext.Provider>
            {props.children}
        </productContext.Provider>
    )
}

export default ProductContextProvider;