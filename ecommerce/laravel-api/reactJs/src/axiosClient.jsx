import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        try {
            const { response } = error;
            if (response.status === 401) {
                localStorage.removeItem("ACCESS_TOKEN");
            }
        } catch (err) {
            console.error(err);
        }
        throw error;
    }
);

axiosClient.Images = "http://localhost:8000/storage/img/";


axiosClient.getProducts = function () {
    return this.get('/products');
};

axiosClient.MegaSlider = function (code) {
    return this.get(`/sliderImages/${code}`);
};

axiosClient.Categories = function (code) {
    return this.get(`/shop/${code}`);
};

axiosClient.shop = function (code){
    return this.get('/shop')
    //Returns full detail of Categories
}

axiosClient.shop = function (code){
    return this.get(`/productdetails/${code}`)
    //Returns full detail of product
}

 

//Framework
// axiosClient.getProductDetails = function (code) {
//     return this.get(`/productDetails/${code}`);
// };

export default axiosClient;