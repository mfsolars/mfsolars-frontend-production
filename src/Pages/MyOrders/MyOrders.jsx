import React, { useEffect,useState } from 'react';
import styles from "./MyOrders.module.css";
import axios from 'axios';
import { format } from 'date-fns';



const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        document.title = "My Orders";
        getOrderdata();

    }, []);


    const getOrderdata = async () => {
        try {
            const response = await axios.get('/api/mfsolars/v1/order/orders/me');
            setOrders(response.data.OrderList);
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <main>
    <table>
        <thead>
            <tr>
                <th>Order ID</th>
                <th>Order Date</th>
                <th>Shipping Address</th>
                <th>Order Items</th>
                <th>Total Price (ZAR)</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>

            {
                orders.map((order) => (
                    <tr key={order?._id}>
                        <td data-label="ID">{order?._id}</td>
                        <td data-label="Date">{format(new Date(order?.createdAt), 'MMMM dd, yyyy')}</td>
                        <td data-label="Country">{order?.Shippinginfo.address}</td>
                        <td data-label="Items">{order?.orderItems?.map((item)=>(item?.name))}</td>
                        <td data-label="DOB">{order?.totalPrice}</td>
                        <td data-label="Status"><span className={order?.orderStatus=="Processing"?styles.active:styles.inactive}>{order?.orderStatus=="Processing"?"Processing":"Delivered  on  "+format(new Date(order?.deliveredAt), 'MMMM dd, yyyy')}</span></td>
                    </tr>))
            }
        </tbody>
    </table>
</main>
  )
}

export default MyOrders