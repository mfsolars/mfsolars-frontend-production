import "../../Components/SolarLighting/SolarLighting.css";
import "./NoWishList.css";
import Product from "../../Components/Product/Product";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useSelector } from "react-redux";

function WishList() {
    const department = "YOUR PRODUCTS WISHLIST";
    const [wishListItems, setWishListItems] = useState([]);
    const ActiveUser = useSelector(state => state.user.user);

    const getWishlistItems = async () => {
        try {
            let response = await axios.get("/api/mfsolars/v1/product/wishlist");
            if (response) {
                return response.data.wishlist;
            } else {
                return [];
            }
        } catch (error) {
            return [];
        }
    };

    useEffect(() => {
        const fetchWishlistItems = async () => {
            const items = await getWishlistItems();
            setWishListItems(items);
        };

        fetchWishlistItems();
    }, [ActiveUser]);


    return (
        <>
            {ActiveUser && wishListItems.length !== 0 ? (
                <div className="elementor-widget-wrap elementor-element-populated mfsolars0-10-161-162 mfsolars-iwPyn" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div className="elementor-element elementor-element-6939e1e elementor-widget__width-auto elementor-widget elementor-widget-wd_title mfsolars0-11-162-163">
                            <div className="elementor-widget-container mfsolars0-12-163-164">
                                <div className="title-wrapper set-mb-s reset-last-child wd-solarlight-title-color-default wd-solarlight-title-style-default wd-solarlight-title-size-medium text-left mfsolars0-13-164-165">
                                    <div className="liner-continer mfsolars0-14-165-166">
                                        <h4 className="woodmart-title-container title wd-solarlight-fontsize-xl mfsolars0-15-166-167" style={{ fontWeight: "500", fontSize: "1.8rem", color: "rgb(0, 0, 0,0.85)" }}>
                                            {department}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="elementor-element elementor-element-64427e1 elementor-widget elementor-widget-wd_products mfsolars0-11-162-175">
                        <div className="elementor-widget-container mfsolars0-12-175-176">
                            <div className="wd-solarlight-products-element mfsolars0-13-176-177">
                                <div className="products elements-grid row wd-solarlight-products-holder pagination- wd-solarlight-spacing-20 grid-columns-5 title-line-one wd-solarlight-stretch-cont-lg align-items-start wd-solarlight-products-with-bg mfsolars0-14-177-178">
                                    {/* products */}
                                    {ActiveUser != null && wishListItems?.map((item) => (
                                        <Product key={item._id} product={item} wishlist="wishlist" setWishListItems={setWishListItems} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="main-page-wrapper mfsolars-W1ayK" style={{ marginTop: "2rem", background: "aliceblue" }}>
                    <div className="container">
                        <div className="row content-layout-wrapper align-items-start">
                            <div className="site-content col-lg-12 col-12 col-md-12" role="main">
                                <article id="post-118" className="post-118 page type-page status-publish hentry">
                                    <div className="entry-content">
                                        <div data-elementor-type="wp-page" data-elementor-id={118} className="elementor elementor-118" data-elementor-post-type="page">
                                            <section className="wd-negative-gap elementor-section elementor-top-section elementor-element elementor-element-f8863df elementor-section-boxed elementor-section-height-default elementor-section-height-default wd-section-disabled" data-id="f8863df" data-element_type="section">
                                                <div className="elementor-container elementor-column-gap-default">
                                                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-521f086" data-id="521f086" data-element_type="column">
                                                        <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-e2ed285 elementor-widget elementor-widget-wd_wishlist" data-id="e2ed285" data-element_type="widget" data-widget_type="wd_wishlist.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="">
                                                                        <div className="wd-wishlist-content">
                                                                            <p className="wd-empty-wishlist wd-empty-page"> This wishlist is empty. </p>
                                                                            <div className="wd-empty-page-text"> You don't have any products in the wishlist yet. <br /> You will find a lot of interesting products on our "Shop" page. </div>
                                                                            <p className="return-to-shop">
                                                                                <Link className="button" to="/products/shop"> Return to shop </Link>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default WishList;
