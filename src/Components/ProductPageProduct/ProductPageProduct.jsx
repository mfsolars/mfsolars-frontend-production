
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function ProductPageProduct({ product }) {
    const handleAddToCart = async(id) => {
        try {
            const userConfig = {
                headers: {
                    'Content-Type': 'application/json',
                }
            };
            let response = await axios.post("/api/mfsolars/v1/product/cart", { product: id}, userConfig);
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
                }
            };
            let response = await axios.post("/api/mfsolars/v1/product/wishlist", { product: id }, userConfig);
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
        <div className="product-grid-item product wd-hover-fw-button wd-hover-with-fade col-lg-3 col-md-3 col-6 first type-product min-w-[250px]"  data-id={product.id}>
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
                    <h3 className="wd-entities-title">
                        <Link to={`/products/product/${product?._id}`}>{product?.name}</Link>
                    </h3>
                    <div className="wd-star-rating">
                        <div className="starrating flex flex-row" role="img">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} style={{ fontSize: "1.3rem", color: index < (product?.ratings) ? 'gold' : 'gray' }} />
                            ))}
                        </div>
                    </div>
                    <p className="wd-product-stock stock wd-style-default" style={{ color: product?.Stock > 0 ? "green" : "red" }}>
                        {product?.Stock > 0 ? "✔ In stock" : "🥺 Out of stock"}
                    </p>
                    <div className="wrap-price">
                        <span className="price">
                            <span className="woocommerce-Price-amount amount">
                                <bdi>
                                    <span className="woocommerce-Price-currencySymbol">R</span>
                                    {product?.price.toFixed(2)}
                                </bdi>
                            </span>
                        </span>
                    </div>
                    <div className="wd-add-btn wd-add-btn-replace">
                        <button
                            onClick={()=>{
                                handleAddToCart(product?._id);
                            }}
                            className="button product_type_simple add_to_cart_button bg-[#1c61e7] text-white w-full rounded hover:bg-blue-700 hover:text-white"
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
