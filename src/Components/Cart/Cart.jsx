import "./Cart.css";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function Cart({ setShowCart }) {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const login_user = useSelector(state => state.user.user?.userlogged);

    const handleRemove = async (id) => {
        try {
            const userConfig = {
                headers: {
                    'Content-Type': 'application/json',
                }
            };
            let response = await axios.delete("/api/mfsolars/v1/product/cart", { data: { product: id } }, userConfig);
            if (response && response.data) {
                toast.success("Item removed from your cart");

                // Update session storage
                const updatedItems = cartItems.filter(item => item._id !== id);
                updateCart(updatedItems);
            } else {
                return [];
            }
        } catch (error) {
            console.error("Error removing cart item:", error);
            return [];
        }
    };

    const getCartItems = async () => {
        try {
            let response = await axios.get("/api/mfsolars/v1/product/cart");
            if (response && response.data) {
                const items = response.data.cart;
                console.log("Cart items:", items);
                
                updateCart(items);
            } else {
                return [];
            }
        } catch (error) {
            console.error("Error fetching cart items:", error);
            return [];
        }
    };

    


    const updateTotal = (items) => {
        if (Array.isArray(items)) {
            const totalAmount = items.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
            setTotal(totalAmount);
        } else {
            console.error("Invalid items format:", items);
        }
    };

  

    useEffect(() => {
        
        if (login_user!==null) {
            getCartItems(); // Call getCartItems if no cart data exists
            
        }
        
    }, []);
    
    

    

    const updateCart = (updatedItems) => {
        if (Array.isArray(updatedItems)) {
            // Convert array to object for sessionStorage
            const updatedCart = updatedItems.reduce((acc, item) => {
                acc[item._id] = item;
                return acc;
            }, {});
            sessionStorage.setItem('cart', JSON.stringify(updatedCart));
            setCartItems(updatedItems);
            updateTotal(updatedItems);
        } else {
            console.error("Invalid updatedItems format:", updatedItems);
        }
    };

    const handleQuantityChange = (id, increment) => {
        const updatedItems = cartItems.map(item => {
            if (item._id === id) {
                const newQuantity = increment ? (item.quantity || 1) + 1 : Math.max((item.quantity || 1) - 1, 1);
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        updateCart(updatedItems);
    };



    

    return (
        <div className="cart-widget-side wd-side-hidden wd-right wd-opened mfsolars-TYnjX">
            <div className="wd-heading">
                <span className="title">Shopping cart</span>
                <div className="close-side-widget wd-action-btn wd-style-text wd-cross-icon">
                    <Link to="#" rel="nofollow" onClick={() => setShowCart(false)} style={{ cursor: "pointer",background:"#029ef6" }}>
                        <IoClose style={{ fontSize: "1.2rem", marginRight: "0.2rem" }} />
                        Close
                    </Link>
                </div>
            </div>
            <div className="widget woocommerce widget_shopping_cart">
                <div className="widget_shopping_cart_content style-Motvl" id="style-Motvl">
                    <div className="shopping-cart-widget-body wd-scroll">
                        <div className="wd-scroll-content">
                            <ul className="cart_list product_list_widget woocommerce-mini-cart">
                                {cartItems.length === 0 ? (
                                    <li className="empty">Your cart is currently empty.</li>
                                ) : (
                                    cartItems.map(item => (
                                        <li
                                            key={item._id}
                                            className="woocommerce-mini-cart-item mini_cart_item"
                                        >
                                            
                                            <Link
                                                to="#"
                                                className="remove remove_from_cart_button"
                                                aria-label="Remove this item"
                                                onClick={(e) => { e.preventDefault(); handleRemove(item._id); }}
                                            >
                                                <IoClose style={{ fontSize: "1.2rem", marginRight: "0.2rem",color:"black" }} />
                                            </Link>
                                            <Link
                                                to={"products/product/" + item._id}
                                                className="cart-item-image"
                                            >
                                                <img
                                                    width={600}
                                                    height={600}
                                                    src={item?.productImages[0]?.url}
                                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                    alt={item.name}
                                                    decoding="async"
                                                />
                                            </Link>
                                            <div className="cart-info">
                                                <span className="wd-entities-title">
                                                    {item.name}
                                                </span>
                                                
                                                <div className="quantity">
                                                    <button
                                                        className="minus"
                                                        onClick={() => handleQuantityChange(item._id, false)}
                                                    >
                                                        -
                                                    </button>
                                                    <span style={{ fontSize: "1rem", marginTop: "0.5rem" }}>
                                                        {(item.quantity || 1)}
                                                    </span>
                                                    <button
                                                        className="plus"
                                                        onClick={() => handleQuantityChange(item._id, true)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <span className="quantity">
                                                    {(item.quantity || 1)} ×{" "}
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            <span className="woocommerce-Price-currencySymbol">R</span>
                                                            {item.price.toFixed(2)}
                                                        </bdi>
                                                    </span>
                                                </span>
                                            </div>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="shopping-cart-widget-footer">
                        <p className="woocommerce-mini-cart__total total">
                            <strong>Subtotal:</strong>{" "}
                            <span className="woocommerce-Price-amount amount">
                                <bdi>
                                    <span className="woocommerce-Price-currencySymbol">R</span>
                                    {total.toFixed(2)}
                                </bdi>
                            </span>
                        </p>
                        <div className="wd-progress-bar wd-free-progress-bar">
                            <div className="progress-msg">
                                Add{" "}
                                <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">R</span>
                                    {total < 1000 ? (1000 - total).toFixed(2) : 0}
                                </span>{" "}
                                to cart and get free shipping!
                            </div>
                            <div className="progress-area">
                                <div className="progress-bar" style={{ width: `${total < 1000 ? ((total / 1000) * 100) : 100}%` }} />
                            </div>
                        </div>
                        <p className="woocommerce-mini-cart__buttons buttons">
                            <Link
                                to="/checkout/"
                                className="button checkout wc-forward"
                            >
                                Checkout
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
