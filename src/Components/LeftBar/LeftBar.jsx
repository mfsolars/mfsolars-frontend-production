import "./LeftBar.css";
import { Link } from 'react-router-dom';
import { MdMenu } from "react-icons/md";
function LeftBar() {
    return (<>
        <div className="left-wd-sticky-nav wd-hide-md mfsolars0-0-0-1 mfsolars-FkWBZ hidden lg:block">
            <div className="left-wd-sticky-nav-title">
                <MdMenu style={{minWidth:"25px",minHeight:"25px",transform:"translateX(-2px)"}}/>
                <span className="mfsolars0-2-2-3" style={{color:"rgb(255, 255, 255,0.85)"}}>All Categories </span>
            </div>
            <ul
                id="menu-sticky-navigation-mega-electronics"
                className="menu left-wd-nav left-left-wd-nav-vertical left-left-wd-nav-sticky mfsolars0-1-1-4 wd-offsets-calculated"
            >
                <li
                    id="menu-item-14244"
                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-14244 item-level-0 menu-simple-dropdown wd-event-hover mfsolars0-2-4-5"
                >
                    <Link
                        to="/products/inverter/"
                        className="woodmart-nav-link mfsolars0-3-5-6"
                    >
                        <img
                            width={150}
                            height={150}
                            src="https://invertsolar.co.za/wp-content/uploads/2023/10/air-conditioner-1-150x150.png"
                            className="left-wd-nav-img mfsolars0-4-6-7"
                            alt=""
                            decoding="async"
                        />
                        <span className="nav-link-text mfsolars0-4-6-8">Inverter</span>
                    </Link>
                </li>
                <li
                    id="menu-item-14238"
                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-14238 item-level-0 menu-simple-dropdown wd-event-hover mfsolars0-2-4-9"
                >
                    <Link
                        to="/products/solar-accessories/"
                        className="woodmart-nav-link mfsolars0-3-9-10"
                    >
                        <img
                            width={150}
                            height={150}
                            src="https://invertsolar.co.za/wp-content/uploads/2023/10/renewable-energy-1-150x150.png"
                            className="left-wd-nav-img mfsolars0-4-10-11"
                            alt=""
                            decoding="async"
                        />
                        <span className="nav-link-text mfsolars0-4-10-12">
                            Solar Accessories
                        </span>
                    </Link>
                </li>
                <li
                    id="menu-item-14239"
                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-14239 item-level-0 menu-simple-dropdown wd-event-hover mfsolars0-2-4-13"
                >
                    <Link
                        to="/products/solar-batteries/"
                        className="woodmart-nav-link mfsolars0-3-13-14"
                    >
                        <img
                            width={150}
                            height={150}
                            src="https://invertsolar.co.za/wp-content/uploads/2023/10/battery-2-1-150x150.png"
                            className="left-wd-nav-img mfsolars0-4-14-15"
                            alt=""
                            decoding="async"
                        />
                        <span className="nav-link-text mfsolars0-4-14-16">Solar Batteries</span>
                    </Link>
                </li>
                <li
                    id="menu-item-14240"
                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-14240 item-level-0 menu-simple-dropdown wd-event-hover mfsolars0-2-4-17"
                >
                    <Link
                        to="/products/solar-kit/"
                        className="woodmart-nav-link mfsolars0-3-17-18"
                    >
                        <img
                            width={150}
                            height={150}
                            src="https://invertsolar.co.za/wp-content/uploads/2023/10/solar-energy-2-150x150.png"
                            className="left-wd-nav-img mfsolars0-4-18-19"
                            alt=""
                            decoding="async"
                        />
                        <span className="nav-link-text mfsolars0-4-18-20">Solar Kit</span>
                    </Link>
                </li>
                <li
                    id="menu-item-14241"
                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-14241 item-level-0 menu-simple-dropdown wd-event-hover mfsolars0-2-4-21"
                >
                    <Link
                        to="/products/solar-lights/"
                        className="woodmart-nav-link mfsolars0-3-21-22"
                    >
                        <img
                            width={150}
                            height={150}
                            src="https://invertsolar.co.za/wp-content/uploads/2023/10/light-bulb-150x150.png"
                            className="left-wd-nav-img mfsolars0-4-22-23"
                            alt=""
                            decoding="async"
                        />
                        <span className="nav-link-text mfsolars0-4-22-24">Solar Lights</span>
                    </Link>
                </li>
                <li
                    id="menu-item-14242"
                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-14242 item-level-0 menu-simple-dropdown wd-event-hover mfsolars0-2-4-25"
                >
                    <Link
                        to="/products/solar-security-camera/"
                        className="woodmart-nav-link mfsolars0-3-25-26"
                    >
                        <img
                            width={150}
                            height={150}
                            src="https://invertsolar.co.za/wp-content/uploads/2023/10/mechanism-150x150.png"
                            className="left-wd-nav-img mfsolars0-4-26-27"
                            alt=""
                            decoding="async"
                        />
                        <span className="nav-link-text mfsolars0-4-26-28">
                            Solar Security Camera
                        </span>
                    </Link>
                </li>
            </ul>
        </div>

    </>);
}

export default LeftBar;