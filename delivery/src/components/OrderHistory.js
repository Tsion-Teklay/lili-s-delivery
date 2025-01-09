import React, { useEffect, useState } from 'react';
import ApiService from '../services/api';

const OrderHistory = ({ userId }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await ApiService.fetchUserOrders(userId);
            setOrders(response.data);
        };
        fetchOrders();
    }, [userId]);

    return (
        <div>
            <h2>Your Orders</h2>
            {orders.map(order => (
                <div key={order.id}>
                    <p>Order ID: {order.id}</p>
                    <p>Total Price: {order.totalPrice}</p>
                </div>
            ))}
        </div>
    );
};

export default OrderHistory;