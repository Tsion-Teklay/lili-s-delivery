import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Load cart items from local storage or state management
        const items = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(items);
        calculateTotal(items);
    }, []);

    const calculateTotal = (items) => {
        const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalPrice(total);
    };

    const handleQuantityChange = (item, quantity) => {
        const updatedItems = cartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
        );
        setCartItems(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
        calculateTotal(updatedItems);
    };

    const handleRemoveItem = (item) => {
        const updatedItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
        calculateTotal(updatedItems);
    };

    const handleCheckout = async () => {
        const order = {
            user: { id: 1 }, // Replace with actual user ID
            orderItems: cartItems.map(item => ({
                menuItem: { id: item.id },
                quantity: item.quantity,
            })),
            status: 'placed',
            orderDate: new Date(),
            deliveryAddress: '123 Delivery St.', // Replace with actual address input
        };
        
        await axios.post('/api/orders', order);
        // Clear cart and redirect to order history or confirmation page
        localStorage.removeItem('cart');
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <img src={item.imageUrl} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                    />
                    <button onClick={() => handleRemoveItem(item)}>Remove</button>
                </div>
            ))}
            <h3>Total: ${totalPrice}</h3>
            <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;