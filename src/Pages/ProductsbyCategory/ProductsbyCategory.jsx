import "./ProductsbyCategory.css";
import { useState,useEffect } from "react";
import Slider from 'react-slider';
import ProductPageProduct from "../../Components/ProductPageProduct/ProductPageProduct";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Store/Product Reducers/productSlice";

// icons 
import { GrFormNextLink } from "react-icons/gr";
import { IoIosArrowRoundBack } from "react-icons/io";



function ProductsbyCategory() {
    const [minPrice, setMinPrice] = useState(500);
    const [maxPrice, setMaxPrice] = useState(50000);
    const { category } = useParams();
    const dispatch = useDispatch();
    const ProductsData = useSelector(state => state.product);
    const Products = ProductsData.products;
    const totalProducts = ProductsData.productCount;
    const ResultperPage = ProductsData.resultperPage;
    const searchbase = localStorage.getItem("keyword");
    const [page,setPage] = useState(1);
    
    const handleSliderChange = (values) => {
        setMinPrice(values[0]);
        setMaxPrice(values[1]);
    };
    useEffect(()=>{
        setMinPrice(500);
        setMaxPrice(50000);
    },[searchbase,category])
   
    useEffect(() => {
        if(category=="search"){
            dispatch(getProducts({ keyword: searchbase,category:"",loweramount:minPrice,highamount:maxPrice,page:page }));
        }else if(category=="shop"){
            dispatch(getProducts({ category: "",loweramount:minPrice,highamount:maxPrice,page:page }));
        }
        else{
            dispatch(getProducts({ category: category,loweramount:minPrice,highamount:maxPrice,page:page }));
        }
    }, [dispatch, category,minPrice,maxPrice,searchbase,page]);

    


    return (<>
        <div className="productdisplay">
            {/* part1 start */}
            <div className="elementor-filters-widget-wrap elementor-filters-element-populated mfsolars-3orLq">
                <section
                    className="wd-negative-gap elementor-filters-section elementor-filters-inner-section elementor-filters-element elementor-filters-element-3f032b7 elementor-filters-section-boxed elementor-filters-section-height-default elementor-filters-section-height-default wd-section-disabled"
                    data-id="3f032b7"
                    data-element_type="section"
                    data-settings='{"background_background":"classic"}'
                >
                    <div className="elementor-filters-container elementor-filters-column-gap-default">
                        <div
                            className="elementor-filters-column elementor-filters-col-100 elementor-filters-inner-column elementor-filters-element elementor-filters-element-47405b7"
                            data-id="47405b7"
                            data-element_type="column"
                        >
                            <div className="elementor-filters-widget-wrap elementor-filters-element-populated">
                                <div
                                    className="elementor-filters-element elementor-filters-element-2cf6e2a elementor-filters-widget elementor-filters-widget-wd_sidebar"
                                    data-id="2cf6e2a"
                                    data-element_type="widget"
                                    data-widget_type="wd_sidebar.default"
                                >
                                    <div className="elementor-filters-widget-container">
                                        <div
                                            id="woocommerce_price_filter-5"
                                            className="wd-widget widget sidebar-widget woocommerce-filter widget_price_filter"
                                        >
                                            <h5 className="widget-title">Filter by price</h5>
                                            <form method="get">
                                                <div className="price_slider_wrapper">
                                                    <Slider
                                                        className="price_slider"
                                                        value={[minPrice, maxPrice]}
                                                        min={500}
                                                        max={50000}
                                                        step={50}
                                                        onChange={handleSliderChange}
                                                        renderTrack={(props, state) => <div {...props} className="ui-slider-range ui-corner-all ui-widget-header style-1Pcy6" />}
                                                        renderThumb={(props, state) => <div {...props} className={`ui-slider-handle ui-corner-all ui-state-default ${state.index === 0 ? 'style-DoTAN' : 'style-NczcD'}`} />}
                                                    />
                                                    <div className="price_slider_amount" data-step={10} style={{ color: "black" }}>
                                                        <label className="screen-reader-text" htmlFor="min_price">
                                                            Min price
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="min_price"
                                                            name="min_price"
                                                            value={minPrice}
                                                            onChange={(e) => setMinPrice(Number(e.target.value))}
                                                            data-min={500}
                                                            placeholder="Min price"
                                                            className="style-Fi7ds"
                                                        />
                                                        <label className="screen-reader-text" htmlFor="max_price">
                                                            Max price
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="max_price"
                                                            name="max_price"
                                                            value={maxPrice}
                                                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                                                            data-max={50000}
                                                            placeholder="Max price"
                                                            className="style-Tb8V3"
                                                        />
                                                        <div className="price_label" style={{ color: "black" }}>
                                                            Price: <span className="from" style={{ color: "black" }}>R{minPrice}</span> — <span className="to" style={{ color: "black" }}>R{maxPrice}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div
                                            id="woocommerce_product_categories-2"
                                            className="wd-widget widget sidebar-widget woocommerce-filter widget_product_categories"
                                        >
                                            <h5 className="widget-title">Product categories</h5>
                                            <ul className="product-categories">
                                                <li className="cat-item cat-item-203">
                                                    <Link to="/products/on-sale/">
                                                        On Sale
                                                    </Link>
                                                </li>
                                                <li className="cat-item cat-item-203">
                                                    <Link to="/products/inverter">
                                                        Inverter
                                                    </Link>
                                                </li>
                                                <li className="cat-item cat-item-197 current-cat">
                                                    <Link to="/products/solar-accessories">
                                                        Solar Accessories
                                                    </Link>
                                                </li>
                                                <li className="cat-item cat-item-197 current-cat">
                                                    <Link to="/products/solar-batteries/">
                                                        Solar Batteries
                                                    </Link>
                                                </li>
                                                <li className="cat-item cat-item-187 cat-parent">
                                                    <Link to="/products/solar-kit">
                                                        Solar Kit
                                                    </Link>
                                                </li>
                                                <li className="cat-item cat-item-176 cat-parent">
                                                    <Link to="/products/solar-lights">
                                                        Solar Lights
                                                    </Link>
                                                </li>
                                                <li className="cat-item cat-item-190 cat-parent">
                                                    <Link to="/products/solar-security-camera">
                                                        Solar Security Cameras
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* part1 end */}

            {/* products part   start*/}
            <div className="elementor-widget-wrap elementor-element-filters-populated mfsolars-gUv6m">
                <section
                    className="wd-negative-gap elementor-section elementor-inner-section elementor-element-filters elementor-element-filters-ffac471 elementor-section-boxed elementor-section-height-default elementor-section-height-default wd-section-disabled"
                    data-id="ffac471"
                    data-element_type="section"
                >
                    <div className="elementor-container elementor-column-gap-default" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div
                            className="elementor-column elementor-col-33 elementor-inner-column elementor-element-filters elementor-element-filters-be392e3"
                            data-id="be392e3"
                            data-element_type="column"
                        >
                            <div className="elementor-widget-wrap elementor-element-filters-populated">
                                <div
                                    className="elementor-element-filters elementor-element-filters-df0bb93 wd-woo-page-title text-left elementor-widget elementor-widget-wd_shop_archive_woocommerce_title"
                                    data-id="df0bb93"
                                    data-element_type="widget"
                                    data-widget_type="wd_shop_archive_woocommerce_title.default"
                                >
                                    <div className="elementor-widget-container">
                                        <h1 className="entry-title title">{category.replace(/-+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-column elementor-col-66 elementor-inner-column elementor-element-filters elementor-element-filters-193a70f"
                            data-id="193a70f"
                            data-element_type="column"
                            style={{ width: "20vw", marginRight: "1rem" }}
                        >
                            <div className="elementor-widget-wrap elementor-element-filters-populated">


                                <div
                                    className="elementor-element-filters elementor-element-filters-0c9d547 elementor-widget__width-auto elementor-hidden-mobile wd-shop-ordering elementor-widget elementor-widget-wd_shop_archive_orderby"
                                    data-id="0c9d547"
                                    data-element_type="widget"
                                    data-widget_type="wd_shop_archive_orderby.default"
                                >
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div
                    className="elementor-element-filters elementor-element-filters-78b73af wd-wc-notices elementor-widget elementor-widget-wd_wc_notices"
                    data-id="78b73af"
                    data-element_type="widget"
                    data-widget_type="wd_wc_notices.default"
                >
                    <div className="elementor-widget-container">
                        <div className="woocommerce-filter-notices-wrapper" />
                    </div>
                </div>
                <div
                    className="elementor-element-filters elementor-element-filters-26dfe0a wd-shop-product elementor-widget elementor-widget-wd_archive_products"
                    data-id="26dfe0a"
                    data-element_type="widget"
                    data-widget_type="wd_archive_products.default"
                >
                    <div className="elementor-widget-container">
                        <div className="wd-sticky-loader wd-position-stick">
                            <span className="wd-loader" />
                        </div>
                        <div
                            className="products elements-grid wd-products-holder  wd-spacing-20 grid-columns-4 pagination-pagination title-line-one wd-stretch-cont-lg align-items-start wd-products-with-bg row"
                            data-source="main_loop"
                            data-min_price=""
                            data-max_price=""
                            data-columns={4}
                        >



                            {/* loader area  */}

                            {
                                Products?.length === 0 ? <div className="loader-wrapper"><svg viewBox="25 25 50 50" className="loader">
                                    <circle r="20" cy="50" cx="50"></circle>
                                </svg ></div> :  Products?.map(item => (
                                <ProductPageProduct key={item._id} product={item} />
                            ))
                            }



                        </div>
                        {
                           (Math.ceil(totalProducts/ResultperPage)>1) && !Products?.length<8?<>
                           
                           <div className="wd-loop-footer products-footer">
                                <nav className="woocommerce-filter-pagination wd-pagination">
                                    <ul className="page-numbers" >

                                        {
                                            Products?.length<=8 && page>1?<>
                                            <li style={{marginRight:"1rem",border:"1px solid gray", borderRadius:"5px"}} onClick={()=>setPage(page-1)}>
                                            <span aria-current="page" className="page-numbers">
                                        <IoIosArrowRoundBack style={{fontSize:"1.3rem", color:"gray",cursor:"pointer"}} />

                                            </span>
                                        </li>
                                        </>:""
                                        }
                                        
                                        <li>
                                            <span aria-current="page" className="page-numbers current">
                                                {page}
                                            </span>
                                        </li>

                                        {
                                            page<(Math.ceil(totalProducts/ResultperPage)) && Products?.length>=8 ?<>
                                            
                                            <li style={{marginLeft:"1rem",border:"1px solid gray", borderRadius:"5px"}} onClick={()=>setPage(page+1)}>
                                            <span aria-current="page" className="page-numbers">
                                            <GrFormNextLink style={{fontSize:"1.3rem", color:"gray",cursor:"pointer"}} />
                                            </span>
                                        </li>

                                            </>:""
                                        }
                                        
                                    </ul>
                                </nav>
                            </div>

                           </>:""
                        }
                    </div>
                </div>
            </div>

            {/* products part   end*/}
        </div>
    </>);
}

export default ProductsbyCategory;