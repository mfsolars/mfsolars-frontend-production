import "./TopNavigation.css";
import { IoMdCart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { useState, useEffect } from "react";
import Cart from "../../Cart/Cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiMenu2Fill } from "react-icons/ri";



// Utility functions to interact with sessionStorage


function TopNavigation() {
    const loggedInUser = useSelector(state => state.user.user);
    const [showCart, setShowCart] = useState(false);
    const [currentPage, setCurrentPage] = useState(localStorage.getItem("currentPage") || "home");
    const [menuopen, setMenuOpen] = useState(false);
    const cart = sessionStorage.getItem('cart');

    useEffect(() => {
        localStorage.setItem("currentPage", currentPage);

    }, [currentPage, cart]);

    return (
        <>
            {showCart && loggedInUser?.userlogged && <Cart setShowCart={setShowCart} />}
            <div className="links-container mfsolars-f5EDF bg-[#56c4ffe2]  md:bg-[#029df63b]  w-full py-4 h-fit" style={{ position: "sticky", top: "0", zIndex: "10" }}>
                {
                    menuopen ? <RiMenu3Fill className="text-xl text-black font-bold cursor-pointer lg:hidden" onClick={() => {
                        setMenuOpen(false)
                    }} /> : <RiMenu2Fill className="text-xl text-black font-bold cursor-pointer lg:hidden" onClick={() => {
                        setMenuOpen(true)
                    }} />
                }
                <div className={`whb-header-bottom-inner flex-col lg:flex-row items-stretch lg:flex ${menuopen ? "flex" : "hidden"}`}>
                    <div className="whb-column whb-col-center whb-visible-lg">
                        <div className="wd-header-nav wd-header-main-nav text-left wd-design-1" role="navigation" aria-label="Main navigation">
                            <ul id="menu-header-menu-mega-electronics" className="menu wd-nav wd-nav-main wd-style-bg wd-gap-s wd-offsets-calculated  flex lg:flex-row flex-col items-stretch">
                                {
                                    loggedInUser?.userlogged && loggedInUser?.userlogged?.role == "admin" && (
                                        <li id="menu-item-dashboard" className={`menu-item  menu-item-type-post_type menu-item-object-page menu-item-dashboard page_item page-item-15 menu-item-dashboard item-level-0 menu-simple-dropdown wd-event-hover ${currentPage === 'dashboard' ? 'current-menu-item' : ''}`} onClick={() => setCurrentPage('dashboard')}>
                                            <Link to="/dashboard" className="woodmart-nav-link">
                                                <span className="nav-link-text hover:text-slate-900">Dashboard</span>
                                            </Link>
                                            <ul className="dropdown">
                                                <li className="dropdown-item">
                                                    <Link to="/admin/orders" className="woodmart-nav-link">Orders</Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link to="/admin/products" className="woodmart-nav-link">Products</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    )
                                }
                                <li id="menu-item-9676" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-14 menu-item-9676 item-level-0 menu-simple-dropdown wd-event-hover ${currentPage === 'home' ? 'current-menu-item' : ''}`} onClick={() => setCurrentPage('home')}>
                                    <Link to="/" className="woodmart-nav-link">
                                        <span className="nav-link-text">Home</span>
                                    </Link>
                                </li>
                                <li id="menu-item-14679" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-14679 item-level-0 menu-simple-dropdown wd-event-hover ${currentPage === 'sale' ? 'current-menu-item' : ''}`} onClick={() => setCurrentPage('sale')}>
                                    <Link to="/products/on-sale/" className="woodmart-nav-link">
                                        <span className="nav-link-text">On Sale</span>
                                    </Link>
                                </li>
                                <li id="menu-item-9650" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-9650 item-level-0 menu-simple-dropdown wd-event-hover ${currentPage === 'shop' ? 'current-menu-item' : ''}`} onClick={() => setCurrentPage('shop')}>
                                    <Link to="/products/shop/" className="woodmart-nav-link">
                                        <span className="nav-link-text">Shop</span>
                                    </Link>
                                </li>
                                <li id="menu-item-2030" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-2030 item-level-0 menu-simple-dropdown wd-event-hover ${currentPage === 'departments' ? 'current-menu-item' : ''}`} onClick={() => setCurrentPage('departments')}>
                                    <Link to="/departments" className="woodmart-nav-link">
                                        <span className="nav-link-text">Departments</span>
                                    </Link>
                                </li>
                                <li id="menu-item-9648" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-9648 item-level-0 menu-simple-dropdown wd-event-hover ${currentPage === 'delivery-return' ? 'current-menu-item' : ''}`} onClick={() => setCurrentPage('delivery-return')}>
                                    <Link to="/delivery-return/" className="woodmart-nav-link">
                                        <span className="nav-link-text">Delivery &amp; Return</span>
                                    </Link>
                                </li>
                                <li id="menu-item-14317" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-14317 item-level-0 menu-simple-dropdown wd-event-hover ${currentPage === 'about' ? 'current-menu-item' : ''}`} onClick={() => setCurrentPage('about')}>
                                    <Link to="/about" className="woodmart-nav-link">
                                        <span className="nav-link-text">About Us</span>
                                    </Link>
                                </li>
                                <li id="menu-item-9649" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-9649 item-level-0 menu-simple-dropdown wd-event-hover ${currentPage === 'contact' ? 'current-menu-item' : ''}`} onClick={() => setCurrentPage('contact')}>
                                    <Link to="/contact" className="woodmart-nav-link">
                                        <span className="nav-link-text">Contact us</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="whb-column whb-col-right whb-visible-lg w-fit">
                        <div id="wd-66a0768d5aa52" className="whb-87fq3q21uzj9vysikzgd wd-button-wrapper text-center">
                            <Link to="/solar-installation/" title="" className="btn btn-scheme-light btn-scheme-hover-dark btn-style-default btn-style-semi-round btn-size-default">
                                Solar Installations
                            </Link>
                        </div>
                        <div className="wd-header-my-account wd-tools-element wd-event-hover wd-design-7 wd-account-style-icon login-side-opener whb-7qrb5r43fmh57lkx4dry">
                            <Link to="/my-account/login" title="My account">
                                <span className="wd-tools-icon"><GoPerson style={{ fontSize: "1.3rem", color: "black" }} /></span>
                                <span className="wd-tools-text"> Login / Register </span>
                            </Link>
                        </div>
                        <div className="wd-header-wishlist wd-tools-element wd-style-icon wd-with-count wd-design-7 whb-j9nqf397yrj3s8c855md" title="My Wishlist">
                            <Link to="/wishlist">
                                <span className="wd-tools-icon">
                                    <CiHeart style={{ fontSize: "1.3rem", color: "black" }} />
                                </span>
                                <span className="wd-tools-text"> Wishlist </span>
                            </Link>
                        </div>
                        <div className="wd-header-cart wd-tools-element wd-design-7 cart-widget-opener wd-style-text whb-eyi35wj5v52my2hec8de">
                            <a title="Shopping cart">
                                <span className="wd-tools-icon" onClick={() => setShowCart(true)}>
                                    <IoMdCart style={{ fontSize: "1.3rem", cursor: "pointer" }} />

                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopNavigation;
