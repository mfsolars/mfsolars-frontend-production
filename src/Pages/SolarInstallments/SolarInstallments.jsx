import "./SolarInstallments.css";


import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from 'react-toastify';



function SolarInstallments() {


    const Name = useSelector(state => state.user.user?.userlogged?.name || "");
    const Email = useSelector(state => state.user.user?.userlogged?.email || "");
    const [Phone, setPhone] = useState("");
    const [Message, setMessage] = useState("");
    const [Address, setAddress] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.set("name", Name);
      formData.set("email", Email);
      formData.set("phone", Phone);
      formData.set("message", Message);
      formData.set("address", Address);
  
      let response = null;
      const userConfig = {
        headers: {
          'Content-Type': 'application/json',
        }
      };
  
      const url = "/api/mfsolars/v1/installation";
      response = await axios.post(url, formData, userConfig);
  
      if (response.data.success) {
        toast.success(response.data.message);
        setPhone("");
        setMessage("");
        setAddress("");
      } else {
        toast.error("Failed to request. Try Again!");
      }
    }

    return (<>
        <div
            data-elementor-type="wp-page"
            data-elementor-id={15255}
            className="elementor-installment elementor-15255 mfsolars-9wMKA"
            data-elementor-post-type="page"
        >
            <section
                className="elementor-section elementor-top-section elementor-installment-element elementor-installment-element-d5c526a"
                
            >
                <div className="elementor-installment-container flex flex-wrap items-center w-[80vw] mt-[2rem]">
                    <div
                        className="elementor-column elementor-top-column elementor-installment-element elementor-installment-element-89d1ebe"
                        style={{width:"100%",maxWidth:"80vw"}}
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <div
                                className="elementor-installment-element elementor-installment-element-099bdef elementor-widget__width-auto elementor-widget elementor-widget-heading"
                                data-id="099bdef"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <p className="elementor-heading-title elementor-size-default">
                                        Your Path to Sustainable Energy
                                    </p>
                                </div>
                            </div>
                            <div
                                className="elementor-installment-element elementor-installment-element-54873c1 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading"
                                data-id="54873c1"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <h1 className="elementor-heading-title elementor-size-default">
                                        Solar Installation
                                    </h1>
                                </div>
                            </div>
                            <div
                                className="elementor-installment-element elementor-installment-element-1446c09 elementor-widget__width-initial color-scheme-inherit text-left elementor-widget elementor-widget-text-editor"
                                data-id="1446c09"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                            >
                                <div className="lg:w-[45vw] w-[70vw]">
                                    <p>
                                        Welcome to Invert Solar, your premier partner in harnessing
                                        solar energy for your home or business. Operating throughout
                                        Gauteng, our mission is to simplify the transition to solar
                                        power, ensuring it’s both accessible and cost-effective.
                                        <br />
                                        <br />
                                        Specializing in a diverse array of solar solutions, including
                                        roof, ground mount, canopy, and carport installations, the
                                        skilled team at Invert Solar is committed to delivering a solar
                                        energy system tailored to meet your specific requirements.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="elementor-installment-element elementor-installment-element-f7dcead elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                
                            >
                                <div className="elementor-widget-container">
                                    <link
                                        rel="stylesheet"
                                        to="https://invertsolar.co.za/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css"
                                    />
                                    <ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-icon">
                                                <i aria-hidden="true" className="fas fa-check-circle" />{" "}
                                            </span>
                                            <span className="elementor-icon-list-text">
                                                Load Shedding Power Solutions
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-icon">
                                                <i aria-hidden="true" className="fas fa-check-circle" />{" "}
                                            </span>
                                            <span className="elementor-icon-list-text">
                                                Inverter Sales and Installation
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-icon">
                                                <i aria-hidden="true" className="fas fa-check-circle" />{" "}
                                            </span>
                                            <span className="elementor-icon-list-text">
                                                Lithium Battery Systems
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-icon">
                                                <i aria-hidden="true" className="fas fa-check-circle" />{" "}
                                            </span>
                                            <span className="elementor-icon-list-text">
                                                Custom Solar Panel Installations
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-installment-element elementor-installment-element-6e7f73a"
                        style={{width:"100%",maxWidth:"80vw"}}
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <div
                                className="elementor-installment-element elementor-installment-element-01f085c elementor-widget elementor-widget-shortcode"
                                data-id="01f085c"
                                data-element_type="widget"
                                data-widget_type="shortcode.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-shortcode">
                                        <div
                                            className="gf_browser_chrome gform_wrapper gform-theme gform-theme--foundation gform-theme--framework gform-theme--orbital"
                                            data-form-theme="orbital"
                                            data-form-index={0}
                                            id="gform_wrapper_1"
                                        >
                                            <div className="gform_heading">
                                                <h2 className="gform_title">
                                                    Solar Installations Request a Quote
                                                </h2>
                                                <p className="gform_description" />
                                            </div>
                                            <form
                                                onSubmit={handleSubmit}
                                                id="gform_1"
                                            >
                                                <div className="gform-body gform_body">
                                                    <div
                                                        id="gform_fields_1"
                                                        className="gform_fields top_label form_sublabel_above description_below validation_below"
                                                    >
                                                        <fieldset
                                                            id="field_1_1"
                                                            className="gfield gfield--type-name gfield--input-type-name gfield_contains_required field_sublabel_above gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                                                            data-js-reload="field_1_1"
                                                        >
                                                            <legend className="gfield_label gform-field-label gfield_label_before_complex">
                                                                Name
                                                                <span className="gfield_required">
                                                                    <span className="gfield_required gfield_required_text">
                                                                        (Required)
                                                                    </span>
                                                                </span>
                                                            </legend>
                                                            <div
                                                                className="ginput_complex ginput_container ginput_container--name no_prefix has_first_name no_middle_name has_last_name no_suffix gf_name_has_2 ginput_container_name gform-grid-row"
                                                                id="input_1_1"
                                                            >
                                                                <span
                                                                    id="input_1_1_3_container"
                                                                    className="name_first gform-grid-col gform-grid-col--size-auto"
                                                                >
                                                                    <label
                                                                        htmlFor="input_1_1_3"
                                                                        className="gform-field-label gform-field-label--type-sub "
                                                                    >
                                                                        Full Name
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="input_1.3"
                                                                        id="input_1_1_3"
                                                                        readOnly={true}
                                                                        value={Name}
                                                                        placeholder="Enter your full name (Login to autofill)"
                                                                        aria-required="true"
                                                                        autoComplete="given-name"
                                                                    />
                                                                </span>
                                                            </div>
                                                        </fieldset>
                                                        <div
                                                            id="field_1_2"
                                                            className="gfield gfield--type-email gfield--input-type-email gfield--width-half gfield_contains_required field_sublabel_above gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                                                            data-js-reload="field_1_2"
                                                        >
                                                            <label
                                                                className="gfield_label gform-field-label"
                                                                htmlFor="input_1_2"
                                                            >
                                                                Email
                                                                <span className="gfield_required">
                                                                    <span className="gfield_required gfield_required_text">
                                                                        (Required)
                                                                    </span>
                                                                </span>
                                                            </label>
                                                            <div className="ginput_container ginput_container_email">
                                                                <input
                                                                    name="input_2"
                                                                    id="input_1_2"
                                                                    type="email"
                                                                   value={Email}
                                                                   readOnly={true}
                                                                    className="large"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    autoComplete="email"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            id="field_1_8"
                                                            className="gfield gfield--type-phone gfield--input-type-phone gfield--width-half field_sublabel_above gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                                                            data-js-reload="field_1_8"
                                                        >
                                                            <label
                                                                className="gfield_label gform-field-label"
                                                                htmlFor="input_1_8"
                                                            >
                                                                Phone
                                                            </label>
                                                            <div className="ginput_container ginput_container_phone">
                                                                <input
                                                                    name="input_8"
                                                                    id="input_1_8"
                                                                    type="tel"
                                                                    required={true}
                                                                    value={Phone}
                                                                    onChange={(e) => setPhone(e.target.value)}
                                                                    className="large"
                                                                    aria-invalid="false"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            id="field_1_6"
                                                            className="gfield gfield--type-textarea gfield--input-type-textarea field_sublabel_above gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                                                            data-js-reload="field_1_6"
                                                        >
                                                            <label
                                                                className="gfield_label gform-field-label"
                                                                htmlFor="input_1_6"
                                                            >
                                                                Address
                                                            </label>
                                                            <div className="ginput_container ginput_container_textarea">
                                                                <textarea
                                                                    name="input_6"
                                                                    id="input_1"
                                                                    className="textarea small"
                                                                    aria-invalid="false"
                                                                    rows={4}
                                                                    cols={50}
                                                                    value={Address}
                                                                    onChange={(e) => setAddress(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            id="field_1_6"
                                                            className="gfield gfield--type-textarea gfield--input-type-textarea field_sublabel_above gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                                                            data-js-reload="field_1_6"
                                                        >
                                                            <label
                                                                className="gfield_label gform-field-label"
                                                                htmlFor="input_1_6"
                                                            >
                                                                How can we help you?
                                                            </label>
                                                            <div className="ginput_container ginput_container_textarea">
                                                                <textarea
                                                                    name="input_6"
                                                                    id="input_1_6"
                                                                    className="textarea small"
                                                                    aria-invalid="false"
                                                                    rows={10}
                                                                    cols={50}
                                                                    value={Message}
                                                                    onChange={(e) => setMessage(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gform_footer top_label">
                                                    {" "}
                                                    <input
                                                        type="submit"
                                                        id="gform_submit_button_1"
                                                        className="gform_button button"
                                                        defaultValue="Submit"
                                                    />
                                                    
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            
            <section
                className="wd-negative-gap elementor-section elementor-top-section elementor-installment-element elementor-installment-element-8484d7a elementor-section-boxed elementor-section-height-default elementor-section-height-default wd-section-disabled"
                data-id="8484d7a"
                data-element_type="section"
            >
                <div className="elementor-installment-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-installment-element elementor-installment-element-d191598"
                        data-id="d191598"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <div
                                className="elementor-installment-element elementor-installment-element-05a7ce4 elementor-widget elementor-widget-shortcode"
                                data-id="05a7ce4"
                                data-element_type="widget"
                                data-widget_type="shortcode.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-shortcode">
                                        <div
                                            className="ti-widget ti-goog ti-show-rating-text ti-review-text-mode-readmore ti-text-align-left bg-slate-200 py-4"
                                        >
                                            <div
                                                className="ti-widget-container ti-col-4 style-PsWr9"
                                                id="style-PsWr9"
                                            >
                                                <div
                                                    className="ti-footer source-Google style-WOdD1"
                                                    id="style-WOdD1"
                                                >
                                                    <div className="ti-rating-text">
                                                        {" "}
                                                        <strong className="ti-rating ti-rating-large">
                                                            {" "}
                                                            Excellent{" "}
                                                        </strong>{" "}
                                                    </div>{" "}
                                                    <span className="ti-stars star-sm">
                                                        {" "}
                                                        <span className="ti-star f" />
                                                        <span className="ti-star f" />
                                                        <span className="ti-star f" />
                                                        <span className="ti-star f" />
                                                        <span className="ti-star f" />{" "}
                                                    </span>
                                                    <div className="ti-rating-text">
                                                        {" "}
                                                        <span className="nowrap">
                                                            Based on <strong> reviews</strong>
                                                        </span>{" "}
                                                    </div>
                                                    <div className="ti-large-logo">
                                                        <div className="ti-v-center">
                                                            {" "}
                                                            <img
                                                                loading="lazy"
                                                                decoding="async"
                                                                className="ti-logo-fb"
                                                                src="https://cdn.trustindex.io/assets/platform/Google/logo.svg"
                                                                width={150}
                                                                height={25}
                                                                alt="Google"
                                                            />{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ti-reviews-container">




                                                    <div className="ti-reviews-container-wrapper">

                                                        <Swiper
                                                            slidesPerView={3}
                                                            style={{ width: "100%" }}
                                                            modules={[Autoplay]}
                                                            autoplay={{
                                                                delay: 3000,
                                                                disableOnInteraction: false,
                                                            }}
                                                            centeredSlides={true}
                                                            loop={true}
                                                            grabCursor={true}
                                                            pagination={{ clickable: true }}
                                                        >
                                                            <SwiperSlide style={{ minWidth: "15rem", width: "100%" }}>
                                                                <div
                                                                    data-empty={1}
                                                                    data-time={1710374400}
                                                                    className="ti-review-item source-Google style-v9Xnb"
                                                                    id="style-v9Xnb"
                                                                >
                                                                    <div className="ti-inner">
                                                                        <div className="ti-review-header">
                                                                            <div className="ti-profile-img">
                                                                                {" "}
                                                                                <img
                                                                                    decoding="async"
                                                                                    src="https://lh3.googleusercontent.com/a-/ALV-UjWgdxm1WD2vBu3N1hftirWw_jKxwInjEBwN6JpfoGC49Fg=s120-c-rp-mo-br100"
                                                                                    alt="Johan van Greunen"
                                                                                />{" "}
                                                                            </div>
                                                                            <div className="ti-profile-details">
                                                                                <div className="ti-name">
                                                                                    {" "}
                                                                                    Diesal Mon{" "}
                                                                                </div>
                                                                                <div className="ti-date">today</div>
                                                                            </div>
                                                                        </div>{" "}
                                                                        <span className="ti-stars">
                                                                            <span className="ti-star f" />
                                                                            <span className="ti-star f" />
                                                                            <span className="ti-star f" />
                                                                            <span className="ti-star f" />
                                                                            <span className="ti-star f" />
                                                                        </span>
                                                                        <div
                                                                            className="ti-review-text-container ti-review-content"
                                                                            style={{}}
                                                                        />{" "}
                                                                        <span
                                                                            className="ti-read-more style-QdTnc"
                                                                            data-container=".ti-review-content"
                                                                            data-collapse-text="Hide"
                                                                            data-open-text="Read more"
                                                                            id="style-QdTnc"
                                                                        >
                                                                            <span>&nbsp;</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide style={{ minWidth: "20rem", width: 100 % "" }}>
                                                                <div
                                                                    data-empty={1}
                                                                    data-time={1710374400}
                                                                    className="ti-review-item source-Google style-v9Xnb"
                                                                    id="style-v9Xnb"
                                                                >
                                                                    <div className="ti-inner">
                                                                        <div className="ti-review-header">
                                                                            <div className="ti-profile-img">
                                                                                {" "}
                                                                                <img
                                                                                    decoding="async"
                                                                                    src="https://lh3.googleusercontent.com/a-/ALV-UjWgdxm1WD2vBu3N1hftirWw_jKxwInjEBwN6JpfoGC49Fg=s120-c-rp-mo-br100"
                                                                                    alt="Johan van Greunen"
                                                                                />{" "}
                                                                            </div>
                                                                            <div className="ti-profile-details">
                                                                                <div className="ti-name">
                                                                                    {" "}
                                                                                    Greunen{" "}
                                                                                </div>
                                                                                <div className="ti-date">2 weeks ago</div>
                                                                            </div>
                                                                        </div>{" "}
                                                                        <span className="ti-stars">
                                                                            <span className="ti-star f" />
                                                                            <span className="ti-star f" />
                                                                            <span className="ti-star f" />
                                                                            <span className="ti-star e" />
                                                                            <span className="ti-star e" />
                                                                        </span>
                                                                        <div
                                                                            className="ti-review-text-container ti-review-content"
                                                                            style={{}}
                                                                        />{" "}
                                                                        <span
                                                                            className="ti-read-more style-QdTnc"
                                                                            data-container=".ti-review-content"
                                                                            data-collapse-text="Hide"
                                                                            data-open-text="Read more"
                                                                            id="style-QdTnc"
                                                                        >
                                                                            <span>&nbsp;</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide style={{ minWidth: "20rem", width: 100 % "" }}>
                                                                <div
                                                                    data-empty={1}
                                                                    data-time={1710374400}
                                                                    className="ti-review-item source-Google style-v9Xnb"
                                                                    id="style-v9Xnb"
                                                                >
                                                                    <div className="ti-inner">
                                                                        <div className="ti-review-header">
                                                                            <div className="ti-profile-img">
                                                                                {" "}
                                                                                <img
                                                                                    decoding="async"
                                                                                    src="https://lh3.googleusercontent.com/a-/ALV-UjWgdxm1WD2vBu3N1hftirWw_jKxwInjEBwN6JpfoGC49Fg=s120-c-rp-mo-br100"
                                                                                    alt="Johan van Greunen"
                                                                                />{" "}
                                                                            </div>
                                                                            <div className="ti-profile-details">
                                                                                <div className="ti-name">
                                                                                    {" "}
                                                                                    Johan van Greunen{" "}
                                                                                </div>
                                                                                <div className="ti-date">4 months ago</div>
                                                                            </div>
                                                                        </div>{" "}
                                                                        <span className="ti-stars">
                                                                            <span className="ti-star f" />
                                                                            <span className="ti-star f" />
                                                                            <span className="ti-star f" />
                                                                            <span className="ti-star f" />
                                                                            <span className="ti-star e" />
                                                                        </span>
                                                                        <div
                                                                            className="ti-review-text-container ti-review-content"
                                                                            style={{}}
                                                                        />{" "}
                                                                        <span
                                                                            className="ti-read-more style-QdTnc"
                                                                            data-container=".ti-review-content"
                                                                            data-collapse-text="Hide"
                                                                            data-open-text="Read more"
                                                                            id="style-QdTnc"
                                                                        >
                                                                            <span>&nbsp;</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide style={{ minWidth: "20rem", width: 100 % "" }}>
                                                                <div
                                                                    data-empty={1}
                                                                    data-time={1710374400}
                                                                    className="ti-review-item source-Google style-v9Xnb"
                                                                    id="style-v9Xnb"
                                                                >
                                                                    <div className="ti-inner">
                                                                        <div className="ti-review-header">
                                                                            <div className="ti-profile-img">
                                                                                {" "}
                                                                                <img
                                                                                    decoding="async"
                                                                                    src="https://lh3.googleusercontent.com/a-/ALV-UjWgdxm1WD2vBu3N1hftirWw_jKxwInjEBwN6JpfoGC49Fg=s120-c-rp-mo-br100"
                                                                                    alt="Johan van Greunen"
                                                                                />{" "}
                                                                            </div>
                                                                            <div className="ti-profile-details">
                                                                                <div className="ti-name">
                                                                                    {" "}
                                                                                    Seima{" "}
                                                                                </div>
                                                                                <div className="ti-date">1 year ago</div>
                                                                            </div>
                                                                        </div>{" "}
                                                                        <span className="ti-stars">
                                                                            <span className="ti-star f" />
                                                                            <span className="ti-star f" />
                                                                            <span className="ti-star f" />
                                                                            <span className="ti-star f" />
                                                                            <span className="ti-star f" />
                                                                        </span>
                                                                        <div
                                                                            className="ti-review-text-container ti-review-content"
                                                                            style={{}}
                                                                        />{" "}
                                                                        <span
                                                                            className="ti-read-more style-QdTnc"
                                                                            data-container=".ti-review-content"
                                                                            data-collapse-text="Hide"
                                                                            data-open-text="Read more"
                                                                            id="style-QdTnc"
                                                                        >
                                                                            <span>&nbsp;</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                        </Swiper>


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
            <section
                className="wd-negative-gap elementor-section elementor-top-section elementor-installment-element elementor-installment-element-864d936 elementor-section-boxed elementor-section-height-default elementor-section-height-default wd-section-disabled"
                data-id="864d936"
                data-element_type="section"
            >
                <div className="elementor-installment-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-installment-element elementor-installment-element-10b201d"
                        data-id="10b201d"
                        data-element_type="column"
                        data-settings='{"background_background":"classic"}'
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <section
                                className="wd-negative-gap elementor-section elementor-inner-section elementor-installment-element elementor-installment-element-c007d2c elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default wd-section-disabled"
                                data-id="c007d2c"
                                data-element_type="section"
                                data-settings='{"background_background":"gradient"}'
                            >
                                <div className="elementor-installment-container elementor-column-gap-default">
                                    <div
                                        className="elementor-column elementor-col-100 elementor-inner-column elementor-installment-element elementor-installment-element-cd7b99f"
                                        data-id="cd7b99f"
                                        data-element_type="column"
                                        data-settings='{"background_background":"gradient"}'
                                    >
                                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                                            <div
                                                className="elementor-installment-element elementor-installment-element-aa62936 elementor-widget elementor-widget-wd_title"
                                                data-id="aa62936"
                                                data-element_type="widget"
                                                data-widget_type="wd_title.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <div className="title-wrapper set-mb-s reset-last-child wd-title-color-default wd-title-style-default wd-title-size-extra-large text-left">
                                                        <div className="liner-continer">
                                                            <h3 className="woodmart-title-container title wd-fontsize-xxxl">
                                                                Request Your Custom Quote Today!
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="elementor-installment-element elementor-installment-element-5a635c7 color-scheme-inherit text-left elementor-widget elementor-widget-text-editor"
                                                data-id="5a635c7"
                                                data-element_type="widget"
                                                data-widget_type="text-editor.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <p>
                                                        Ready to take the first step towards energy independence
                                                        and sustainability? Requesting a custom solar quote from
                                                        us is your ticket to a brighter, cleaner future. Simply
                                                        fill out our form, and our team of solar experts will be
                                                        in contact with you.
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className="elementor-installment-element elementor-installment-element-b5ab53f elementor-mobile-align-left elementor-widget elementor-widget-button"
                                                data-id="b5ab53f"
                                                data-element_type="widget"
                                                data-widget_type="button.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <div className="elementor-button-wrapper">
                                                        <Link
                                                            className="elementor-button elementor-button-link elementor-size-sm"
                                                            to="/contact"
                                                        >
                                                            <span className="elementor-button-content-wrapper">
                                                                <span className="elementor-button-text">
                                                                    Contact Us
                                                                </span>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-installment-element elementor-installment-element-3539130 elementor-hidden-tablet"
                        data-id={3539130}
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <div
                                className="elementor-installment-element elementor-installment-element-0842d4e elementor-widget elementor-widget-gallery"
                                data-id="0842d4e"
                                data-element_type="widget"
                                data-settings='{"columns":1,"aspect_ratio":"4:3","lazyload":"yes","gallery_layout":"grid","columns_tablet":2,"columns_mobile":1,"gap":{"unit":"px","size":10,"sizes":[]},"gap_tablet":{"unit":"px","size":10,"sizes":[]},"gap_mobile":{"unit":"px","size":10,"sizes":[]},"link_to":"file","overlay_background":"yes","content_hover_animation":"fade-in"}'
                                data-widget_type="gallery.default"
                            >
                                <div className="elementor-widget-container">
                                    <div
                                        className="elementor-gallery__container e-gallery-container e-gallery-grid e-gallery--ltr e-gallery--lazyload style-akUPF"
                                        id="style-akUPF"
                                    >
                                        <Link
                                            className="e-gallery-item elementor-gallery-item elementor-animated-content style-5dBN3"
                                            to="https://invertsolar.co.za/wp-content/uploads/2024/03/937e022b-172c-4c19-b828-738ae7431c8d.jpg"
                                            data-elementor-open-lightbox="yes"
                                            data-elementor-lightbox-slideshow="0842d4e"
                                            data-elementor-lightbox-title="937e022b-172c-4c19-b828-738ae7431c8d"
                                            data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTUyOTQsInVybCI6Imh0dHBzOlwvXC9pbnZlcnRzb2xhci5jby56YVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcLzkzN2UwMjJiLTE3MmMtNGMxOS1iODI4LTczOGFlNzQzMWM4ZC5qcGciLCJzbGlkZXNob3ciOiIwODQyZDRlIn0%3D"
                                            id="style-5dBN3"
                                        >
                                            <div
                                                className="e-gallery-image elementor-gallery-item__image e-gallery-image-loaded style-LkEJz"
                                                data-thumbnail="https://invertsolar.co.za/wp-content/uploads/2024/03/937e022b-172c-4c19-b828-738ae7431c8d.jpg"
                                                data-width={1600}
                                                data-height={1199}
                                                aria-label=""
                                                role="img"
                                                id="style-LkEJz"
                                            />
                                            <div className="elementor-gallery-item__overlay" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-installment-element elementor-installment-element-5dd0f4c elementor-widget elementor-widget-gallery"
                                data-id="5dd0f4c"
                                data-element_type="widget"
                                data-settings='{"columns":1,"aspect_ratio":"1:1","lazyload":"yes","gallery_layout":"grid","columns_tablet":2,"columns_mobile":1,"gap":{"unit":"px","size":10,"sizes":[]},"gap_tablet":{"unit":"px","size":10,"sizes":[]},"gap_mobile":{"unit":"px","size":10,"sizes":[]},"link_to":"file","overlay_background":"yes","content_hover_animation":"fade-in"}'
                                data-widget_type="gallery.default"
                            >
                                <div className="elementor-widget-container">
                                    <div
                                        className="elementor-gallery__container e-gallery-container e-gallery-grid e-gallery--ltr e-gallery--lazyload style-lD1Ed"
                                        id="style-lD1Ed"
                                    >
                                        <Link
                                            className="e-gallery-item elementor-gallery-item elementor-animated-content style-fSKAe"
                                            to="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2513-scaled-e1711020577735.jpg"
                                            data-elementor-open-lightbox="yes"
                                            data-elementor-lightbox-slideshow="5dd0f4c"
                                            data-elementor-lightbox-title="IMG_2513"
                                            data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTUyOTIsInVybCI6Imh0dHBzOlwvXC9pbnZlcnRzb2xhci5jby56YVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL0lNR18yNTEzLXNjYWxlZC1lMTcxMTAyMDU3NzczNS5qcGciLCJzbGlkZXNob3ciOiI1ZGQwZjRjIn0%3D"
                                            id="style-fSKAe"
                                        >
                                            <div
                                                className="e-gallery-image elementor-gallery-item__image e-gallery-image-loaded style-yo211"
                                                data-thumbnail="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2513-scaled-e1711020577735.jpg"
                                                data-width={1920}
                                                data-height={2082}
                                                aria-label=""
                                                role="img"
                                                id="style-yo211"
                                            />
                                            <div className="elementor-gallery-item__overlay" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-installment-element elementor-installment-element-f4409ee elementor-hidden-tablet"
                        data-id="f4409ee"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <div
                                className="elementor-installment-element elementor-installment-element-91f5b32 elementor-widget elementor-widget-gallery"
                                data-id="91f5b32"
                                data-element_type="widget"
                                data-settings='{"columns":1,"aspect_ratio":"1:1","lazyload":"yes","gallery_layout":"grid","columns_tablet":2,"columns_mobile":1,"gap":{"unit":"px","size":10,"sizes":[]},"gap_tablet":{"unit":"px","size":10,"sizes":[]},"gap_mobile":{"unit":"px","size":10,"sizes":[]},"link_to":"file","overlay_background":"yes","content_hover_animation":"fade-in"}'
                                data-widget_type="gallery.default"
                            >
                                <div className="elementor-widget-container">
                                    <div
                                        className="elementor-gallery__container e-gallery-container e-gallery-grid e-gallery--ltr e-gallery--lazyload style-ELqGd"
                                        id="style-ELqGd"
                                    >
                                        <Link
                                            className="e-gallery-item elementor-gallery-item elementor-animated-content style-Cso2v"
                                            to="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2322-scaled.jpg"
                                            data-elementor-open-lightbox="yes"
                                            data-elementor-lightbox-slideshow="91f5b32"
                                            data-elementor-lightbox-title="IMG_2322"
                                            data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTUyODgsInVybCI6Imh0dHBzOlwvXC9pbnZlcnRzb2xhci5jby56YVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL0lNR18yMzIyLXNjYWxlZC5qcGciLCJzbGlkZXNob3ciOiI5MWY1YjMyIn0%3D"
                                            id="style-Cso2v"
                                        >
                                            <div
                                                className="e-gallery-image elementor-gallery-item__image e-gallery-image-loaded style-CHOx5"
                                                data-thumbnail="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2322-scaled.jpg"
                                                data-width={1920}
                                                data-height={2560}
                                                aria-label=""
                                                role="img"
                                                id="style-CHOx5"
                                            />
                                            <div className="elementor-gallery-item__overlay" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-installment-element elementor-installment-element-40bfce4 elementor-widget elementor-widget-gallery"
                                data-id="40bfce4"
                                data-element_type="widget"
                                data-settings='{"columns":1,"aspect_ratio":"4:3","lazyload":"yes","gallery_layout":"grid","columns_tablet":2,"columns_mobile":1,"gap":{"unit":"px","size":10,"sizes":[]},"gap_tablet":{"unit":"px","size":10,"sizes":[]},"gap_mobile":{"unit":"px","size":10,"sizes":[]},"link_to":"file","overlay_background":"yes","content_hover_animation":"fade-in"}'
                                data-widget_type="gallery.default"
                            >
                                <div className="elementor-widget-container">
                                    <div
                                        className="elementor-gallery__container e-gallery-container e-gallery-grid e-gallery--ltr e-gallery--lazyload style-PHG7H"
                                        id="style-PHG7H"
                                    >
                                        <Link
                                            className="e-gallery-item elementor-gallery-item elementor-animated-content style-KJChP"
                                            to="https://invertsolar.co.za/wp-content/uploads/2024/03/c7b4656b-c478-45a7-89aa-ab8ec7142f08.jpg"
                                            data-elementor-open-lightbox="yes"
                                            data-elementor-lightbox-slideshow="40bfce4"
                                            data-elementor-lightbox-title="c7b4656b-c478-45a7-89aa-ab8ec7142f08"
                                            data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTUyOTMsInVybCI6Imh0dHBzOlwvXC9pbnZlcnRzb2xhci5jby56YVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL2M3YjQ2NTZiLWM0NzgtNDVhNy04OWFhLWFiOGVjNzE0MmYwOC5qcGciLCJzbGlkZXNob3ciOiI0MGJmY2U0In0%3D"
                                            id="style-KJChP"
                                        >
                                            <div
                                                className="e-gallery-image elementor-gallery-item__image e-gallery-image-loaded style-qpk1H"
                                                data-thumbnail="https://invertsolar.co.za/wp-content/uploads/2024/03/c7b4656b-c478-45a7-89aa-ab8ec7142f08.jpg"
                                                data-width={1600}
                                                data-height={1199}
                                                aria-label=""
                                                role="img"
                                                id="style-qpk1H"
                                            />
                                            <div className="elementor-gallery-item__overlay" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="wd-negative-gap elementor-section elementor-top-section elementor-installment-element elementor-installment-element-5c5c77c6 wd-section-stretch-content elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="5c5c77c6"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
            >
                <div className="elementor-installment-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-installment-element elementor-installment-element-4afc9f4a"
                        data-id="4afc9f4a"
                        data-element_type="column"
                        data-settings='{"background_background":"classic"}'
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <div
                                className="elementor-installment-element elementor-installment-element-5e09502 elementor-widget elementor-widget-gallery"
                                data-id="5e09502"
                                data-element_type="widget"
                                data-settings='{"gallery_layout":"masonry","columns":8,"gap":{"unit":"px","size":20,"sizes":[]},"lazyload":"yes","columns_tablet":2,"columns_mobile":1,"gap_tablet":{"unit":"px","size":10,"sizes":[]},"gap_mobile":{"unit":"px","size":10,"sizes":[]},"link_to":"file","overlay_background":"yes","content_hover_animation":"fade-in"}'
                                data-widget_type="gallery.default"
                            >
                                <div className="elementor-widget-container">
                                    <div
                                        className="elementor-gallery__container e-gallery-container e-gallery-masonry e-gallery--ltr e-gallery--lazyload style-O3nAb"
                                        id="style-O3nAb"
                                    >
                                        <Link
                                            className="e-gallery-item elementor-gallery-item elementor-animated-content style-c7TOS"
                                            to="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2514-scaled.jpg"
                                            data-elementor-open-lightbox="yes"
                                            data-elementor-lightbox-slideshow="5e09502"
                                            data-elementor-lightbox-title="IMG_2514"
                                            data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTUyODMsInVybCI6Imh0dHBzOlwvXC9pbnZlcnRzb2xhci5jby56YVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL0lNR18yNTE0LXNjYWxlZC5qcGciLCJzbGlkZXNob3ciOiI1ZTA5NTAyIn0%3D"
                                            id="style-c7TOS"
                                        >
                                            <div
                                                className="e-gallery-image elementor-gallery-item__image e-gallery-image-loaded style-oDRWa"
                                                data-thumbnail="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2514-scaled.jpg"
                                                data-width={1920}
                                                data-height={2560}
                                                aria-label=""
                                                role="img"
                                                id="style-oDRWa"
                                            />
                                            <div className="elementor-gallery-item__overlay" />
                                        </Link>
                                        <Link
                                            className="e-gallery-item elementor-gallery-item elementor-animated-content style-O6ine"
                                            to="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2321-scaled.jpg"
                                            data-elementor-open-lightbox="yes"
                                            data-elementor-lightbox-slideshow="5e09502"
                                            data-elementor-lightbox-title="IMG_2321"
                                            data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTUyODcsInVybCI6Imh0dHBzOlwvXC9pbnZlcnRzb2xhci5jby56YVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL0lNR18yMzIxLXNjYWxlZC5qcGciLCJzbGlkZXNob3ciOiI1ZTA5NTAyIn0%3D"
                                            id="style-O6ine"
                                        >
                                            <div
                                                className="e-gallery-image elementor-gallery-item__image e-gallery-image-loaded style-x5Jim"
                                                data-thumbnail="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2321-scaled.jpg"
                                                data-width={1920}
                                                data-height={2560}
                                                aria-label=""
                                                role="img"
                                                id="style-x5Jim"
                                            />
                                            <div className="elementor-gallery-item__overlay" />
                                        </Link>
                                        <Link
                                            className="e-gallery-item elementor-gallery-item elementor-animated-content style-1S4nq"
                                            to="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2383-scaled.jpg"
                                            data-elementor-open-lightbox="yes"
                                            data-elementor-lightbox-slideshow="5e09502"
                                            data-elementor-lightbox-title="IMG_2383"
                                            data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTU1MjEsInVybCI6Imh0dHBzOlwvXC9pbnZlcnRzb2xhci5jby56YVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL0lNR18yMzgzLXNjYWxlZC5qcGciLCJzbGlkZXNob3ciOiI1ZTA5NTAyIn0%3D"
                                            id="style-1S4nq"
                                        >
                                            <div
                                                className="e-gallery-image elementor-gallery-item__image e-gallery-image-loaded style-LhhCH"
                                                data-thumbnail="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2383-scaled.jpg"
                                                data-width={1920}
                                                data-height={2560}
                                                aria-label=""
                                                role="img"
                                                id="style-LhhCH"
                                            />
                                            <div className="elementor-gallery-item__overlay" />
                                        </Link>
                                        <Link
                                            className="e-gallery-item elementor-gallery-item elementor-animated-content style-taSEt"
                                            to="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2512-scaled.jpg"
                                            data-elementor-open-lightbox="yes"
                                            data-elementor-lightbox-slideshow="5e09502"
                                            data-elementor-lightbox-title="IMG_2512"
                                            data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTUyOTEsInVybCI6Imh0dHBzOlwvXC9pbnZlcnRzb2xhci5jby56YVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL0lNR18yNTEyLXNjYWxlZC5qcGciLCJzbGlkZXNob3ciOiI1ZTA5NTAyIn0%3D"
                                            id="style-taSEt"
                                        >
                                            <div
                                                className="e-gallery-image elementor-gallery-item__image e-gallery-image-loaded style-OEMWs"
                                                data-thumbnail="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2512-scaled.jpg"
                                                data-width={1920}
                                                data-height={2560}
                                                aria-label=""
                                                role="img"
                                                id="style-OEMWs"
                                            />
                                            <div className="elementor-gallery-item__overlay" />
                                        </Link>
                                        <Link
                                            className="e-gallery-item elementor-gallery-item elementor-animated-content style-VKNq6"
                                            to="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2322-scaled.jpg"
                                            data-elementor-open-lightbox="yes"
                                            data-elementor-lightbox-slideshow="5e09502"
                                            data-elementor-lightbox-title="IMG_2322"
                                            data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTUyODgsInVybCI6Imh0dHBzOlwvXC9pbnZlcnRzb2xhci5jby56YVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL0lNR18yMzIyLXNjYWxlZC5qcGciLCJzbGlkZXNob3ciOiI1ZTA5NTAyIn0%3D"
                                            id="style-VKNq6"
                                        >
                                            <div
                                                className="e-gallery-image elementor-gallery-item__image e-gallery-image-loaded style-zskIa"
                                                data-thumbnail="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2322-scaled.jpg"
                                                data-width={1920}
                                                data-height={2560}
                                                aria-label=""
                                                role="img"
                                                id="style-zskIa"
                                            />
                                            <div className="elementor-gallery-item__overlay" />
                                        </Link>
                                        <Link
                                            className="e-gallery-item elementor-gallery-item elementor-animated-content style-JkXJz"
                                            to="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2471-scaled.jpg"
                                            data-elementor-open-lightbox="yes"
                                            data-elementor-lightbox-slideshow="5e09502"
                                            data-elementor-lightbox-title="IMG_2471"
                                            data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTUyOTAsInVybCI6Imh0dHBzOlwvXC9pbnZlcnRzb2xhci5jby56YVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL0lNR18yNDcxLXNjYWxlZC5qcGciLCJzbGlkZXNob3ciOiI1ZTA5NTAyIn0%3D"
                                            id="style-JkXJz"
                                        >
                                            <div
                                                className="e-gallery-image elementor-gallery-item__image e-gallery-image-loaded style-C4Yty"
                                                data-thumbnail="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2471-scaled.jpg"
                                                data-width={1920}
                                                data-height={2560}
                                                aria-label=""
                                                role="img"
                                                id="style-C4Yty"
                                            />
                                            <div className="elementor-gallery-item__overlay" />
                                        </Link>
                                        <Link
                                            className="e-gallery-item elementor-gallery-item elementor-animated-content style-csME4"
                                            to="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2324-scaled.jpg"
                                            data-elementor-open-lightbox="yes"
                                            data-elementor-lightbox-slideshow="5e09502"
                                            data-elementor-lightbox-title="IMG_2324"
                                            data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTUyODksInVybCI6Imh0dHBzOlwvXC9pbnZlcnRzb2xhci5jby56YVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL0lNR18yMzI0LXNjYWxlZC5qcGciLCJzbGlkZXNob3ciOiI1ZTA5NTAyIn0%3D"
                                            id="style-csME4"
                                        >
                                            <div
                                                className="e-gallery-image elementor-gallery-item__image e-gallery-image-loaded style-FpNUt"
                                                data-thumbnail="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2324-scaled.jpg"
                                                data-width={1920}
                                                data-height={2560}
                                                aria-label=""
                                                role="img"
                                                id="style-FpNUt"
                                            />
                                            <div className="elementor-gallery-item__overlay" />
                                        </Link>
                                        <Link
                                            className="e-gallery-item elementor-gallery-item elementor-animated-content style-lq3Kv"
                                            to="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2515-scaled.jpg"
                                            data-elementor-open-lightbox="yes"
                                            data-elementor-lightbox-slideshow="5e09502"
                                            data-elementor-lightbox-title="IMG_2515"
                                            data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MTUyODQsInVybCI6Imh0dHBzOlwvXC9pbnZlcnRzb2xhci5jby56YVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL0lNR18yNTE1LXNjYWxlZC5qcGciLCJzbGlkZXNob3ciOiI1ZTA5NTAyIn0%3D"
                                            id="style-lq3Kv"
                                        >
                                            <div
                                                className="e-gallery-image elementor-gallery-item__image e-gallery-image-loaded style-zIRld"
                                                data-thumbnail="https://invertsolar.co.za/wp-content/uploads/2024/03/IMG_2515-scaled.jpg"
                                                data-width={1920}
                                                data-height={2560}
                                                aria-label=""
                                                role="img"
                                                id="style-zIRld"
                                            />
                                            <div className="elementor-gallery-item__overlay" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="wd-negative-gap elementor-section elementor-top-section elementor-installment-element elementor-installment-element-3937694 wd-section-stretch elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id={3937694}
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
            >
                <div className="elementor-installment-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-installment-element elementor-installment-element-c54698b"
                        data-id="c54698b"
                        data-element_type="column"
                        data-settings='{"background_background":"gradient"}'
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <div
                                className="elementor-installment-element elementor-installment-element-0fa8e54 elementor-widget elementor-widget-heading"
                                data-id="0fa8e54"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                        We offer Comprehensive Solar Energy Solutions
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="wd-negative-gap elementor-section elementor-top-section elementor-installment-element elementor-installment-element-249a5c7 elementor-section-content-middle wd-section-stretch elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="249a5c7"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
            >
                <div className="elementor-installment-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-installment-element elementor-installment-element-988d98b"
                        data-id="988d98b"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <div
                                className="elementor-installment-element elementor-installment-element-2e63bb2 elementor-widget elementor-widget-wd_infobox"
                                data-id="2e63bb2"
                                data-element_type="widget"
                                data-widget_type="wd_infobox.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="info-box-wrapper">
                                        <div className="wd-info-box text-left box-icon-align-top box-style-bg-hover color-scheme-dark color-scheme-hover-dark">
                                            <div className="info-box-content">
                                                <h2
                                                    className="info-box-title title box-title-style-default wd-fontsize-m"
                                                    data-elementor-setting-key="title"
                                                >
                                                    {" "}
                                                    Load Shedding Power Solutions{" "}
                                                </h2>
                                                <div
                                                    className="info-box-inner set-cont-mb-s reset-last-child"
                                                    data-elementor-setting-key="content"
                                                >
                                                    <p>
                                                        Inversolar provides specialised solutions to mitigate
                                                        the impact of loadshedding on businesses and households.
                                                        These solutions include the design and implementation of
                                                        backup power systems that ensure uninterrupted power
                                                        supply during loadshedding periods.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-installment-element elementor-installment-element-508621c"
                        data-id="508621c"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <div
                                className="elementor-installment-element elementor-installment-element-0d833ae elementor-widget elementor-widget-wd_infobox"
                                data-id="0d833ae"
                                data-element_type="widget"
                                data-widget_type="wd_infobox.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="info-box-wrapper">
                                        <div className="wd-info-box text-left box-icon-align-top box-style-bg-hover color-scheme-dark color-scheme-hover-dark">
                                            <div className="info-box-content">
                                                <h2
                                                    className="info-box-title title box-title-style-default wd-fontsize-m"
                                                    data-elementor-setting-key="title"
                                                >
                                                    {" "}
                                                    Inverter Sales and Installation{" "}
                                                </h2>
                                                <div
                                                    className="info-box-inner set-cont-mb-s reset-last-child"
                                                    data-elementor-setting-key="content"
                                                >
                                                    <p>
                                                        Invertsolar offers a wide range of high-quality
                                                        inverters that are guaranteed to meet your requirements.
                                                        Whether for residential or commercial use, these
                                                        inverters convert DC electricity generated by solar
                                                        panels into AC electricity, which can be used to power
                                                        various devices.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-installment-element elementor-installment-element-7f04fe4"
                        data-id="7f04fe4"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <div
                                className="elementor-installment-element elementor-installment-element-f463090 elementor-widget elementor-widget-wd_infobox"
                                data-id="f463090"
                                data-element_type="widget"
                                data-widget_type="wd_infobox.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="info-box-wrapper">
                                        <div className="wd-info-box text-left box-icon-align-top box-style-bg-hover color-scheme-dark color-scheme-hover-dark">
                                            <div className="info-box-content">
                                                <h2
                                                    className="info-box-title title box-title-style-default wd-fontsize-m"
                                                    data-elementor-setting-key="title"
                                                >
                                                    {" "}
                                                    Lithium Battery Systems{" "}
                                                </h2>
                                                <div
                                                    className="info-box-inner set-cont-mb-s reset-last-child"
                                                    data-elementor-setting-key="content"
                                                >
                                                    <p>
                                                        Lithium batteries are at the heart of efficient solar
                                                        energy storage solutions. Inversolar stocks lithium
                                                        battery systems, which are known for their long
                                                        lifespan, high energy density, and safety. These
                                                        batteries store excess solar power for use during peak
                                                        demand times or when there is no sunlight.
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
            </section>
            <section
                className="wd-negative-gap elementor-section elementor-top-section elementor-installment-element elementor-installment-element-844add6 elementor-section-content-middle wd-section-stretch elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="844add6"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
            >
                <div className="elementor-installment-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-installment-element elementor-installment-element-38a304a"
                        data-id="38a304a"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <div
                                className="elementor-installment-element elementor-installment-element-39436b0 elementor-widget elementor-widget-wd_infobox"
                                data-id="39436b0"
                                data-element_type="widget"
                                data-widget_type="wd_infobox.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="info-box-wrapper">
                                        <div className="wd-info-box text-left box-icon-align-top box-style-bg-hover color-scheme-dark color-scheme-hover-dark">
                                            <div className="info-box-content">
                                                <h2
                                                    className="info-box-title title box-title-style-default wd-fontsize-m"
                                                    data-elementor-setting-key="title"
                                                >
                                                    {" "}
                                                    Custom Solar Panel Installations{" "}
                                                </h2>
                                                <div
                                                    className="info-box-inner set-cont-mb-s reset-last-child"
                                                    data-elementor-setting-key="content"
                                                >
                                                    <p>
                                                        Tailoring solar installations to fit the unique needs
                                                        and constraints of each site, Inversolar offers custom
                                                        solar panel installation services. This includes
                                                        assessing the site, designing the solar power system for
                                                        maximum efficiency, and installing the panels with
                                                        minimal disruption.
                                                        <span id="style-vaeVR" className="style-vaeVR" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-installment-element elementor-installment-element-f8e063f"
                        data-id="f8e063f"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <div
                                className="elementor-installment-element elementor-installment-element-274141c elementor-widget elementor-widget-wd_infobox"
                                data-id="274141c"
                                data-element_type="widget"
                                data-widget_type="wd_infobox.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="info-box-wrapper">
                                        <div className="wd-info-box text-left box-icon-align-top box-style-bg-hover color-scheme-dark color-scheme-hover-dark">
                                            <div className="info-box-content">
                                                <h2
                                                    className="info-box-title title box-title-style-default wd-fontsize-m"
                                                    data-elementor-setting-key="title"
                                                >
                                                    {" "}
                                                    Energy Efficiency Audits{" "}
                                                </h2>
                                                <div
                                                    className="info-box-inner set-cont-mb-s reset-last-child"
                                                    data-elementor-setting-key="content"
                                                >
                                                    <p>
                                                        Invertsolar conducts energy efficiency audits to
                                                        identify areas where energy use can be optimised. Based
                                                        on the audit's findings, they recommend solutions such
                                                        as solar installations, battery storage, and other
                                                        energy-efficient technologies and practices to enhance
                                                        sustainability.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-installment-element elementor-installment-element-5875390"
                        data-id={5875390}
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <div
                                className="elementor-installment-element elementor-installment-element-1bae6ec elementor-widget elementor-widget-wd_infobox"
                                data-id="1bae6ec"
                                data-element_type="widget"
                                data-widget_type="wd_infobox.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="info-box-wrapper">
                                        <div className="wd-info-box text-left box-icon-align-top box-style-bg-hover color-scheme-dark color-scheme-hover-dark">
                                            <div className="info-box-content">
                                                <h2
                                                    className="info-box-title title box-title-style-default wd-fontsize-m"
                                                    data-elementor-setting-key="title"
                                                >
                                                    {" "}
                                                    Hybrid Solar Systems{" "}
                                                </h2>
                                                <div
                                                    className="info-box-inner set-cont-mb-s reset-last-child"
                                                    data-elementor-setting-key="content"
                                                >
                                                    <p>
                                                        The design and implementation of hybrid solar systems
                                                        integrate solar panels, inverters, and battery storage
                                                        with the existing power grid, offering a versatile
                                                        energy solution that generates, stores, and manages
                                                        solar power, while also drawing from the grid when
                                                        necessary.
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
            </section>
            <section
                className="wd-negative-gap elementor-section elementor-top-section elementor-installment-element elementor-installment-element-1601316f elementor-section-boxed elementor-section-height-default elementor-section-height-default wd-section-disabled"
                data-id="1601316f"
                data-element_type="section"
            >
                <div className="elementor-installment-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-installment-element elementor-installment-element-39feae11"
                        data-id="39feae11"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <section
                                className="wd-negative-gap elementor-section elementor-inner-section elementor-installment-element elementor-installment-element-ccda814 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default wd-section-disabled"
                                data-id="ccda814"
                                data-element_type="section"
                            >
                                <div className="elementor-installment-container elementor-column-gap-default">
                                    <div
                                        className="elementor-column elementor-col-100 elementor-inner-column elementor-installment-element elementor-installment-element-1cc5cdb"
                                        data-id="1cc5cdb"
                                        data-element_type="column"
                                        data-settings='{"background_background":"gradient"}'
                                    >
                                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                                            <div
                                                className="elementor-installment-element elementor-installment-element-0f5775b elementor-widget elementor-widget-wd_title"
                                                data-id="0f5775b"
                                                data-element_type="widget"
                                                data-widget_type="wd_title.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <div className="title-wrapper set-mb-s reset-last-child wd-title-color-default wd-title-style-default wd-title-size-extra-large text-center">
                                                        <div className="liner-continer">
                                                            <h4 className="woodmart-title-container title wd-fontsize-xxxl">
                                                                We Work In The Following Areas:
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="elementor-installment-element elementor-installment-element-cdb423b color-scheme-inherit text-left elementor-widget elementor-widget-text-editor"
                                                data-id="cdb423b"
                                                data-element_type="widget"
                                                data-widget_type="text-editor.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <p>
                                                        At Invertsolar, we specialize in bringing sustainable
                                                        solar solutions to the heart of Gauteng, South Africa.
                                                        As a leading provider of solar services in the region,
                                                        we are dedicated to harnessing the power of the sun to
                                                        enrich lives, businesses, and communities across
                                                        Gauteng.Our services encompass the full spectrum of
                                                        solar solutions, including installation, maintenance,
                                                        and repair of solar panels, inverters, batteries, and
                                                        related equipment.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="wd-negative-gap elementor-section elementor-top-section elementor-installment-element elementor-installment-element-5bcca1d0 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default wd-section-disabled"
                data-id="5bcca1d0"
                data-element_type="section"
            >
                <div className="elementor-installment-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-installment-element elementor-installment-element-2da8ce12"
                        data-id="2da8ce12"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <div
                                className="elementor-installment-element elementor-installment-element-28d0f624 elementor-widget elementor-widget-wd_title"
                                data-id="28d0f624"
                                data-element_type="widget"
                                data-widget_type="wd_title.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="title-wrapper set-mb-s reset-last-child wd-title-color-default wd-title-style-default wd-title-size-default text-left">
                                        <div className="liner-continer">
                                            <h4 className="woodmart-title-container title wd-fontsize-l">
                                                Locations
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="wd-negative-gap elementor-section elementor-top-section elementor-installment-element elementor-installment-element-33a93bd0 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default wd-section-disabled"
                data-id="33a93bd0"
                data-element_type="section"
            >
                <div className="elementor-installment-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-25 elementor-top-column elementor-installment-element elementor-installment-element-1c3e3916"
                        data-id="1c3e3916"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <div
                                className="elementor-installment-element elementor-installment-element-6cb3b12 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                data-id="6cb3b12"
                                data-element_type="widget"
                                data-widget_type="icon-list.default"
                            >
                                <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Alberton</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Beestekraal</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Brakpan</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                Carletonville
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Cullinan</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Derby</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Fochville</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Heidelberg</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Johannesburg</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Koster</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                Leeudoringstad
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Magaliesburg</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Midrand</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Nigel</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                Potchefstroom
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Randvaal</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Sandton</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Stilfontein</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Walkerville</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-25 elementor-top-column elementor-installment-element elementor-installment-element-102ea3ba"
                        data-id="102ea3ba"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <div
                                className="elementor-installment-element elementor-installment-element-582f76b elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                data-id="582f76b"
                                data-element_type="widget"
                                data-widget_type="icon-list.default"
                            >
                                <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Alexandra</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Bela-Bela</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Brits</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Centurion</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Daveyton</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Diepsloot</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Germiston</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Hekpoort</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Kempton Park</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Kromdraai</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Lenasia</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Mamelodi</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                Modderfontein
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Nylstroom</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Pretoria</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Rayton</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Skeerpoort</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Tarlton</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Westonaria</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-25 elementor-top-column elementor-installment-element elementor-installment-element-2a3ad5aa"
                        data-id="2a3ad5aa"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <div
                                className="elementor-installment-element elementor-installment-element-dc6e95e elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                data-id="dc6e95e"
                                data-element_type="widget"
                                data-widget_type="icon-list.default"
                            >
                                <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Bapsfontein</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Benoni</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                Broederstroom
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Clayville</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Delareyville</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Dunnottar</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Hammanskraal</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Irene</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Klerksdorp</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Kroondal</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Meyerton</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Mooinooi</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Orange Farm</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Randburg</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Roodepoort</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Soweto</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                Vanderbijlpark
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Vereeniging</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Witbank</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-25 elementor-top-column elementor-installment-element elementor-installment-element-f31cf13"
                        data-id="f31cf13"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-installment-element-populated">
                            <div
                                className="elementor-installment-element elementor-installment-element-192d7eb elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                data-id="192d7eb"
                                data-element_type="widget"
                                data-widget_type="icon-list.default"
                            >
                                <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Bedfordview</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Boksburg</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                Bronkhorstspruit
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Coligny</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Delmas</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Edenvale</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                Hartbeespoort
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Isando</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Kosmos</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Krugersdorp</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Maanhaarrand</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Middelburg</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Muldersdrift</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Orkney</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Randfontein</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Rustenburg</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Springs</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">Ventersdorp</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </>);
}

export default SolarInstallments;