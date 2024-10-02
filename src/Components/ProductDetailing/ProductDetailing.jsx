import "./ProductDetailing.css";
import Product from "../Product/Product";
import { Link } from 'react-router-dom';
import { useEffect,useState } from "react";
import axios from "axios";
function ProductDetailing() {
        const [product, setProduct] = useState({});
        const API_URL = import.meta.env.VITE_API_URL;
    const getSingleProduct = async () => {
        const {data } = await axios.get(`${API_URL}/mfsolars/v1/products?category=inverter`,{
            withCredentials: true,
        });
        if (data) {
            setProduct(data?.products[0]);
        }

    }
    useEffect(() => {
        getSingleProduct();
    },[])
    return (<>
        <div className="detailsportion flex flex-col lg:flex-row lg:gap-16 gap-16 px-8">
            <div className="elementor-widget-wrap elementor-element-populated mfsolars0-10-1130-1131 mfsolars0-4-1124-1125 mfsolars0-0-0-1 mfsolars-ZtbCz">
                <section
                    className="wd-negative-gap elementor-section elementor-inner-section elementor-element elementor-element-01d3407 elementor-section-content-middle elementor-section-boxed elementor-section-height-default wd-section-disabled mfsolars0-11-1131-1132 mfsolars0-5-1125-1126 mfsolars0-1-1-2"
                    data-id="01d3407"
                    data-element_type="section"
                    data-settings='{"background_background":"classic"}'
                >
                    <div className="elementor-container elementor-column-gap-default mfsolars0-12-1132-1133 mfsolars0-6-1126-1127 mfsolars0-2-2-3 sm:flex-row flex-col">
                        <div
                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b669cda elementor-hidden-mobile mfsolars0-13-1133-1134 mfsolars0-7-1127-1128 mfsolars0-3-3-4"
                            data-id="b669cda"
                            data-element_type="column"
                        >
                            <div className="elementor-widget-wrap elementor-element-populated mfsolars0-14-1134-1135 mfsolars0-8-1128-1129 mfsolars0-4-4-5">
                                <div
                                    className="elementor-element elementor-element-61f8573 elementor-widget elementor-widget-image mfsolars0-15-1135-1136 mfsolars0-9-1129-1130 mfsolars0-5-5-6"
                                    data-id="61f8573"
                                    data-element_type="widget"
                                    data-widget_type="image.default"
                                >
                                    <div className="elementor-widget-container mfsolars0-16-1136-1137 mfsolars0-10-1130-1131 mfsolars0-6-6-7">
                                        <img
                                            loading="lazy"
                                            decoding="async"
                                            width={900}
                                            height={900}
                                            src="https://invertsolar.co.za/wp-content/uploads/2023/06/Untitled-design-13.png"
                                            className="attachment-full size-full wp-image-9626 mfsolars0-17-1137-1138 mfsolars0-11-1131-1132 mfsolars0-7-7-8"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-224b9a4 mfsolars0-13-1133-1139 mfsolars0-7-1127-1133 mfsolars0-3-3-9"
                            data-id="224b9a4"
                            data-element_type="column"
                        >
                            <div className="elementor-widget-wrap elementor-element-populated mfsolars0-14-1139-1140 mfsolars0-8-1133-1134 mfsolars0-4-9-10">
                                <div
                                    className="elementor-element elementor-element-71b23df elementor-widget elementor-widget-wd_title mfsolars0-15-1140-1141 mfsolars0-9-1134-1135 mfsolars0-5-10-11"
                                    data-id="71b23df"
                                    data-element_type="widget"
                                    data-widget_type="wd_title.default"
                                >
                                    <div className="elementor-widget-container mfsolars0-16-1141-1142 mfsolars0-10-1135-1136 mfsolars0-6-11-12">
                                        <div className="title-wrapper set-mb-s reset-last-child wd-title-color-default wd-title-style-default wd-title-size-default text-left mfsolars0-17-1142-1143 mfsolars0-11-1136-1137 mfsolars0-7-12-13">
                                            <div className="liner-continer mfsolars0-18-1143-1144 mfsolars0-12-1137-1138 mfsolars0-8-13-14">
                                                <h4 className="woodmart-title-container title wd-fontsize-l mfsolars0-19-1144-1145 mfsolars0-13-1138-1139 mfsolars0-9-14-15" style={{ fontSize: "3rem" }}>
                                                    Hybrid Inverter
                                                </h4>
                                            </div>
                                            <div className="title-after_title set-cont-mb-s reset-last-child wd-fontsize-xs mfsolars0-18-1143-1146 mfsolars0-12-1137-1140 mfsolars0-8-13-16">
                                                <p className="mfsolars0-19-1146-1147 mfsolars0-13-1140-1141 mfsolars0-9-16-17" style={{ color: "black" }}>
                                                    Looking for an energy solution that is both efficient and
                                                    environmentally friendly? Consider purchasing a hybrid
                                                    inverter, the most recent advancement in renewable energy
                                                    technology. A hybrid inverter combines the advantages of
                                                    solar panels and battery storage, allowing you to use solar
                                                    energy during the day while storing surplus electricity for
                                                    use at night or during periods of low sunlight. This
                                                    intelligent device optimizes energy use, assuring optimum
                                                    efficiency and cost savings. A hybrid inverter, with its
                                                    easy integration into current solar systems, provides a
                                                    sustainable and reliable power solution for both residential
                                                    and commercial applications.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 1 */}

                                <div style={{ display: "flex", flexDirection: "row", gap: "0.3rem" }}>
                                    <div
                                        className="elementor-element elementor-element-5415b41 elementor-widget__width-auto elementor-widget elementor-widget-wd_button mfsolars0-15-1140-1148 mfsolars0-9-1134-1142 mfsolars0-5-10-18"
                                        data-id="5415b41"
                                        data-element_type="widget"
                                        data-widget_type="wd_button.default"
                                    >
                                        <div className="elementor-widget-container mfsolars0-16-1148-1149 mfsolars0-10-1142-1143 mfsolars0-6-18-19">
                                            <div className="wd-button-wrapper text-left mfsolars0-17-1149-1150 mfsolars0-11-1143-1144 mfsolars0-7-19-20">
                                                <Link
                                                    className="btn btn-style-default btn-style-semi-round btn-size-small btn-color-default btn-icon-pos-left mfsolars0-18-1150-1151 mfsolars0-12-1144-1145 mfsolars0-8-20-21"
                                                    to="/products/inverter/"
                                                >
                                                    <span
                                                        className="wd-btn-text mfsolars0-19-1151-1152 mfsolars0-13-1145-1146 mfsolars0-9-21-22"
                                                        data-elementor-setting-key="text"
                                                    >
                                                        {" "}
                                                        Inverters{" "}
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 2 */}
                                    <div
                                        className="elementor-element elementor-element-1839ce0 elementor-widget__width-auto elementor-widget elementor-widget-wd_button mfsolars0-15-1140-1153 mfsolars0-9-1134-1147 mfsolars0-5-10-23"
                                        data-id="1839ce0"
                                        data-element_type="widget"
                                        data-widget_type="wd_button.default"
                                    >
                                        <div className="elementor-widget-container mfsolars0-16-1153-1154 mfsolars0-10-1147-1148 mfsolars0-6-23-24">
                                            <div className="wd-button-wrapper text-left mfsolars0-17-1154-1155 mfsolars0-11-1148-1149 mfsolars0-7-24-25">
                                                <Link
                                                    className="btn btn-style-default btn-style-semi-round btn-size-small btn-color-default btn-icon-pos-left mfsolars0-18-1155-1156 mfsolars0-12-1149-1150 mfsolars0-8-25-26"
                                                    to="/products/solar-batteries/"
                                                >
                                                    <span
                                                        className="wd-btn-text mfsolars0-19-1156-1157 mfsolars0-13-1150-1151 mfsolars0-9-26-27"
                                                        data-elementor-setting-key="text"
                                                    >
                                                        {" "}
                                                        Battery{" "}
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 3 */}
                                    <div
                                        className="elementor-element elementor-element-06c9ba3 elementor-widget__width-auto elementor-widget elementor-widget-wd_button mfsolars0-15-1140-1158 mfsolars0-9-1134-1152 mfsolars0-5-10-28"
                                        data-id="06c9ba3"
                                        data-element_type="widget"
                                        data-widget_type="wd_button.default"
                                    >
                                        <div className="elementor-widget-container mfsolars0-16-1158-1159 mfsolars0-10-1152-1153 mfsolars0-6-28-29">
                                            <div className="wd-button-wrapper text-left mfsolars0-17-1159-1160 mfsolars0-11-1153-1154 mfsolars0-7-29-30">
                                                <Link
                                                    className="btn btn-style-default btn-style-semi-round btn-size-small btn-color-default btn-icon-pos-left mfsolars0-18-1160-1161 mfsolars0-12-1154-1155 mfsolars0-8-30-31"
                                                    to="/products/solar-kit/"
                                                >
                                                    <span
                                                        className="wd-btn-text mfsolars0-19-1161-1162 mfsolars0-13-1155-1156 mfsolars0-9-31-32"
                                                        data-elementor-setting-key="text"
                                                    >
                                                        {" "}
                                                        Solar Kits{" "}
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                <section
                    className="wd-negative-gap elementor-section elementor-inner-section elementor-element elementor-element-607ee8f elementor-section-boxed elementor-section-height-default wd-section-disabled mfsolars0-11-1131-1163 mfsolars0-5-1125-1157 mfsolars0-1-1-33"
                    data-id="607ee8f"
                    data-element_type="section"
                >
                    <div className="elementor-container elementor-column-gap-default mfsolars0-12-1163-1164 mfsolars0-6-1157-1158 mfsolars0-2-33-34 sm:flex-row flex-col">
                        <div
                            className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-73ecf12 mfsolars0-13-1164-1165 mfsolars0-7-1158-1159 mfsolars0-3-34-35"
                            data-id="73ecf12"
                            data-element_type="column"
                        >
                            <div className="elementor-widget-wrap elementor-element-populated mfsolars0-14-1165-1166 mfsolars0-8-1159-1160 mfsolars0-4-35-36">
                                <div
                                    className="elementor-element elementor-element-f3ce360 elementor-widget elementor-widget-wd_banner mfsolars0-15-1166-1167 mfsolars0-9-1160-1161 mfsolars0-5-36-37"
                                    data-id="f3ce360"
                                    data-element_type="widget"
                                    data-widget_type="wd_banner.default"
                                >
                                    <div className="elementor-widget-container mfsolars0-16-1167-1168 mfsolars0-10-1161-1162 mfsolars0-6-37-38">
                                        <div className="promo-banner-wrapper mfsolars0-17-1168-1169 mfsolars0-11-1162-1163 mfsolars0-7-38-39">
                                            <div className="promo-banner banner-default banner-hover-zoom color-scheme-light banner-btn-size-small banner-btn-style-default mfsolars0-18-1169-1170 mfsolars0-12-1163-1164 mfsolars0-8-39-40">
                                                <div className="main-wrapp-img mfsolars0-19-1170-1171 mfsolars0-13-1164-1165 mfsolars0-9-40-41">
                                                    <div className="banner-image mfsolars0-20-1171-1172 mfsolars0-14-1165-1166 mfsolars0-10-41-42">
                                                        <img
                                                            loading="lazy"
                                                            decoding="async"
                                                            width={920}
                                                            height={560}
                                                            src="https://invertsolar.co.za/wp-content/uploads/2023/06/Untitled-design-8.png"
                                                            className="attachment-full size-full wp-image-9622 mfsolars0-21-1172-1173 mfsolars0-15-1166-1167 mfsolars0-11-42-43"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="wrapper-content-banner wd-fill wd-items-top wd-justify-left mfsolars0-19-1170-1174 mfsolars0-13-1164-1168 mfsolars0-9-40-44">
                                                    <div className="content-banner text-left mfsolars0-20-1174-1175 mfsolars0-14-1168-1169 mfsolars0-10-44-45">
                                                        <h4
                                                            className="banner-title wd-fontsize-l mfsolars0-21-1175-1176 mfsolars0-15-1169-1170 mfsolars0-11-45-46"
                                                            data-elementor-setting-key="title"
                                                        >
                                                            {" "}
                                                            Browse Inverters{" "}
                                                        </h4>
                                                        <div
                                                            className="banner-inner set-cont-mb-s reset-last-child wd-fontsize-xs mfsolars0-21-1175-1177 mfsolars0-15-1169-1171 mfsolars0-11-45-47"
                                                            data-elementor-setting-key="content"
                                                        >
                                                            <p className="mfsolars0-22-1177-1178 mfsolars0-16-1171-1172 mfsolars0-12-47-48">
                                                                Shop our wide selection of inverters today; from our
                                                                affordable combos to solar solutions. We have it all!
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div
                            className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6bf4691 mfsolars0-13-1164-1179 mfsolars0-7-1158-1173 mfsolars0-3-34-49"
                            data-id="6bf4691"
                            data-element_type="column"
                        >
                            <div className="elementor-widget-wrap elementor-element-populated mfsolars0-14-1179-1180 mfsolars0-8-1173-1174 mfsolars0-4-49-50">
                                <div
                                    className="elementor-element elementor-element-22a8191 elementor-widget elementor-widget-wd_banner mfsolars0-15-1180-1181 mfsolars0-9-1174-1175 mfsolars0-5-50-51"
                                    data-id="22a8191"
                                    data-element_type="widget"
                                    data-widget_type="wd_banner.default"
                                >
                                    <div className="elementor-widget-container mfsolars0-16-1181-1182 mfsolars0-10-1175-1176 mfsolars0-6-51-52">
                                        <div className="promo-banner-wrapper mfsolars0-17-1182-1183 mfsolars0-11-1176-1177 mfsolars0-7-52-53">
                                            <div className="promo-banner banner-default banner-hover-zoom color-scheme-light banner-btn-size-small banner-btn-style-default mfsolars0-18-1183-1184 mfsolars0-12-1177-1178 mfsolars0-8-53-54">
                                                <div className="main-wrapp-img mfsolars0-19-1184-1185 mfsolars0-13-1178-1179 mfsolars0-9-54-55">
                                                    <div className="banner-image mfsolars0-20-1185-1186 mfsolars0-14-1179-1180 mfsolars0-10-55-56">
                                                        <img
                                                            loading="lazy"
                                                            decoding="async"
                                                            width={920}
                                                            height={560}
                                                            src="https://invertsolar.co.za/wp-content/uploads/2023/06/Untitled-design-7.png"
                                                            className="attachment-full size-full wp-image-9623 mfsolars0-21-1186-1187 mfsolars0-15-1180-1181 mfsolars0-11-56-57"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="wrapper-content-banner wd-fill wd-items-top wd-justify-left mfsolars0-19-1184-1188 mfsolars0-13-1178-1182 mfsolars0-9-54-58">
                                                    <div className="content-banner text-left mfsolars0-20-1188-1189 mfsolars0-14-1182-1183 mfsolars0-10-58-59">
                                                        <h4
                                                            className="banner-title wd-fontsize-l mfsolars0-21-1189-1190 mfsolars0-15-1183-1184 mfsolars0-11-59-60"
                                                            data-elementor-setting-key="title"
                                                        >
                                                            {" "}
                                                            Affordable Battery Solutions{" "}
                                                        </h4>
                                                        <div
                                                            className="banner-inner set-cont-mb-s reset-last-child wd-fontsize-xs mfsolars0-21-1189-1191 mfsolars0-15-1183-1185 mfsolars0-11-59-61"
                                                            data-elementor-setting-key="content"
                                                        >
                                                            <p className="mfsolars0-22-1191-1192 mfsolars0-16-1185-1186 mfsolars0-12-61-62">
                                                                Explore a great selection of battery solutions that
                                                                can help you beat loadshedding.&nbsp;
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        
                        <div
                            className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-d85f0d9 mfsolars0-13-1164-1193 mfsolars0-7-1158-1187 mfsolars0-3-34-63"
                            data-id="d85f0d9"
                            data-element_type="column"
                        >
                            <div className="elementor-widget-wrap elementor-element-populated mfsolars0-14-1193-1194 mfsolars0-8-1187-1188 mfsolars0-4-63-64">
                                <div
                                    className="elementor-element elementor-element-c1d4976 elementor-widget elementor-widget-wd_banner mfsolars0-15-1194-1195 mfsolars0-9-1188-1189 mfsolars0-5-64-65"
                                    data-id="c1d4976"
                                    data-element_type="widget"
                                    data-widget_type="wd_banner.default"
                                >
                                    <div className="elementor-widget-container mfsolars0-16-1195-1196 mfsolars0-10-1189-1190 mfsolars0-6-65-66">
                                        <div className="promo-banner-wrapper mfsolars0-17-1196-1197 mfsolars0-11-1190-1191 mfsolars0-7-66-67">
                                            <div className="promo-banner banner-default banner-hover-zoom color-scheme-light banner-btn-size-small banner-btn-style-default mfsolars0-18-1197-1198 mfsolars0-12-1191-1192 mfsolars0-8-67-68">
                                                <div className="main-wrapp-img mfsolars0-19-1198-1199 mfsolars0-13-1192-1193 mfsolars0-9-68-69">
                                                    <div className="banner-image mfsolars0-20-1199-1200 mfsolars0-14-1193-1194 mfsolars0-10-69-70">
                                                        <img
                                                            loading="lazy"
                                                            decoding="async"
                                                            width={920}
                                                            height={560}
                                                            src="https://invertsolar.co.za/wp-content/uploads/2023/06/Untitled-design-9.png"
                                                            className="attachment-full size-full wp-image-9621 mfsolars0-21-1200-1201 mfsolars0-15-1194-1195 mfsolars0-11-70-71"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="wrapper-content-banner wd-fill wd-items-top wd-justify-left mfsolars0-19-1198-1202 mfsolars0-13-1192-1196 mfsolars0-9-68-72">
                                                    <div className="content-banner text-left mfsolars0-20-1202-1203 mfsolars0-14-1196-1197 mfsolars0-10-72-73">
                                                        <h4
                                                            className="banner-title wd-fontsize-l mfsolars0-21-1203-1204 mfsolars0-15-1197-1198 mfsolars0-11-73-74"
                                                            data-elementor-setting-key="title"
                                                        >
                                                            {" "}
                                                            Shop The Best Deals Today{" "}
                                                        </h4>
                                                        <div
                                                            className="banner-inner set-cont-mb-s reset-last-child wd-fontsize-xs mfsolars0-21-1203-1205 mfsolars0-15-1197-1199 mfsolars0-11-73-75"
                                                            data-elementor-setting-key="content"
                                                        >
                                                            <p className="mfsolars0-22-1205-1206 mfsolars0-16-1199-1200 mfsolars0-12-75-76">
                                                                Browse our wide range of security cameras, solar
                                                                lighting, inverters and batteries.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>

            {
                product && <div className="singledisplay lg:max-w-[300px] flex justify-center flex-col gap-24">
                <div className="topdata md:scale-100 scale-90 md:mb-0 mb-10  ">
                <Product key={product?._id} product={product} wishlist={""} setWishListItems={null} />
                </div>
                <div className="downdata">
                    <div className="elementor-widget-wrap elementor-element-populated mfsolars0-0-0-1 mfsolars-7Whga">

                        <div className="elementor-element elementor-element-e60b8c6 elementor-widget elementor-widget-wd_banner mfsolars0-1-1-72" data-id="e60b8c6" data-element_type="widget" data-widget_type="wd_banner.default">
                            <div className="elementor-widget-container mfsolars0-2-72-73">
                                <div className="promo-banner-wrapper mfsolars0-3-73-74">
                                    <div className="promo-banner banner-default banner-hover-zoom color-scheme-light banner-btn-size-small banner-btn-style-default mfsolars0-4-74-75">
                                        <div className="main-wrapp-img mfsolars0-5-75-76">
                                            <div className="banner-image mfsolars0-6-76-77">
                                                <img loading="lazy" decoding="async" style={{ width: "920px", height: "16rem" }} src="https://invertsolar.co.za/wp-content/uploads/2023/06/Untitled-design-34.png" className="attachment-full size-full wp-image-13084 mfsolars0-7-77-78" alt="" />
                                            </div>
                                        </div>
                                        <div className="wrapper-content-banner wd-fill wd-items-top wd-justify-left mfsolars0-5-75-79 mfsolars0-0-0-1 tether-element-attached-top tether-element-attached-center tether-target-attached-top tether-target-attached-center">
                                            <div className="content-banner text-left mfsolars0-6-79-80 mfsolars0-1-1-2">
                                                <h4 className="banner-title wd-fontsize-l mfsolars0-7-80-81 mfsolars0-2-2-3" data-elementor-setting-key="title"> Solar Light </h4>
                                                <div className="banner-inner set-cont-mb-s reset-last-child wd-fontsize-xs mfsolars0-7-80-82 mfsolars0-2-2-4" data-elementor-setting-key="content">
                                                    <p className="mfsolars0-8-82-83 mfsolars0-3-4-5">Our cutting-edge solar sensor light will illuminate your surrounds. This solar-powered outdoor light turns on automatically when it detects motion, giving increased security and convenience.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }

        </div>

    </>);
}

export default ProductDetailing;