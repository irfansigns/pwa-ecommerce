import React, {useContext} from "react"
import { productContext } from "../global/productContext"


const Products = () => {
   const {products} = useContext(productContext);
   console.dir(products)
    return(
        <> 
        {products.map(product=>{
            return <h6>{product.id} <span></span> {product.pname}</h6>
        })}
        </>
    )

}

export default Products;