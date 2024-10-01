import {  CiHeart } from "react-icons/ci";
import {  FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from "axios";
import {useSelector} from "react-redux";

function Product({ wishlist, product, setWishListItems }) {
    const id = product?._id;
    const pname = product?.name;
    const pdescription = product?.description;
    const pstock = product?.Stock;
    const pprice = product?.price;
    const quantity = product?.quantity || 1;
    const pimage = product?.productImages?.[0]?.url; // Use optional chaining here
    const plink = `/products/product/${product?._id}`;
    const user = useSelector(state=>state.user.user?.userlogged);

    const handleAddToCart = async(id) => {
        if(user!=null || user!=undefined){
            try {
                const userConfig = {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                };
                let response = await axios.post("/api/mfsolars/v1/product/cart", { product: id }, userConfig);
                if (response && response.data) {
                    toast.success(pname + " added to your cart");
                    return response.data;
                } else {
                    return [];
                }
            } catch (error) {
                console.error("Error fetching cart items:", error);
                return [];
            }
        }else{
            toast.error("Login to use cart functionality")
        }
    };

    const handleAddToWishList = async (id) => {
        if(user!=null || user!=undefined){
        try {
            const userConfig = {
                headers: {
                    'Content-Type': 'application/json',
                }
            };
            let response = await axios.post("/api/mfsolars/v1/product/wishlist", { product: id }, userConfig);
            if (response && response.data) {
                toast.success(pname + "added to your wishlist");
                setWishListItems(prevItems => [...prevItems, response.data]);
                return response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.error("Error fetching wishlist items:", error);
            return [];
        }}else{
            toast.error("Login to mark your loved products");
        }
    };

    const handleRemoveWishList = async (id) => {
        if(user!=null || user!=undefined){
            try {
                const userConfig = {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: { product: id }
                };
                let response = await axios.delete("/api/mfsolars/v1/product/wishlist", userConfig);
                if (response && response.data) {
                    toast.success(pname + " removed from your wishlist");
                    setWishListItems(prevItems => prevItems.filter(item => item._id !== id));
                    return response.data;
                } else {
                    return "Request Failed";
                }
            } catch (error) {
                console.error("Error making request", error);
                return "Request Failed";
            }
        }else{
            toast.error("Login to use wishlist functionality");
        }
    };

    return (
        <div className="product-grid-item product wd-solarlight-hover-fw-button wd-solarlight-hover-with-fade col-lg-20_0 col-md-4 col-6 first type-product post-11708 status-publish instock product_cat-solar-flood-lights product_cat-solar-lights has-post-thumbnail shipping-taxable purchasable produtel:+27101108868ct-type-simple mfsolars0-15-178-179 hover-ready"  style={{ minWidth: "230px", maxWidth: "18.4rem", textAlign: "left",userSelect: "none" }}>
            <div className="product-wrapper mfsolars0-16-179-180">
                <div className="content-product-imagin mfsolars0-17-180-181 style-OoONl" id="style-OoONl" />
                <div className="product-element-top wd-solarlight-quick-shop mfsolars0-17-180-182">
                    <Link to={plink} className="product-image-link mfsolars0-18-182-183">
                        <img fetchpriority="high" decoding="async" width={1024} height={1024} style={{width:"600px",aspectRatio:"1/1",objectFit:"cover"}} src={pimage} className="attachment-large size-large wp-image-9778 mfsolars0-19-183-184" alt="" />
                    </Link>
                    <div className="wd-solarlight-buttons wd-solarlight-pos-r-t mfsolars0-18-182-185">
                        {wishlist !== "wishlist" ? (
                            <div className="wd-solarlight-wishlist-btn wd-solarlight-action-btn wd-solarlight-style-icon wd-solarlight-wishlist-icon mfsolars0-19-185-186">
                                <span className="mfsolars0-20-186-187 cursor-pointer" onClick={() => {
                                    handleAddToWishList(id);
                                }}>
                                    <CiHeart style={{ fontSize: "1.3rem" }} />
                                </span>
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className="product-element-bottom mfsolars0-17-180-189">
                    <h3 className="wd-solarlight-entities-title mfsolars0-18-189-190">
                        <Link to={plink} className="mfsolars0-19-190-191">{pname}</Link>
                    </h3>
                    <div className="wd-solarlight-star-rating mfsolars0-18-189-192">
                        <div className="mfsolars0-19-192-193 flex flex-row" style={{ color: "rgb(255, 100, 0)" }} role="img" aria-label="Rated 0 out of 5">
                        {[...Array(5)].map((_, index) => (
                                <FaStar key={index} style={{ fontSize: "1.3rem", color: index < (product?.ratings) ? 'gold' : 'gray' }} />
                            ))}
                        </div>
                    </div>
                    <div className="text-slate-500">{product?.Stock>0? <span className="text-green-600 font-bold">In stock</span>:<span className="text-red-800 font-bold">Out of stock</span>}</div>
                    <div className="wrap-price mfsolars0-18-189-197">
                        <span className="price mfsolars0-19-197-198">
                            <span className="woocommerce-Price-amount amount mfsolars0-20-198-199">
                                <bdi className="mfsolars0-21-199-200">
                                    <span className="woocommerce-Price-currencySymbol mfsolars0-22-200-201">R</span>
                                    {pprice}
                                </bdi>
                            </span>
                        </span>
                    </div>
                    <div className="wd-solarlight-add-btn wd-solarlight-add-btn-replace mfsolars0-18-189-202" onClick={()=>{
                        handleAddToCart(product?._id);
                    }}>
                        <div className="button product_type_simple text-slate-100 rounded bg-[#1c61e7] w-full add_to_cart_button ajax_add_to_cart add-to-cart-loop mfsolars0-19-202-203" title="Minimum qty is 1">
                            <span className="mfsolars0-20-203-204">Add to cart</span>
                        </div>
                    </div>

                    {wishlist === "wishlist" ? (
                        <div className="wd-solarlight-add-btn wd-solarlight-add-btn-replace mfsolars0-18-189-202" onClick={() => {
                            handleRemoveWishList(product?._id);
                        }}>
                            <div className="button bg-slate-800 text-slate-100 rounded  w-full hover:bg-red-700 hover:text-white mfsolars0-19-202-203" title="Remove your wish">
                                <span className="mfsolars0-20-203-204">Remove Wish</span>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Product;
