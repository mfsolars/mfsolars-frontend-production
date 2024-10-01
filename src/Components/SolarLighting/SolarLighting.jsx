import React, { useEffect,useState } from 'react';
import "./SolarLighting.css";
import Product from "../Product/Product";
import { Link } from 'react-router-dom';
import axios from "axios";
import { MdKeyboardArrowRight } from "react-icons/md";


function SolarLighting({ department, moreproducts }) {

    const [Products, setProducts] = useState([]);


    const getDepartment = async() => {
        const {data } = await axios.get(`/api/mfsolars/v1/products?category=${department}`);
        if (data) {
            setProducts(data?.products);
        }
    }
    useEffect(() => {
        getDepartment();
    }, [department]); 

    return (
        <>
        {
            Products?.length > 0?<>
            
            <div className="elementor-widget-wrap elementor-element-populated mfsolars0-10-161-162 mfsolars-iwPyn  px-4" style={{ marginTop: "1rem", marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div className="elementor-element elementor-element-6939e1e elementor-widget__width-auto elementor-widget elementor-widget-wd_title mfsolars0-11-162-163">
                    <div className="elementor-widget-container mfsolars0-12-163-164">
                        <div className="title-wrapper set-mb-s reset-last-child wd-solarlight-title-color-default wd-solarlight-title-style-default wd-solarlight-title-size-medium text-left mfsolars0-13-164-165">
                            <div className="liner-continer mfsolars0-14-165-166">
                                <h4 className="woodmart-title-container title wd-solarlight-fontsize-xl mfsolars0-15-166-167" style={{ fontWeight: "500", fontSize: "1.8rem", color: "rgb(0, 0, 0, 0.85)" }}>
                                {department.replace(/-+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="elementor-element elementor-element-31f0652 elementor-widget__width-auto elementor-widget elementor-widget-wd_button mfsolars0-11-162-168">
                    <div className="elementor-widget-container mfsolars0-12-168-169">
                        <div className="wd-solarlight-button-wrapper text-left mfsolars0-13-169-170">
                            <Link
                                className="btn btn-style-default btn-style-round btn-size-default btn-scheme-custom btn-scheme-hover-custom btn-icon-pos-right"
                                to={moreproducts}
                            >
                                <span className="wd-solarlight-btn-text mfsolars0-15-171-172 text-slate-100">
                                    More Products
                                </span>
                                <span className="wd-solarlight-btn-icon mfsolars0-15-171-173 text-slate-100 text-xl">
                                   <MdKeyboardArrowRight/>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="elementor-element elementor-element-64427e1 elementor-widget elementor-widget-wd_products mfsolars0-11-162-175">
                <div className="elementor-widget-container mfsolars0-12-175-176">
                    <div className="wd-solarlight-products-element mfsolars0-13-176-177">
                        <div className="products flex flex-row overflow-x-scroll overflow-y-hidden no-scrollbar" style={{height:"fit-content"}} >
                            {/* Map through products and render Product component */}
                             {Products.map(item => (
                                <Product key={item._id} product={item} wishlist={""} setWishListItems={null} />
                            ))}
                        </div>  
                    </div>
                </div>
            </div>
        </div>


            </>:""
        }
        </>
    );
}

export default SolarLighting;
