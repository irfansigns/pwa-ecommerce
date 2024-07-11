import React, {useContext , useEffect , useState} from "react"
import AppURL from '../AppURL';
import axios from 'axios';
import Slider from 'react-slick';
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const RelatedPoducts = (props) => {
    const [itemData,setItemData] = useState({
        ProductData:"",
    });

    useEffect(() => {
        const fetchProducts = () => {
            axios.get(AppURL.RelatedProducts(props.cat)).then(response=>{
                // console.log(response.data);
                setItemData(values => ({...values,ProductData: response.data}));
                // console.dir(itemData.ProductData);
            }).catch(error=>{
                
            });
        }
      
        fetchProducts();
    
    }, [])

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed:3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    let ProductList,userView;
    if(itemData.ProductData){
           ProductList = itemData.ProductData;
           userView = ProductList.map((product,key)=>{
          return(
              <div>
              <div className="card ml-3 w-75" key={product.id}>
                  <div className="product text-center">
                  <div className="position-relative mb-3">
                      <div className="badge text-white badge-"></div><Link className="d-block" to={"/details/"+product.id}><img className="img-fluid w-100" src={AppURL.Images+product.i_path} alt="..." /></Link>
                      <div className="product-overlay">
                      <ul className="mb-0 list-inline">
                          {/* <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" href={product.detail_url}><i className="far fa-heart"></i></Link></li> */}
                          {/* <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">{product.quantity}</a></li> */}
                          {/* <li className="list-inline-item mr-0"><button className="btn btn-sm btn-outline-dark" onClick={()=>{const id = product.id; addToCart(id);}}  ><i className="fas fa-shopping-cart"><span className="ml-1">Add to Cart</span></i></button></li> */}
                          {/* <li className="list-inline-item mr-0"><button onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, products})} className="btn btn-sm btn-outline-dark"><i className="fas fa-shopping-cart"><span className="ml-1">Add to Cart</span></i></button></li> */}
                      </ul>
                      </div>
                  </div>
                  <h6> <a className="reset-anchor" to="detail.html">{product.pname}</a></h6>
                  <p className="small text-muted">${product.price}</p>
                  {/* <button className="btn btn-small"><a href={product.edit_url}>Edit</a></button> */}
                  </div>
              </div>
              </div>
              )
      })

    }
    

    if(itemData.ProductData){
        return (
        
            <>
            <h2>Related Products</h2>
            <row>
               <Slider {...settings}>
              {userView}
    
            </Slider> 
            </row>
            </>
        )
    }else{
        return(
            <h3>Loading</h3>
        )
    }

    
}

export default RelatedPoducts
