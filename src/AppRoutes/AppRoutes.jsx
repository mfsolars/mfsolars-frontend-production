import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "../Pages/HomePage/HomePage.jsx";
import AboutUs from "../Pages/AboutUs/AboutUs.jsx";
import ContactUs from "../Pages/ContactUs/ContactUs.jsx";
import Departments from "../Pages/Departments/Departments.jsx";
import DeliveryReturn from "../Pages/Delivery-Return/DeliveryReturn.jsx";
import ShippingPolicy from "../Pages/ShippingPolicy/ShippingPolicy.jsx";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy.jsx";
import TermConditions from "../Pages/TermConditions/TermConditions.jsx";
import ProductsbyCategory from "../Pages/ProductsbyCategory/ProductsbyCategory.jsx";
import SolarInstallments from "../Pages/SolarInstallments/SolarInstallments.jsx";
import WishList from "../Pages/WishList/WishList.jsx";
import Login from "../Pages/Login/Login.jsx";
import CheckOut from "../Pages/CheckOut/CheckOut.jsx";
import NotFound from "../Pages/NotFound/NotFound.jsx";
import Product_Page from "../Pages/Product_Page/Product_Page.jsx";
import MyOrders from "../Pages/MyOrders/MyOrders.jsx";
import Order_Admin from "../Components/Orders_Admin/Order_Admin.jsx";
import Products_Admin from "../Components/Products_Admin/Products_Admin.jsx";
import ResetPassword from "../Components/ResetPassword/ResetPassword.jsx";
import ProtectedRoute from '../Components/ProtectedRoute/ProtectedRoute.jsx';
import AdminRoute from '../Components/AdminRoute/AdminRoute.jsx';

function AppRoutes() {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Navigate to={"home"} />}></Route>
                <Route path='home' element={<HomePage />}></Route>
                <Route path='about' element={<AboutUs />}></Route>
                <Route path='departments' element={<Departments />}></Route>
                <Route path='delivery-return' element={<DeliveryReturn />}></Route>
                <Route path='refund_returns' element={<ShippingPolicy />}></Route>
                <Route path='privacy-policy' element={<PrivacyPolicy />}></Route>
                <Route path='terms-and-conditions' element={<TermConditions />}></Route>
                <Route path='products/:category' element={<ProductsbyCategory />}></Route>
                <Route path='products/product/:id' element={<Product_Page />}></Route>
                <Route path='my-account/:action' element={<Login />}></Route>
                <Route path='*' element={<NotFound />}></Route>
                <Route path='/my-account/reset-password/:token' element={<ResetPassword />} />
                <Route path='contact' element={<ContactUs />} />

                {/* Protected routes  */}
                <Route element={<ProtectedRoute />}>

                    <Route path='solar-installation' element={<SolarInstallments />} />
                    <Route path='checkout' element={<CheckOut />} />
                    <Route path='order/me' element={<MyOrders />} />
                    <Route path='wishlist' element={<WishList />} />
                </Route>

                {/* Admin Routes */}
                <Route element={<AdminRoute />}>
                    <Route path='dashboard' element={<Navigate to="/admin/orders" />} />
                    <Route path='admin/orders' element={<Order_Admin />} />
                    <Route path='admin/products' element={<Products_Admin />} />
                </Route>
            </Routes>
        </React.Fragment>
    );
}

export default AppRoutes;
