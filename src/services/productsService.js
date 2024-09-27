import axios from "axios";

class ProductService{
    static getAllProduct = () => axios.get('/products')
}

export default ProductService