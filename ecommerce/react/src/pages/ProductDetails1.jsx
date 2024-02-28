import React, {useContext , useEffect , useState} from "react"
import AppURL from '../AppURL';
import axios from 'axios';
import { Link , useParams } from 'react-router-dom'
import FinalSlider from '../components/FinalSlider'
import RelatedPoducts from "../components/RelatedPoducts";
// import NewSlider from '../components/NewSlider';

const ProductDetails = (props) => {

    const [itemData,setItemData] = useState({
        ProductData:"",
        categoryId:""
    });

    const params = useParams()
    useEffect(() => {
        const fetchProducts = () => {
            axios.get(AppURL.ProductDetails(params.code)).then(response=>{
                // console.log(response.data);
                setItemData(values => ({...values,ProductData: response.data,categoryId:response.data.catId}));
                console.dir(itemData.ProductData);
            }).catch(error=>{
                
            });
        }
      
        fetchProducts();
    
    }, [])


    if(itemData.ProductData){
      return(
        <>
<div className="container">
            <div className="row mb-5">
            <div className="col-lg-7">
             <FinalSlider detailImg={itemData.ProductData.imageDetail}
             images={itemData.ProductData.productDetail.i_path}
             />
            </div>
            <div className="col-lg-5">
              <ul className="list-inline mb-2">
                <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
              </ul>
              <h1>{itemData.ProductData.productDetail.pname}</h1>
              <p className="text-muted lead">${itemData.ProductData.productDetail.price}</p>
              <p className="text-small mb-4">{itemData.ProductData.desc}</p>
              <div className="row align-items-stretch mb-4">
                {/* <div className="col-sm-5 pr-sm-0">
                  <div className="border d-flex -items-center justify-content-between py-1 px-3 bg-white border-white"><span className="small text-uppercase text-gray mr-4 no-select">Quantity</span>
                    <div className="quantity">
                      <button className="dec-btn p-0"><i className="fas fa-caret-left"></i></button>
                      <input className="form-control border-0 shadow-0 p-0" type="text"  />
                      <button className="inc-btn p-0"><i className="fas fa-caret-right"></i></button>
                    </div>
                  </div>
                </div> */}
                <div className="col-sm-3 ml-1"><button className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-2">Add to cart</button></div>
              </div><a className="btn btn-link text-dark p-0 mb-4" href="#"><i className="far fa-heart mr-2"></i>Add to wish list</a><br />
              <ul className="list-unstyled small d-inline-block">
                <li className="px-3 py-2 mb-1 bg-white"><strong className="text-uppercase">SKU:</strong><span className="ml-2 text-muted">{itemData.ProductData.productDetail.qty}</span></li>
                <li className="px-3 py-2 mb-1 bg-white text-muted"><strong className="text-uppercase text-dark">Brand:</strong><a className="reset-anchor ml-2" href="#">{itemData.ProductData.category}</a></li>
                {/* <li className="px-3 py-2 mb-1 bg-white text-muted"><strong className="text-uppercase text-dark">Tags:</strong><a className="reset-anchor ml-2" href="#">Innovation</a></li> */}
              </ul>
            </div>
          </div>
          {itemData.ProductData ? <RelatedPoducts cat={itemData.categoryId} />  : ''}
          
        </div>
        </>
      )
    }else{
      return(
        <h3>Loading...</h3>
      )
    }
}

export default ProductDetails
