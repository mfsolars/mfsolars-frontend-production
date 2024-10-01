import "./CheckOut.css";

import axios from 'axios';


import { State } from 'country-state-city';


import { useEffect, useRef, useState } from "react";


import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function CheckOut() {
  const User = useSelector(state => state.user.user);

  const btnRef = useRef(false);
  const [items, setItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isPaid, setPaid] = useState(false);

  const [name, setName] = useState(User?.userlogged?.name);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(User?.userlogged?.email);
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [total, setTotal] = useState(0);

  const [reftoken, setRefToken] = useState("");

  const navigate = useNavigate();
  
  
  const storedItems = JSON.parse(sessionStorage.getItem("cart"));

  useEffect(() => {
    // Clear sessionStorage if user is not logged in
    if (User?.userlogged == null || User?.userlogged == undefined) {
        sessionStorage.clear();
    }

    // Retrieve stored cart items
    const storedItems = JSON.parse(sessionStorage.getItem("cart"));
    if (storedItems) {
        const itemsArray = Object.values(storedItems);
        setItems(itemsArray);
        const totalAmount = itemsArray.reduce((acc, item) => acc + item?.price * (item?.quantity || 1), 0);
        setTotal(totalAmount);
    } else {
        setItems([]);
    }

}, [User]); // Added User as a dependency

  





// useEffect to check and process the order when token is present after redirection
useEffect(() => {
  // Retrieve token from sessionStorage or state
  const storedToken = sessionStorage.getItem("reftoken");

  if (storedToken) {
    const storedOrderData = JSON.parse(sessionStorage.getItem("orderData"));
    console.log("Stored Order Data:", storedOrderData);
    ProcessOrder(storedOrderData);
    sessionStorage.removeItem("reftoken"); 
  }
}, [reftoken]);






async function submintHandler(e) {
  e.preventDefault();

  // Disable the button to prevent multiple submissions
  btnRef.current.disabled = true;

  let paymentInfo = {
    id: "N/A",
    status: "Pending"
  };

  // Prepare order data
  const orderData = {
    Shippinginfo: {
      address: address,
      city: state,
      postalCode: pincode,
      country: country,
      phoneno: phone
    },
    orderItems: items.map(item => ({
      name: item?.name,
      qty: item?.quantity || 1,
      image: item?.productImages[0]?.url,
      price: item?.price,
      product: item?._id
    })),
    paymentinfo: {
      id: paymentInfo?.id,
      status: paymentInfo?.status
    },
    paidAt: new Date().toISOString(),
    itemsPrice: total,
    taxPrice: 20,
    shippingPrice: 100,
    totalPrice: total + 100 + 20,
    orderStatus: "Processing",
    deliveredAt: null,
    createdAt: new Date().toISOString()
  };

  // Store orderData in sessionStorage for retrieval after payment
  sessionStorage.setItem("orderData", JSON.stringify(orderData));

  if (paymentMethod === "card") {
    const PaymentData = {
      amount: total * 100,
      email: email
    };

    const configuration = {
      headers: {
        "Content-Type": "application/json",
      }
    };

    try {
      // Step 1: Initiate payment and get the authorization URL
      const { data } = await axios.post("/api/mfsolars/v1/payment", PaymentData, configuration);

      // Redirect the user to Paystack (or another payment processor)
      window.location.href = data.authorization_url;

      // Extract token from authorization URL
      const reference = getTokenFromUrl(data.authorization_url);
      
      // Store token in sessionStorage
      sessionStorage.setItem("reftoken", reference);

      return; // Exit function after redirection
    } catch (error) {
      // Handle payment initiation failure
      console.error("Payment Error:", error);
      toast.error(error.response?.data?.message || "Payment failed.");
      btnRef.current.disabled = false;
      return;
    }

  } else if (paymentMethod === "cash") {
    // For cash on delivery (COD) orders
    paymentInfo = {
      id: "COD",
      status: "Pending"
    };

    // Update orderData with COD payment info
    orderData.paymentinfo = paymentInfo;

    // Directly process order since COD doesn’t require payment confirmation
    await ProcessOrder(orderData);
    btnRef.current.disabled = false;
    return;
  }
}



function getTokenFromUrl(url) {
  const segments = url.split('/');
  return segments[segments.length - 1];
}



  // submit handler end



  const ProcessOrder = async (orderData, userConfig) => {
    try {
        const url = "/api/mfsolars/v1/order/create";
        const response = await axios.post(url, orderData, userConfig);
        console.log("API Response:", response.data);

        if (response.data.success) {
            // Reset state and navigate
            setAddress("");
            setCountry("");
            setPincode("");
            setState("");
            setName("");
            setEmail("");
            setPhone("");
            setPaid(false);
            sessionStorage.removeItem("cart");
            navigate("/order/me");
            toast.success(response.data.message);
        } else {
            toast.error("Unable to process order: " + response.data.message);
        }
    } catch (error) {
        console.error("Error processing order:", error);
        toast.error("Error processing order: " + error.message);
    } finally {
        btnRef.current.disabled = false; // Ensure button is re-enabled
    }
};





  return (<>
    <div className="main-checkout-page-wrapper mfsolars-dkwCI " style={{ marginTop: "2rem" }}>
      <div className="container">
        <div className="row-checkout content-layout-wrapper align-items-start">
          <div
            className="site-content col-lg-12 col-12 col-md-12 wd-builder-on"
            role="main"
          >

            <div
              data-elementor-checkout-type="wp-post"
              data-elementor-checkout-id={1646}
              className="elementor-checkout elementor-checkout-1646"
              data-elementor-checkout-post-type="woodmart_layout"
            >
              <section
                className="wd-negative-gap elementor-checkout-section elementor-checkout-top-section elementor-checkout-element elementor-checkout-element-5ab0f20 elementor-checkout-section-boxed elementor-checkout-section-height-default elementor-checkout-section-height-default wd-section-disabled"
                data-id="5ab0f20"
                data-element_type="section"
              >
                <div className="elementor-checkout-container elementor-checkout-column-gap-default">
                  <div
                    className="elementor-checkout-column elementor-checkout-col-100 elementor-checkout-top-column elementor-checkout-element elementor-checkout-element-cb858b4"
                    data-id="cb858b4"
                    data-element_type="column"
                  >
                    <div className="elementor-checkout-widget-wrap elementor-checkout-element-populated">
                      <div
                        className="elementor-checkout-element elementor-checkout-element-d63a96a wd-page-title-el elementor-checkout-widget elementor-checkout-widget-wd_page_title"
                        data-id="d63a96a"
                        data-element_type="widget"
                        data-widget_type="wd_page_title.default"
                      >
                        <div className="elementor-checkout-widget-container">
                          <div
                            className="page-title  page-title-default title-size-default title-design-default color-scheme-light"
                            style={{}}
                          >
                            <div className="container">
                              <ul className="wd-checkout-steps">
                                <li className="step-complete step-inactive">
                                  <span>Checkout</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="wd-negative-gap elementor-checkout-section elementor-checkout-top-section elementor-checkout-element elementor-checkout-element-40ca8781 elementor-checkout-section-boxed elementor-checkout-section-height-default elementor-checkout-section-height-default wd-section-disabled"
                data-id="40ca8781"
                data-element_type="section"
              >
                <div className="elementor-checkout-container elementor-checkout-column-gap-default">
                  <div
                    className="elementor-checkout-column elementor-checkout-col-100 elementor-checkout-top-column elementor-checkout-element elementor-checkout-element-2ff20e93"
                    data-id="2ff20e93"
                    data-element_type="column"
                  >
                    <div className="elementor-checkout-widget-wrap elementor-checkout-element-populated">
                      <div
                        className="elementor-checkout-element elementor-checkout-element-2b75ed19 wd-wc-notices elementor-checkout-widget elementor-checkout-widget-wd_wc_notices"
                        data-id="2b75ed19"
                        data-element_type="widget"
                        data-widget_type="wd_wc_notices.default"
                      >
                        <div className="elementor-checkout-widget-container">
                          <div className="woocommerce-notices-wrapper" />
                        </div>
                      </div>
                      <div
                        className="elementor-checkout-element elementor-checkout-element-68d8d0b wd-checkout-login elementor-checkout-widget elementor-checkout-widget-wd_checkout_login_form"
                        data-id="68d8d0b"
                        data-element_type="widget"
                        data-widget_type="wd_checkout_login_form.default"
                      >
                        <div className="elementor-checkout-widget-container">
                          <div className="wd-checkout-login-inner">
                            <div className="woocommerce-form-login-toggle">
                              <div className="woocommerce-info" style={{ color: "black" }}>
                                {" "}
                                Returning customer?{" "}
                                <Link to="/login" className="showlogin">
                                  Click here to login
                                </Link>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="elementor-checkout-element elementor-checkout-element-69fc2e79 wd-checkout-coupon elementor-checkout-widget elementor-checkout-widget-wd_checkout_coupon_form"
                        data-id="69fc2e79"
                        data-element_type="widget"
                        data-widget_type="wd_checkout_coupon_form.default"
                      >
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>


            <div
              name="checkout"
              className="checkout woocommerce-checkout "
            >

              <div
                data-elementor-checkout-type="wp-post"
                data-elementor-checkout-id={1650}
                className="elementor-checkout elementor-checkout-1650"
                data-elementor-checkout-post-type="woodmart_layout"
              >
                <section
                  className="wd-negative-gap elementor-checkout-section elementor-checkout-top-section elementor-checkout-element elementor-checkout-element-7758448 elementor-checkout-reverse-mobile elementor-checkout-section-boxed elementor-checkout-section-height-default elementor-checkout-section-height-default wd-section-disabled"
                  data-id={7758448}
                  data-element_type="section"
                >
                  <div className="elementor-checkout-container elementor-checkout-column-gap-default flex flex-wrap lg:items-start items-center justify-center ">
                    <div
                      className="elementor-checkout-column elementor-checkout-col-50 elementor-checkout-top-column elementor-checkout-element elementor-checkout-element-29eebdb min-w-[600px] order-2 lg:order-1"
                      data-id="29eebdb"
                      data-element_type="column"
                    >
                      <div className="elementor-checkout-widget-wrap elementor-checkout-element-populated">
                        <section
                          className="wd-negative-gap elementor-checkout-section elementor-checkout-inner-section elementor-checkout-element elementor-checkout-element-213839a elementor-checkout-section-boxed elementor-checkout-section-height-default elementor-checkout-section-height-default wd-section-disabled"
                        >
                          <div className="elementor-checkout-container elementor-checkout-column-gap-default">
                            <div
                              className="elementor-checkout-column elementor-checkout-col-100 elementor-checkout-inner-column elementor-checkout-element elementor-checkout-element-60a78d9"
                              data-id="60a78d9"
                              data-element_type="column"
                            >
                              <div className="elementor-checkout-widget-wrap elementor-checkout-element-populated">
                                <div
                                  className="elementor-checkout-element elementor-checkout-element-a7a8917 elementor-checkout-widget elementor-checkout-widget-wd_title"
                                  data-id="a7a8917"
                                  data-element_type="widget"
                                  data-widget_type="wd_title.default"
                                >
                                  <div className="elementor-checkout-widget-container">
                                    <div className="title-wrapper set-mb-s reset-last-child wd-title-color-default wd-title-style-default wd-title-size-default text-left">
                                      <div className="liner-continer">
                                        <h4 className="woodmart-title-container title wd-fontsize-l">
                                          Billing Details
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <form className="w-[90%] m-4 p-10 bg-white rounded shadow-xl border border-red-800" onSubmit={(e) => submintHandler(e)}>
                                  <div className="">
                                    <label className="block text-sm text-gray-00" htmlFor="cus_name">
                                      Name
                                    </label>
                                    <input
                                      className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                      id="cus_name"
                                      name="cus_name"
                                      type="text"
                                      required
                                      placeholder="Your Name"
                                      aria-label="Name"
                                      value={name}
                                      readOnly={true}
                                    />
                                  </div>
                                  <div className="mt-2">
                                    <label className="block text-sm text-gray-600" htmlFor="cus_email">
                                      Email
                                    </label>
                                    <input
                                      className="w-full px-5  py-2 text-gray-700 bg-gray-200 rounded"
                                      id="cus_email"
                                      name="cus_email"
                                      type="email"
                                      value={email}
                                      readOnly={true}
                                      required
                                      placeholder="Your Email"
                                      aria-label="Email"
                                    />
                                  </div>
                                  <div className="mt-2">
                                    <label className="block text-sm text-gray-600" htmlFor="cus_email">
                                      Phone
                                    </label>
                                    <input
                                      className="w-full px-5  py-2 text-gray-700 bg-gray-200 rounded"
                                      id="cus_phone"
                                      name="cus_phone"
                                      type="tel"
                                      value={phone}
                                      onChange={(e) => setPhone(e.target.value)}
                                      required={true}
                                      placeholder="Your contact"
                                    />
                                  </div>
                                  <div className="mt-2">
                                    <label className="block text-sm text-gray-600" htmlFor="cus_email">
                                      Address
                                    </label>
                                    <input
                                      className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                      id="cus_email"
                                      name="cus_email"
                                      type="text"
                                      required
                                      value={address}
                                      onChange={(e) => setAddress(e.target.value)}
                                      placeholder="Street"
                                      aria-label="street "
                                    />
                                  </div>
                                  <div className="w-full  mt-2">
                                    <label className=" block text-sm text-gray-600" htmlFor="cus_email">
                                      Country
                                    </label>
                                    <select required name="city" id="" className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" value={country} onChange={(e) => setCountry(e.target.value)}>
                                      <option value="">Select Country</option>
                                      <option value="ZA">South Africa</option>  // you can add more countries

                                    </select>
                                  </div>

                                  {
                                    country ? <>
                                      <div className="inline-block mt-2 w-1/2 pr-1">
                                        <label className=" text-sm block text-gray-600" htmlFor="cus_email">
                                          State
                                        </label>
                                        <select required name="city" id="" className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" value={state} onChange={(e) => setState(e.target.value)}>
                                          <option value="">Select State</option>
                                          {
                                            State?.getStatesOfCountry(country).map((item) => (
                                              <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                                            ))
                                          }
                                        </select>
                                      </div></> : ""
                                  }
                                  {
                                    state ? <>
                                      <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                                        <label className="block text-sm text-gray-600" htmlFor="cus_email">
                                          Zip
                                        </label>
                                        <input
                                          className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                          id="cus_email"
                                          name="cus_email"
                                          type="text"
                                          value={pincode}
                                          onChange={(e) => setPincode(e.target.value)}
                                          required
                                          placeholder="Zip"
                                          aria-label="Email"
                                        />
                                      </div>
                                    </> : ""
                                  }

                                </form>

                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>

                    {/* right part  */}
                    <div
                      className="elementor-checkout-column elementor-checkout-col-50 elementor-checkout-top-column elementor-checkout-element elementor-checkout-element-4014de5 relative bg-slate-200 min-w-[600px] lg:order-2 order-1"

                    >
                      <div className="elementor-checkout-widget-wrap elementor-checkout-element-populated">
                        <section
                          className="wd-negative-gap elementor-checkout-section elementor-checkout-inner-section elementor-checkout-element elementor-checkout-element-113a396 elementor-checkout-section-boxed elementor-checkout-section-height-default elementor-checkout-section-height-default wd-section-disabled"

                        >
                          <div className="elementor-checkout-container elementor-checkout-column-gap-default">
                            <div
                              className="elementor-checkout-column elementor-checkout-col-100 elementor-checkout-inner-column elementor-checkout-element elementor-checkout-element-e060be9"
                              data-id="e060be9"
                              data-element_type="column"
                            >
                              <div className="elementor-checkout-widget-wrap elementor-checkout-element-populated">
                                <div
                                  className="elementor-checkout-element elementor-checkout-element-6d076f3 elementor-checkout-widget elementor-checkout-widget-wd_title"
                                  data-id="6d076f3"
                                  data-element_type="widget"
                                  data-widget_type="wd_title.default"
                                >
                                  <div className="elementor-checkout-widget-container">
                                    <div className="title-wrapper set-mb-s reset-last-child wd-title-color-default wd-title-style-default wd-title-size-default text-left">
                                      <div className="liner-continer">
                                        <h4 className="woodmart-title-container title wd-fontsize-l">
                                          Your Order
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-checkout-element elementor-checkout-element-04824f1 wd-order-table wd-manage-on elementor-checkout-widget elementor-checkout-widget-wd_checkout_order_review"
                                  data-id="04824f1"
                                  data-element_type="widget"
                                  data-widget_type="wd_checkout_order_review.default"
                                >
                                  <div className="elementor-checkout-widget-container">
                                    <table className="shop_table woocommerce-checkout-review-order-table">
                                      <thead>
                                        <tr>
                                          <th className="product-name">Product</th>
                                          <th className="product-total">
                                            Subtotal
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {
                                          items?.map((item) => (
                                            <tr className="cart_item" key={item._id}>
                                          <td className="wd-checkout-prod">
                                            <div className="wd-checkout-prod-img">
                                              <img
                                                width={600}
                                                height={600}
                                                src={
                                                  item?.productImages[0]?.url
                                                }
                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                alt=""
                                                decoding="async"
                                              />
                                            </div>
                                            <div className="wd-checkout-prod-cont">
                                              <div className="wd-checkout-prod-title">
                                                <span className="cart-product-label">
                                                  {item?.name}
                                                </span>
                                                <div className="quantity">

                                                <div className="text-sm">Qty: {item?.quantity || 1}</div>
                                                </div>
                                              </div>
                                              <div className="wd-checkout-prod-total product-total">
                                                <span className="woocommerce-Price-amount amount">
                                                  <bdi>
                                                    <span className="woocommerce-Price-currencySymbol">
                                                      R
                                                    </span>
                                                    {item?.price.toFixed(2)*(item?.quantity || 1)}
                                                  </bdi>
                                                </span>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                          ))
                                        }
                                      </tbody>
                                      <tfoot>
                                        <tr className="cart-subtotal">
                                          <th>Subtotal</th>
                                          <td>
                                            <span className="woocommerce-Price-amount amount">
                                              <bdi>
                                                <span className="woocommerce-Price-currencySymbol">
                                                  R
                                                </span>
                                                {total.toFixed(2)}
                                              </bdi>
                                            </span>
                                          </td>
                                        </tr>
                                        <tr className="woocommerce-shipping-totals shipping">
                                          <th>Shipping</th>
                                          <td data-title="Shipping">
                                            <ul
                                              id="shipping_method"
                                              className="woocommerce-shipping-methods"
                                            >
                                              <li>
                                                <input
                                                  type="hidden"
                                                  name="shipping_method[0]"
                                                  data-index={0}
                                                  id="shipping_method_0_free_shipping3"
                                                  defaultValue="free_shipping:3"
                                                  className="shipping_method"
                                                />
                                                <label htmlFor="shipping_method_0_free_shipping3">
                                                  {total.toFixed(2)>1000 ? "Free shipping" : "Standard shipping"}
                                                </label>
                                              </li>
                                            </ul>
                                          </td>
                                        </tr>
                                        <tr className="order-total">
                                          <th>Total</th>
                                          <td>
                                            <strong>
                                              <span className="woocommerce-Price-amount amount">
                                                <bdi>
                                                  <span className="woocommerce-Price-currencySymbol">
                                                    R
                                                  </span>
                                                  {total.toFixed(2)}
                                                </bdi>
                                              </span>
                                            </strong>{" "}
                                          </td>
                                        </tr>
                                      </tfoot>
                                    </table>
                                  </div>
                                </div>

                                {
                                  total.toFixed(2)>1000?<><div
                                  className="elementor-checkout-element elementor-checkout-element-aa22376 wd-style-default wd-shipping-progress-bar text-left elementor-checkout-widget elementor-checkout-widget-wd_single_product_shipping_progress_bar"
                                  data-id="aa22376"
                                  data-element_type="widget"
                                  data-widget_type="wd_single_product_shipping_progress_bar.default"
                                >
                                  <div className="elementor-checkout-widget-container">
                                    <div className="wd-progress-bar wd-free-progress-bar">
                                      <div className="progress-msg">
                                        {" "}
                                        Your order qualifies for free shipping!{" "}
                                      </div>
                                      <div className="progress-area">
                                        <div
                                          className="progress-bar"
                                          style={{ width: `${total.toFixed(2) <= 1000 ? total.toFixed(2) / 10 : 100}%` }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div></>:""
                                }
                                
                              </div>
                            </div>
                          </div>
                        </section>
                        <section
                          className="wd-negative-gap elementor-checkout-section elementor-checkout-inner-section elementor-checkout-element elementor-checkout-element-4b1ef99 elementor-checkout-section-boxed elementor-checkout-section-height-default elementor-checkout-section-height-default wd-section-disabled "
                          data-id="4b1ef99"
                          data-element_type="section"
                          data-settings='{"background_background":"classic"}'
                        >
                          <div className="elementor-checkout-container elementor-checkout-column-gap-default">
                            <div
                              className="elementor-checkout-column elementor-checkout-col-100 elementor-checkout-inner-column elementor-checkout-element elementor-checkout-element-a6feabb"
                              data-id="a6feabb"
                              data-element_type="column"
                            >
                              <div className="elementor-checkout-widget-wrap elementor-checkout-element-populated">
                                <div
                                  className="elementor-checkout-element elementor-checkout-element-57c65f7 elementor-checkout-widget elementor-checkout-widget-wd_title"
                                  data-id="57c65f7"
                                  data-element_type="widget"
                                  data-widget_type="wd_title.default"
                                >
                                  <div className="elementor-checkout-widget-container">
                                    <div className="title-wrapper set-mb-s reset-last-child wd-title-color-default wd-title-style-default wd-title-size-default text-left">
                                      <div className="liner-continer">
                                        <h4 className="woodmart-title-container title wd-fontsize-l">
                                          Payment Information
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-checkout-element elementor-checkout-element-4662f1d wd-btn-align-full-width wd-payment-methods elementor-checkout-widget elementor-checkout-widget-wd_checkout_payment_methods"
                                  data-id="4662f1d"
                                  data-element_type="widget"
                                  data-widget_type="wd_checkout_payment_methods.default"
                                >
                                  <div className="elementor-checkout-widget-container">
                                    <div
                                      id="payment"
                                      className="woocommerce-checkout-payment"
                                    >
                                      <ul className="wc_payment_methods payment_methods methods">
                                        <li className="wc_payment_method payment_method_bacs">
                                          <input
                                            id="payment_method_bacs_card"
                                            type="radio"
                                            className="input-radio"
                                            name="payment_method"
                                            value="card"
                                            readOnly={true}
                                            defaultChecked={true}
                                            onClick={(e) => {
                                              setPaymentMethod(e.target.value);
                                            }}
                                          />
                                          <label htmlFor="payment_method_bacs_card">
                                            Pay with Paystack or EFT
                                          </label>
                                          {
                                            paymentMethod=="card"?
                                          
                                          <div className="payment_box payment_method_bacs">
                                            <p>
                                              Make your payment directly into our bank account. Please use your Order ID
                                              as the payment reference. Your order will not be shipped until the funds
                                              have cleared in our account.
                                            </p>
                                          </div>:""}
                                        </li>
                                        <li className="wc_payment_method payment_method_bacs">
                                          <input
                                            id="payment_method_bacs_cash"
                                            type="radio"
                                            className="input-radio"
                                            name="payment_method"
                                            value="cash"
                                            readOnly={true}
                                            onClick={(e) => {
                                              setPaymentMethod(e.target.value);
                                            }}
                                          />
                                          <label htmlFor="payment_method_bacs_cash">
                                            Cash on Delivery
                                          </label>
                                        </li>
                                      </ul>

                                      <div className="form-row-checkout place-order">

                                        <div className="woocommerce-terms-and-conditions-wrapper">
                                          <div className="woocommerce-privacy-policy-text">
                                            <p>
                                              Your personal data will be used to
                                              process your order, support your
                                              experience throughout this website,
                                              and for other purposes described in
                                              our{" "}
                                              <Link
                                                to="/privacy-policy/"
                                                className="woocommerce-privacy-policy-link"
                                                target="_blank"
                                              >
                                                privacy policy
                                              </Link>
                                              .
                                            </p>
                                          </div>
                                          <p className="form-row-checkout validate-required">
                                            <label className="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
                                              <input
                                                type="checkbox"
                                                className="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox"
                                                name="terms"
                                                defaultChecked="checked"
                                                id="terms"
                                              />
                                              <span className="woocommerce-terms-and-conditions-checkbox-text">
                                                I have read and agree to the website
                                                Terms and Conditions
                                              </span>
                                              &nbsp;
                                              <abbr
                                                className="required"
                                                title="required"
                                              >
                                                *
                                              </abbr>
                                            </label>
                                          </p>
                                        </div>
                                        <button
                                          type="submit"
                                          onClick={submintHandler}
                                          className={`button alt`}
                                          name="woocommerce_checkout_place_order"
                                          id="place_order"
                                          value="Place order"
                                          data-value="Place order"
                                          readOnly={true} 
                                          ref={btnRef}
                                        >
                                          Place order
                                        </button>
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
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>);
}

export default CheckOut;