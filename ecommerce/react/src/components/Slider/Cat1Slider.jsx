import React, {useEffect , useState} from "react"
import Slider from "react-slick";
import AppURL from '../../AppURL';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Cat1Slider = (props) => {

    const [itemData,setItemData] = useState({
        ProductData:[],
    });

    var speed = Number(props.speed);
    console.log(props.cat);
    useEffect(() => {
        const fetchImages = () => {
            axios.get(AppURL.MegaSlider(props.code)).then(response=>{
                // console.log(props.code);
                setItemData(values => ({...values,ProductData: response.data}));
                // console.log(response.data);
            }).catch(error=>{
                
            });
        }
      
        fetchImages();
    
    }, []);

    const sliderData = itemData.ProductData.map(slide=>{
        return(
            <div>
                
                    <Link to={'/shop/'+props.cat}><img src={AppURL.Images+"slider"+props.code+"/"+slide} className="card-img-top" alt="..." /></Link>
                    
            </div>
        )
    })



    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        speed: speed,
        autoplaySpeed: speed,
        slidesToScroll: 1
      };

    return (
        <div>
            <Slider {...settings}>
          {sliderData}
        </Slider>
        </div>
    )
}

export default Cat1Slider
