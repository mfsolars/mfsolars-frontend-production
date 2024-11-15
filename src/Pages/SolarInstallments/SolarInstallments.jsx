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
    const API_URL = import.meta.env.VITE_API_URL;
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
        },
        withCredentials: true,
      };
  
      const url = `${API_URL}/mfsolars/v1/installation`;
      try{
        response = await axios.post(url, formData, userConfig);
  
      if (response.data.success) {
        toast.success(response.data.message);
        setPhone("");
        setMessage("");
        setAddress("");
      } else {
        toast.error(response.data.message);
      }
      }catch(e){
        toast.error(response.data.message);
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
                className="w-11/12 m-auto mt-2"
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
        </div>

    </>);
}

export default SolarInstallments;