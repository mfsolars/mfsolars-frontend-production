import "./Contactus.css"
import { FaFacebookF, FaTelegram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from "react";
import {useSelector} from "react-redux";
import axios from "axios";
import { toast } from 'react-toastify';


function ContactUs() {

  const Name = useSelector(state => state.user.user?.userlogged?.name || "");
  const Email = useSelector(state => state.user.user?.userlogged?.email || "");
  const [Phone, setPhone] = useState("");
  const [Message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(state.user.user?.userlogged){
      toast.error("Please login to send message");
      return;
    }
    const formData = new FormData();
    formData.set("name", Name);
    formData.set("email", Email);
    formData.set("phone", Phone);
    formData.set("message", Message);

    let response = null;
    const userConfig = {
      headers: {
        'Content-Type': 'application/json',
      }
    };

    const url = "/api/mfsolars/v1/contact";
    response = await axios.post(url, formData, userConfig);

    if (response.data.success) {
      toast.success(response.data.message);
      setPhone("");
      setMessage("");
    } else {
      toast.error("Failed to send message. Try Again!");
    }
  }
    return ( <>
    <div className="main-page-wrapper mfsolars-wT5ym" style={{marginTop:"2rem", padding:"1rem", backgroundColor:"aliceblue"}}>
  <div className="container">
    <div className="row content-layout-wrapper align-items-start">
      <div className="site-content col-lg-12 col-12 col-md-12" role="main">
        <article
          id="post-29"
          className="post-29 page type-page status-publish hentry"
        >
          <div className="entry-content">
            <div
              data-elementor-type="wp-page"
              data-elementor-id={29}
              className="elementor elementor-29"
              data-elementor-post-type="page"
            >
              <section
                className="wd-negative-gap elementor-section elementor-top-section elementor-element elementor-element-d480221 elementor-section-boxed elementor-section-height-default elementor-section-height-default wd-section-disabled"
                data-id="d480221"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-22f4ddc"
                    data-id="22f4ddc"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-c711c69 elementor-widget elementor-widget-google_maps"
                        data-id="c711c69"
                        data-element_type="widget"
                        data-widget_type="google_maps.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-custom-embed">
                            <iframe
                              loading="lazy"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.3990196616014!2d28.013230999999998!3d-26.2162214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950982264dacf3%3A0x97043ef8207d9061!2sSolar%20Mall%20Good%20Hope%20Mall!5e0!3m2!1sen!2s!4v1722925758875!5m2!1sen!2s"
                              title="Shop No: C1 & C2 Good Hope Mall 1 Press Avenue, Crown Mines Johannesberg"
                              aria-label="Shop No: C1 & C2 Good Hope Mall 1 Press Avenue, Crown Mines Johannesberg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="wd-negative-gap elementor-section elementor-top-section elementor-element elementor-element-93a8878 elementor-section-boxed elementor-section-height-default elementor-section-height-default wd-section-disabled"
                data-id="93a8878"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default flex lg:flex-row flex-col items-center" >
                  <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8e75b33"
                    data-id="8e75b33"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <section
                        className="wd-negative-gap elementor-section elementor-inner-section elementor-element elementor-element-2ff84ac elementor-section-boxed elementor-section-height-default elementor-section-height-default wd-section-disabled"
                        data-id="2ff84ac"
                        data-element_type="section"
                        data-settings='{"background_background":"classic"}'
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-da7f4c3"
                            data-id="da7f4c3"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-eb8ac23 elementor-widget elementor-widget-wd_title"
                                data-id="eb8ac23"
                                data-element_type="widget"
                                data-widget_type="wd_title.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="title-wrapper set-mb-s reset-last-child wd-title-color-default wd-title-style-default wd-title-size-default text-left">
                                    <div className="liner-continer">
                                      <h4 className="woodmart-title-container title wd-fontsize-l">
                                        Get in Touch
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-50008bb elementor-widget elementor-widget-shortcode"
                                data-id="50008bb"
                                data-element_type="widget"
                                data-widget_type="shortcode.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div
                                      className="gf_browser_unknown gform_wrapper gform-theme gform-theme--foundation gform-theme--framework gform-theme--orbital"
                                      data-form-theme="orbital"
                                      data-form-index={0}
                                      id="gform_wrapper_2"
                                    >
                                      <div className="gform_heading">
                                        <h2 className="gform_title">
                                          Contact Form
                                        </h2>
                                        <p className="gform_description" />
                                      </div>
                                      <form
                                        id="gform_2"
                                        onSubmit={handleSubmit}
                                       
                                      >
                                        <div className="gform-body gform_body">
                                          <div
                                            id="gform_fields_2"
                                            className="gform_fields top_label form_sublabel_above description_above validation_below"
                                          >
                                            <fieldset
                                              id="field_2_1"
                                              className="gfield gfield--type-name gfield--input-type-name gfield_contains_required field_sublabel_above gfield--no-description field_description_above field_validation_below gfield_visibility_visible"
                                              data-js-reload="field_2_1"
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
                                                id="input_2_1"
                                              >
                                                <span
                                                  id="input_2_1_3_container"
                                                  className="name_first gform-grid-col gform-grid-col--size-auto"
                                                >
                                                  <label
                                                    htmlFor="input_2_1_3"
                                                    className="gform-field-label gform-field-label--type-sub "
                                                  >
                                                    Name
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="input_1.3"
                                                    id="input_2_1_3"
                                                    value={Name}
                                                    aria-required="true"
                                                    autoComplete="given-name"
                                                  />
                                                </span>
                                              </div>
                                            </fieldset>
                                            <div
                                              id="field_2_2"
                                              className="gfield gfield--type-email gfield--input-type-email gfield--width-half gfield_contains_required field_sublabel_above gfield--no-description field_description_above field_validation_below gfield_visibility_visible"
                                              data-js-reload="field_2_2"
                                            >
                                              <label
                                                className="gfield_label gform-field-label"
                                                htmlFor="input_2_2"
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
                                                  id="input_2_2"
                                                  type="email"
                                                  value={Email}
                                                  onChange={(e) => setEmail(e.target.value)}
                                                  className="large"
                                                  required={true} 
                                                />
                                              </div>
                                            </div>
                                            <div
                                              id="field_2_4"
                                              className="gfield gfield--type-phone gfield--input-type-phone gfield--width-half field_sublabel_above gfield--no-description field_description_above field_validation_below gfield_visibility_visible"
                                              data-js-reload="field_2_4"
                                            >
                                              <label
                                                className="gfield_label gform-field-label"
                                                htmlFor="input_2_4"
                                              >
                                                Phone
                                              </label>
                                              <div className="ginput_container ginput_container_phone">
                                                <input
                                                  name="input_4"
                                                  id="input_2_4"
                                                  type="tel"
                                                  value={Phone}
                                                  onChange={(e) => setPhone(e.target.value)}
                                                  className="large"
                                                  required={true}
                                                />
                                              </div>
                                            </div>
                                            <div
                                              id="field_2_3"
                                              className="gfield gfield--type-textarea gfield--input-type-textarea gfield_contains_required field_sublabel_above gfield--has-description field_description_above field_validation_below gfield_visibility_visible"
                                              data-js-reload="field_2_3"
                                            >
                                              <label
                                                className="gfield_label gform-field-label"
                                                htmlFor="input_2_3"
                                              >
                                                Comments
                                                <span className="gfield_required">
                                                  <span className="gfield_required gfield_required_text">
                                                    (Required)
                                                  </span>
                                                </span>
                                              </label>
                                              <div
                                                className="gfield_description"
                                                id="gfield_description_2_3"
                                              >
                                                Please let us know what's on
                                                your mind. Have a question for
                                                us? Ask away.
                                              </div>
                                              <div className="ginput_container ginput_container_textarea">
                                                <textarea
                                                  name="input_3"
                                                  id="input_2_3"
                                                  className="textarea medium"
                                                  aria-describedby="gfield_description_2_3"
                                                  maxLength={600}
                                                  aria-required="true"
                                                  aria-invalid="false"
                                                  rows={10}
                                                  cols={50}
                                                  value={Message}
                                                  required={true}
                                                  onChange={(e) => setMessage(e.target.value)}
                                                />
                                                <div
                                                  className="charleft ginput_counter gfield_description"
                                                  aria-live="polite"
                                                >
                                                  {Message.length} of 600 max characters
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="gform_footer top_label">
                                          {" "}
                                          <input
                                          type="submit"
                                            id="gform_submit_button_2"
                                            className="gform_button button"
                                            defaultValue="Send Message"
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
                  </div>
                  <div
                    className="elementor-column elementor-top-column elementor-element elementor-element-867f364"
                    data-id="867f364"
                    data-element_type="column"
                    style={{width:"100%",maxWidth:"500px"}}
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <section
                        className="wd-negative-gap elementor-section elementor-inner-section elementor-element elementor-element-b37ad8a elementor-section-boxed elementor-section-height-default elementor-section-height-default wd-section-disabled"
                        
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-d2334c2"
                            data-id="d2334c2"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-97fa0f1 elementor-widget elementor-widget-wd_title"
                                data-id="97fa0f1"
                                data-element_type="widget"
                                data-widget_type="wd_title.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="title-wrapper set-mb-s reset-last-child wd-title-color-default wd-title-style-default wd-title-size-small text-left">
                                    <div className="liner-continer">
                                      <h4 className="woodmart-title-container title wd-fontsize-m">
                                        Need Help?
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-4c82a68 elementor-widget elementor-widget-wd_list"
                                data-id="4c82a68"
                                data-element_type="widget"
                                data-widget_type="wd_list.default"
                              >
                                <div className="elementor-widget-container">
                                  <ul className="wd-list color-scheme-custom wd-fontsize-xs wd-list-type-icon wd-list-style-default wd-justify-left">
                                    <li className="elementor-repeater-item-b7e03af">
                                      <img
                                        fetchpriority="high"
                                        loading="lazy"
                                        decoding="async"
                                        src="https://invertsolar.co.za/wp-content/uploads/2023/01/phone.svg"
                                        title="phone"
                                        width={32}
                                        height={32}
                                      />
                                      <span className="list-content">
                                        {" "}
                                        +27 66 172 1041{" "}
                                      </span>
                                      <Link
                                        to="tel:+27661721041"
                                        className="wd-fill"
                                        aria-label="List item link"
                                      />
                                    </li>
                                    <li className="elementor-repeater-item-dc81d72">
                                      <img
                                        decoding="async"
                                        src="https://invertsolar.co.za/wp-content/uploads/elementor/thumbs/security-pin-1-qak22sdlctaxb9umjtgf7u8vmkiyat5zpoku150vnk.png"
                                        title="security-pin"
                                        alt="security-pin"
                                        loading="lazy"
                                      />
                                      <span className="list-content">
                                        {" "}
                                        Address: <span className="text-sm font-medium">Shop No. C1 & C2 Good Hope Mall 1 Press Avenue, Crown Mines Johannesberg</span>
                                      </span>
                                      <Link
                                        to="https://www.google.com/maps/place/Solar+Mall+Good+Hope+Mall/@-26.2162214,28.0106561,17z/data=!3m1!4b1!4m6!3m5!1s0x1e950982264dacf3:0x97043ef8207d9061!8m2!3d-26.2162214!4d28.013231!16s%2Fg%2F11fss_y4sn?entry=ttu"
                                        target="_blank"
                                        className="wd-fill"
                                        aria-label="List item link"
                                      />
                                    </li>
                                    <li className="elementor-repeater-item-c05932f">
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        src="https://invertsolar.co.za/wp-content/uploads/2023/01/email.svg"
                                        title="email"
                                        width={32}
                                        height={32}
                                      />
                                      <span className="list-content">
                                        {" "}
                                        Email: Mftrading901@gmail.com{" "}
                                      </span>
                                      <Link
                                        to="mailto:Mftrading901@gmail.com"
                                        className="wd-fill"
                                        aria-label="List item link"
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-02d3924 elementor-widget elementor-widget-wd_title"
                                data-id="02d3924"
                                data-element_type="widget"
                                data-widget_type="wd_title.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="title-wrapper set-mb-s reset-last-child wd-title-color-default wd-title-style-default wd-title-size-small text-left">
                                    <div className="liner-continer">
                                      <h4 className="woodmart-title-container title wd-fontsize-m">
                                        Share our website
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-ecec71a elementor-widget elementor-widget-wd_social_buttons"
                                data-id="ecec71a"
                                data-element_type="widget"
                                data-widget_type="wd_social_buttons.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="wd-social-icons icons-design-colored icons-size-default color-scheme-dark social-share social-form-circle text-left"
                                  style={{display:"flex",justifyContent:"center"}}>
                                    <Link
                                      rel="noopener noreferrer nofollow"
                                      to="https://www.facebook.com/sharer/sharer.php?u=https://invertsolar.co.za/contact"
                                      target="_blank"
                                      className=" wd-social-icon social-facebook"
                                      aria-label="Facebook social link"
                                      style={{display:"grid",placeItems:"center"}}
                                    >
                                      <FaFacebookF style={{fontSize:"1.3rem"}}/>
                                    </Link>
                                    <Link
                                      rel="noopener noreferrer nofollow"
                                      to="https://twitter.com/share?url=https://invertsolar.co.za/contact"
                                      target="_blank"
                                      className=" wd-social-icon social-twitter"
                                      aria-label="Twitter social link"
                                      style={{display:"grid",placeItems:"center"}}
                                    >
                                      <FaTwitter style={{fontSize:"1.3rem"}}/>
                                    </Link>
                                    <Link
                                      rel="noopener noreferrer nofollow"
                                      to="https://pinterest.com/pin/create/button/?url=https://invertsolar.co.za/contact&media=https://invertsolar.co.za/wp-includes/images/media/default.svg&description=Contact+us"
                                      target="_blank"
                                      className=" wd-social-icon social-pinterest"
                                      aria-label="Pinterest social link"
                                      style={{display:"grid",placeItems:"center"}}
                                    >
                                     <FaPinterest style={{fontSize:"1.3rem"}}/>
                                    </Link>
                                    <Link
                                      rel="noopener noreferrer nofollow"
                                      to="https://www.linkedin.com/shareArticle?mini=true&url=https://invertsolar.co.za/contact"
                                      target="_blank"
                                      className=" wd-social-icon social-linkedin"
                                      aria-label="Linkedin social link"
                                      style={{display:"grid",placeItems:"center"}}
                                    >
                                      <FaLinkedinIn style={{fontSize:"1.3rem"}}/>
                                    </Link>
                                    <Link
                                      rel="noopener noreferrer nofollow"
                                      to="https://telegram.me/share/url?url=https://invertsolar.co.za/contact"
                                      target="_blank"
                                      className=" wd-social-icon social-tg"
                                      aria-label="Telegram social link"
                                      style={{display:"grid",placeItems:"center"}}
                                    >
                                      <FaTelegram style={{fontSize:"1.3rem"}}/>
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
                </div>
              </section>

              <section
                className="wd-negative-gap elementor-section elementor-top-section elementor-element elementor-element-7a2d702 elementor-section-boxed elementor-section-height-default elementor-section-height-default wd-section-disabled"
                data-id="7a2d702"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2231cab"
                    data-id="2231cab"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-6876cfc elementor-widget elementor-widget-heading"
                        data-id="6876cfc"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h1 className="elementor-heading-title elementor-size-default">
                            Solar Shop
                          </h1>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-00e5f66 color-scheme-inherit text-left elementor-widget elementor-widget-text-editor"
                        data-id="00e5f66"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <p>
                            Our solar shop is your one-stop shop for
                            high-quality items that assure continuous power
                            supply during loadshedding. We are proud to offer a
                            diverse choice of excellent solar solutions to
                            fulfill your energy requirements. Our solutions,
                            which range from dependable illumination to
                            cutting-edge solar security cameras, are designed to
                            keep you safe and secure even during the darkest
                            hours. Accept solar energy’s efficiency and say
                            goodbye to power interruptions and safety worries.
                            Enjoy peace of mind with our quality solar goods
                            designed to improve your daily life.
                          </p>
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
</> );
}

export default ContactUs;