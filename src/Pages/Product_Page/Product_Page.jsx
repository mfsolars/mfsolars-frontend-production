import "./Product_Page.css";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {useSelector} from "react-redux";

function Product_Page() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const iflogged = useSelector(state=>state.user.user?.userlogged);

    const navigate = useNavigate();

    const getSingleProduct = async () => {
        try {
            const { data } = await axios.get(`/api/mfsolars/v1/products/${id}`);
            if (data) {
                setProduct(data.product);
            } else {
                console.error("No product data found");
            }
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    };

    useEffect(() => {
        getSingleProduct();
    }, [id]);

    const handleAddToCart = async () => {


        if(iflogged==null || iflogged==undefined){
            toast.error("Login to use functionality");
            navigate("/my-account/login");
        }
        else{
            try {
                const userConfig = {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                };
                const response = await axios.post("/api/mfsolars/v1/product/cart", { product: product._id }, userConfig);
                if (response && response.data) {
                    toast.success(`${product.name} added to your cart`);
                    return response.data;
                } else {
                    toast.warn(response.data.message)
                    return [];
                }
            } catch (error) {
                console.error("Error adding to cart:", error);
                return [];
            }
        }
    };

    return (
        <section className="product-section">
            <div className="product-container">
                <div className="product-image">
                    <img src={product.productImages?.[0]?.url} alt={product.name} />
                </div>
                <div className="product-details">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p className="price">R {product.price?.toFixed(2)}</p>
                    <p className="stock">{product.Stock > 0 ? `${product.Stock} in stock` : "Out of Stock"}</p>
                    <button onClick={handleAddToCart} className="add-to-cart-btn">Add to cart</button>
                </div>
            </div>
        </section>
    );
}

export default Product_Page;
