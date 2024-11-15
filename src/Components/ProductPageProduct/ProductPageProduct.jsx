
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { FaDotCircle } from "react-icons/fa";

function ProductPageProduct({ product }) {

    const API_URL = import.meta.env.VITE_API_URL;
    const handleAddToCart = async(id) => {
        try {
            const userConfig = {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            };
            let response = await axios.post(`${API_URL}/mfsolars/v1/product/cart`, { product: id}, userConfig);
            if (response && response.data) {
                toast.success(product?.name + " added to your cart");
                return response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.error("Error fetching cart items:", error);
            return [];
        }
    };

    const handleAddToWishList = async (id) => {
        try {
            const userConfig = {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,

            };
            let response = await axios.post(`${API_URL}/mfsolars/v1/product/wishlist`, { product: id }, userConfig);
            if (response && response.data) {
                toast.success(product?.name + " added to your wishlist");
                return response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.error("Error fetching wishlist items:", error);
            return [];
        }
    };

    return (
        <div className="product-grid-item product wd-hover-fw-button wd-hover-with-fade col-lg-3 col-md-3 col-6 first type-product md:min-w-[250px] min-w-[80vw] m-auto md:m-0"  data-id={product.id}>
            <div className="product-wrapper">
                <div className="content-product-imagin" />
                <div className="product-element-top wd-quick-shop">
                    <Link to={`/products/product/${product?._id}`} className="product-image-link">
                        <img
                            fetchpriority="high"
                            loading="lazy"
                            width={750}
                            height={750}
                            src={product?.productImages?.[0]?.url}
                            className="attachment-large size-large"
                            style={{width:"600px",aspectRatio:"1/1",objectFit:"cover"}}
                            alt={product?.name}
                            decoding="async"
                        />
                    </Link>
                    <div className="wd-buttons wd-pos-r-t">
                            <div className="wd-wishlist-btn wd-action-btn wd-style-icon wd-wishlist-icon">
                                <span onClick={()=>{
                                    handleAddToWishList(product?._id);
                                }}>
                                    <CiHeart style={{ fontSize: "1.3rem" }} className="active:text-red-500 cursor-pointer"/>
                                </span>
                            </div>
                    </div>
                </div>
                <div className="product-element-bottom">
                    <h3 className="wd-entities-title text-base mb-3">
                        <Link to={`/products/product/${product?._id}`}>{product?.name}</Link>
                    </h3>
                    <div className="wrap-price">
                        <span className="price">
                            
                            <bdi className="mfsolars0-21-199-200 flex items-center gap-3" style={{color:"#f85606", fontSize:"90%", fontWeight:"200"}}>
                                    <span className="woocommerce-Price-currencySymbol mfsolars0-22-200-201 flex">R {product?.price}</span>
                                    <FaDotCircle title={product?.Stock>0?"In Stock":"Out of Stock"} className={`${product?.Stock>0?"text-green-800":"text-red-800"} font-bold text-base ml-2`} />
                                </bdi>
                        </span>
                    </div>
                    <div className="wd-star-rating">
                        <div className="starrating flex flex-row" role="img">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} style={{ fontSize: "1rem", color: index < (product?.ratings) ? 'orange' : 'gray' }} />
                            ))}
                        </div>
                    </div>
                    
                    <div className="wd-add-btn wd-add-btn-replace">
                        <button
                            onClick={()=>{
                                handleAddToCart(product?._id);
                            }}
                            className="button product_type_simple add_to_cart_button bg-[#f85606] text-white w-full rounded  hover:text-white"
                            title={`Add ${product?.name} to cart`}
                        >
                            <span>Add to cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPageProduct;
