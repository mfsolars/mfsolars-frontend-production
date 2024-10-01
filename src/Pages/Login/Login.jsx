import { useParams } from "react-router-dom";
import "./Login.css";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginUser, LogOut } from '../../Store/User Reducers/UserSlice';
import { toast } from 'react-toastify';
import axios from "axios";
import { Link } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(state => state.user.user);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("email", email);
    formData.set("password", password);
  
    if (action === "register") {
      formData.set("name", name);
    }
  
    const userConfig = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
  
    const url = `/api/mfsolars/v1/auth/${action}`;
  
    try {
      const response = await axios.post(url, formData, userConfig);
  
      if (response?.data?.success) {
        toast.success(response?.data?.message);
        if (action === "login") {
          dispatch(loginUser(response.data));
        } else {
          dispatch(registerUser(response.data));
        }
  
        setName("");
        setEmail("");
        setPassword("");
      } else {
        toast.error("Failed to " + action + ". Try Again!");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  

  const handleLogout = async (e) => {
    e.preventDefault();
    let response = await axios.get("/api/mfsolars/v1/auth/logout");
    if (response.data.success) {
      toast.success(response.data.message);

      dispatch(LogOut(response.data))

    } else {
      toast.error(response.data.message);
    }

  }


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  useEffect(() => {
    if (loggedInUser?.userlogged) {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("cart");
      sessionStorage.removeItem("wishlist");
    }
  }, []);


  const requestResetPassword = async () => {
    if (email !== "") {
      let response = await axios.post("/api/mfsolars/v1/auth/forgetpassword", { email });
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    }
    else {
      toast.error("Please enter your email first");
    }
  }





  const { action } = useParams();

  return (<>
    <div className="main-page-login-wrapper mfsolars-LFDcc -translate-x-4 mt-6">
      <div className="container-login">
        <div className="row content-layout-wrapper align-items-start">
          <div className="site-content col-lg-12 col-12 col-md-12" role="main">
            <article
              id="post-11"
              className="post-11 page type-page status-publish hentry"
            >
              <div className="entry-content">
                <div className="woocommerce">
                  <div className="woocommerce-notices-wrapper" />
                  <div className="wd-registration-page wd-register-tabs">
                    {
                      loggedInUser?.userlogged ? <>
                        <div className="min-h-[50vh] flex flex-col items-center">
                          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
                            <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
                            <p className="text-lg mb-2">Name: {loggedInUser?.userlogged?.name}</p>
                            <p className="text-lg mb-4">Email: {loggedInUser?.userlogged?.email}</p>
                            <p className="text-lg mb-4">User Role: {loggedInUser?.userlogged?.role}</p>
                            <button
                              onClick={handleLogout}
                              className="bg-blue-500 text-white hover:text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                            >
                              Logout
                            </button>
                          </div>
                        </div>
                      </> : <div className="row" id="customer_login" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "100%" }}>
                        <div className="col-12 col-md-6 col-login" style={{ minWidth: "25rem", maxWidth: "31rem", width: "100%" }}>
                          <h2 className="wd-login-title">{action === "login" ? "Login" : "Register"}</h2>


                          <form
                            method="post"
                            className="login woocommerce-logi woocommerce-logi-login"
                            onSubmit={handleSubmit}
                          >


                            {
                              action == "login" ? "" : <p className="woocommerce-FormRow woocommerce-FormRow--wide logi-row loginform-row-wide loginform-row-username">
                                <label htmlFor="username">
                                  Username&nbsp;
                                  <span className="required">*</span>
                                </label>
                                <input
                                  value={name}
                                  onChange={(e) => {
                                    setName(e.target.value);
                                  }}
                                  type="text"
                                  className="woocommerce-Input woocommerce-Input--text input-text"
                                  name="username"
                                  id="username"
                                  required={true}
                                />
                              </p>
                            }

                            <p className="woocommerce-FormRow woocommerce-FormRow--wide loginform-row loginform-row-wide loginform-row-password">
                              <label htmlFor="password">
                                Email&nbsp;<span className="required">*</span>
                              </label>
                              <span className="password-input">
                                <input
                                  required={true}
                                  value={email}
                                  onChange={(e) => {
                                    setEmail(e.target.value);
                                  }}
                                  className="woocommerce-Input woocommerce-Input--text input-text"
                                  type="email"
                                  name="email"
                                  id="email"
                                  autoComplete="email"
                                />
                              </span>
                            </p>


                            <p style={{ marginBottom: "10px" }} className="woocommerce-FormRow woocommerce-FormRow--wide loginform-row loginform-row-wide loginform-row-password">
                              <label htmlFor="password">
                                Password&nbsp;<span className="required">*</span>
                              </label>
                              <span className="password-input" style={{ border: "1px solid #c2c2c2", borderRadius: "8px" }} >
                                <input
                                  required={true}
                                  value={password}
                                  onChange={(e) => {
                                    setPassword(e.target.value);
                                  }}
                                  className="woocommerce-Input woocommerce-Input--text input-text"
                                  type="password"
                                  name="password"
                                  id="password"
                                />
                              </span>
                            </p>


                            <p className="loginform-row">

                              <button
                                type="submit"
                                className="button woocommerce-button woocommerce-loginform-login__submit"
                                name="login"
                                value={`${action === "login" ? "Login" : "Register"}`}
                              >
                                {action === "login" ? "Login" : "Register"}
                              </button>
                            </p>
                            <p className="login-loginform-footer">
                              {action == "login" ? <p
                                className="woocommerce-LostPassword lost_password cursor-pointer"
                                onClick={() => { requestResetPassword() }}
                              >
                                Lost your password?
                              </p> : null}
                              {action == "login" ? null : <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-loginform-login__rememberme">
                                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                              </label>}

                            </p>
                          </form>
                        </div>



                        <div className="col-12 col-md-6 col-register-text" style={{ minWidth: "25rem", maxWidth: "31rem", width: "100%" }}>
                          <p className="title wd-login-divider ">
                            <span>Or</span>
                          </p>
                          <h2 className="wd-login-title">{action == "login" ? "Register" : "Login"}</h2>
                          <div className="registration-info">
                            {action == "login" ? "Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier." : "Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier."}

                          </div>

                          {action == "login" ? <Link
                            to="/my-account/register"
                            rel="nofollow noopener"
                            className="btn wd-switch-to-register"
                            data-login="Login"
                            data-login-title="Login"
                            data-reg-title="Register"
                            data-register="Register"
                          >
                            Register
                          </Link> : <Link
                            to="/my-account/login"
                            rel="nofollow noopener"
                            className="btn wd-switch-to-register"
                            data-login="Login"
                            data-login-title="Login"
                            data-reg-title="Register"
                            data-register="Register"
                          >
                            Login
                          </Link>}

                        </div>
                      </div>
                    }


                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </>);
}

export default Login;