import React, { useEffect, useState } from 'react';
import styles from "../../Pages/MyOrders/MyOrders.module.css";
import axios from 'axios';
import { format } from 'date-fns';
import { AiOutlineClose } from 'react-icons/ai';



const Order_Admin = () => {

    const [orders, setOrders] = useState([]);

    const [totalOrders, setTotalOrders] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        document.title = "My Orders";
        getOrderdata();

    }, []);


    const getOrderdata = async () => {
        try {
            const response = await axios.get('/api/mfsolars/v1//order/orders');
            console.log(response.data.Orders);

            setOrders(response.data.Orders);
            setTotalPrice(response.data.total);
            setTotalOrders(response.data.totalOrders);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeStatus = async (e) => {
        const status = e.target.value;
        const orderId = e.target.closest('tr').querySelector('td').textContent;

        try {
            const response = await axios.put(`/api/mfsolars/v1/order/${orderId}`, { orderStatus: status });
            getOrderdata();
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteOrder = async (orderId) => {

        try {
            const response = await axios.delete(`/api/mfsolars/v1/order/${orderId}`);
            getOrderdata();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <main>
            <div className={styles.container}>
                <div className={styles.block}>
                    <h2>Total Orders</h2>
                    <p>{totalOrders}</p>
                </div>
                <div className={styles.block}>
                    <h2>Total Price</h2>
                    <p>ZAR {totalPrice.toFixed(2)}</p>
                </div>
            </div>
            <h1 style={{ fontSize: "2.4rem", marginBottom: "2rem" }}>Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Order By</th>
                        <th>Order Date</th>
                        <th>Shipping Address</th>
                        <th>Order Items</th>
                        <th>Total Price (ZAR)</th>
                        <th>Status</th>
                        <th>Delete Order</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map((order) => (
                            <tr key={order?._id}>
                                <td data-label="ID">{order?._id}</td>
                                <td data-label="Name">{order?.user?.name}</td>
                                <td data-label="Date">{format(new Date(order?.createdAt), 'MMMM dd, yyyy')}</td>
                                <td data-label="Country">{order?.Shippinginfo.address}</td>
                                <td data-label="Items">{order?.orderItems?.map((item) => (item?.name))}</td>
                                <td data-label="DOB">{order?.totalPrice}</td>
                                <td data-label="Status">
                                    <select
                                        className={order?.orderStatus === "Processing" ? styles.active : styles.inactive}
                                        value={order?.orderStatus}
                                        onChange={handleChangeStatus}
                                    >
                                        <option value="Processing">Processing</option>
                                        <option value="Delivered">
                                            Delivered on {order?.deliveredAt ? format(new Date(order?.deliveredAt), 'MMMM dd, yyyy') : ''}
                                        </option>
                                    </select>
                                </td>
                                <td data-label="Delete" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <button className={styles.delete} onClick={() => handleDeleteOrder(order._id)}>
                                        <AiOutlineClose />
                                    </button>
                                </td>
                            </tr>))
                    }
                </tbody>
            </table>
        </main>
    )
}

export default Order_Admin