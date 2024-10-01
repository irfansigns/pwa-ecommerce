import React, {useContext , useEffect , useState} from "react"
import axiosClient from "../axiosClient";
import { Link , useParams } from 'react-router-dom'
import FinalSlider from '../Components/FinalSlider';
import RelatedPoducts from "../Components/RelatedPoducts";
import DetailSlider from "../Components/Slider/DetailSlider";

const ProductDetails = (props) => {

    const [itemData,setItemData] = useState({
        ProductData:"",
        categoryId:""
    });

    const [zoomImageUrl, setZoomImageUrl] = useState();
    // Function to handle image click
    const handleImageClick = (newImageUrl) => {
        setZoomImageUrl(newImageUrl); // Update the zoomed image URL
    };


    const params = useParams()
    useEffect(() => {
        const fetchProducts = () => {
            axiosClient.productDetails(params.code).then(response=>{
                console.log(response.data);
                
                setItemData(values => ({...values,ProductData: response.data,categoryId:response.data.catId}));            
                console.log(itemData);
            }).catch(error=>{
                
            });
        }
      
        fetchProducts();
    
    }, [params]);

    useEffect(() => {
        if (itemData.ProductData && itemData.ProductData.productDetail && itemData.ProductData.productDetail.i_path) {
            const imageUrl = axiosClient.Images + itemData.ProductData.productDetail.i_path;
            // alert('I am going to set this ' + imageUrl);
            handleImageClick(imageUrl);
        }
    }, [itemData]); // This effect runs when itemData changes

    

    if(itemData.ProductData){
      return(
        <>
        <div id="page-content" className="template-product product-standard"> 
                
                <div className="page-header text-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                
                                <div className="breadcrumbs"><a href="index.html" title="Back to the home page">Home</a><span className="main-title fw-bold"><i className="icon anm anm-angle-right-l"></i>Product Standard</span></div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container">     
                  
                    <div className="product-single">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 product-layout-img mb-4 mb-md-0">
                                
                                <div className="product-details-img product-horizontal-style">
                                   
                                    <div className="zoompro-wrap">
                                      
                                        <div className="zoompro-span"><img id="zoompro" className="zoompro" src={zoomImageUrl}  alt="product" width="625" height="808" /></div>
                                       
                                        <div className="product-labels"><span className="lbl pr-label1">Best seller</span></div>
                                        
                                        <div className="product-buttons">
                                            <a href="#" className="btn prlightbox" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Zoom Image" aria-label="Zoom Image"><i className="icon anm anm-expand-l-arrows"></i></a>
                                        </div>
                                      
                                    </div>

                                    {/* Details Slider  */}

                                    <div className="product-thumb product-horizontal-thumb mt-3">
                                        <div id="gallery" className="product-thumb-horizontal">
                                            <DetailSlider detailImg={itemData.ProductData.imageDetail} handleImageClick={handleImageClick} images={itemData.ProductData.productDetail.i_path} category={itemData.ProductData.category} />
                                            {/* Passed the handler to DetailSlider.jsx so that slides can use it when called  */}
                                            
                                        </div>
                                    </div>

                                    {/* End Details Slider  */}
                                   
                                   
                                </div>
                             
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 product-layout-info">
                                
                                <div className="product-single-meta">
                                    <h2 className="product-main-title">{itemData.ProductData.productDetail.pname}</h2>
                                   
                                    <div className="product-review d-flex-center mb-3">
                                        <div className="reviewStar d-flex-center"><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star"></i><i className="icon anm anm-star-o"></i><span className="caption ms-2">24 Reviews</span></div>
                                        <a className="reviewLink d-flex-center" href="#reviews">Write a Review</a>
                                    </div>
                                   
                                    <div className="product-info">
                                        <p className="product-vendor">Vendor:<span className="text"><a href="#">Spax</a></span></p>  
                                        <p className="product-type">Product Type:<span className="text">Shirts</span></p> 
                                        <p className="product-sku">SKU:<span className="text">RF104963</span></p>
                                        <p className="product-cat">Category: <span><a href="#">{itemData.ProductData.category}</a>, </span></p>
                                       
                                    </div>
                                  
                                    <div className="product-price d-flex-center my-3">
                                        <span className="price">Rs.{itemData.ProductData.productDetail.price}</span>
                                    </div>
                                   
                                    <hr />
                                   
                                    <div className="sort-description">
                                        <ul className="checkmark-info">
                                            <li>High quality fabric, very comfortable to touch and wear.</li>
                                            <li>It can tie in front-is forgiving to you belly or tie behind.</li>
                                            <li>Light weight and perfect for layering.</li>
                                        </ul>
                                    </div>
                                  
                                </div>
                                
                                <form method="post" action="#" className="product-form product-form-border hidedropdown">                                    
                                   
                                    <div className="product-action w-100 d-flex-wrap mb-3">
                                        
                                        <div className="product-form-quantity w-100 d-flex-center">
                                            <div className="qtyField">
                                                <a className="qtyBtn minus" href="#;"><i className="icon anm anm-minus-r"></i></a>
                                                <input type="text" name="quantity" defaultValue="1" className="product-form-input qty" />
                                                <a className="qtyBtn plus" href="#;"><i className="icon anm anm-plus-r"></i></a>
                                            </div>

                                            <div className="pro-stockLbl ms-3">
                                                <span className="d-flex-center stockLbl instock text-uppercase">In stock</span>
                                            </div>
                                        </div>
                                      
                                        <div className="product-form-submit addcart fl-1 ms-0 mt-3">
                                            <button type="submit" name="add" className="btn btn-secondary product-form-cart-submit"><span>Add to cart</span></button>
                                        </div>
                                       
                                    </div>
                                   
                                    <p className="infolinks d-flex-center justify-content-between">
                                        <a className="text-link wishlist" href="wishlist-style1.html"><i className="icon anm anm-heart-l me-2"></i> <span>Add to Wishlist</span></a>
                                        <a className="text-link compare" href="compare-style1.html"><i className="icon anm anm-sync-ar me-2"></i> <span>Add to Compare</span></a>                                      
                                        <a href="#shippingInfo-modal" className="text-link shippingInfo" data-bs-toggle="modal" data-bs-target="#shippingInfo_modal"><i className="icon anm anm-paper-l-plane me-2"></i> <span>Delivery &amp; Returns</span></a>
                                        <a href="#productInquiry-modal" className="text-link emaillink me-0" data-bs-toggle="modal" data-bs-target="#productInquiry_modal"><i className="icon anm anm-question-cil me-2"></i> <span>Enquiry</span></a>
                                    </p>

                                    <p className="infolinks d-flex-center justify-content-between">
                                    {itemData.ProductData.desc}
                                    
                                    </p>
                                  
                                </form>
                             
                                 
                                                             
                             
                                <div className="social-sharing d-flex-center mt-2 lh-lg">
                                    <span className="sharing-lbl fw-600">Share :</span>
                                    <a href="#" className="d-flex-center btn btn-link btn--share share-facebook"><i className="icon anm anm-facebook-f"></i><span className="share-title">Facebook</span></a>
                                    <a href="#" className="d-flex-center btn btn-link btn--share share-twitter"><i className="icon anm anm-twitter"></i><span className="share-title">Tweet</span></a>
                                    <a href="#" className="d-flex-center btn btn-link btn--share share-pinterest"><i className="icon anm anm-pinterest-p"></i> <span className="share-title">Pin it</span></a>
                                    <a href="#" className="d-flex-center btn btn-link btn--share share-linkedin"><i className="icon anm anm-linkedin-in"></i><span className="share-title">Linkedin</span></a>
                                    <a href="#" className="d-flex-center btn btn-link btn--share share-email"><i className="icon anm anm-envelope-l"></i><span className="share-title">Email</span></a>
                                </div>
                              
                                
                            </div>
                        </div>
                    </div>
                  
                </div>
               
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
