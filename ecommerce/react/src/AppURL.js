class AppURL{
    static BaseURL = "http://127.0.0.1:8000/api/";
    // static BaseURL = "http://admin.replicalounge.pk/api/";
    static ProductList = this.BaseURL + "products";
    // static Images = "http://admin.replicalounge.pk/storage/img/";
    static Images = "http://localhost:8000/storage/img/";

    static ProductDetails(code){
        return this.BaseURL+"productdetails/"+code;
    }
    
    static MegaSlider(code){
        return this.BaseURL+"sliderImages/"+code;
    }

    static RelatedProducts(code){
        return this.BaseURL+"relatedProduct/"+code;
    }

    static Categories(code){
        return this.BaseURL+"shop/"+code;
    }

    static storeOrder = this.BaseURL + "storeOrder";
    static UserLogin = this.BaseURL+"login";
    static UserRegister = this.BaseURL+"register";
    static UserData = this.BaseURL+"user"
    static Shop = this.BaseURL+"shop"
    
}

export default AppURL;