import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../services/api'; // Adjust the import path

const Cart = () => {
    const { userId } = useParams();
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [deliveryAddress, setDeliveryAddress] = useState(''); // State for delivery address
    const [errorMessage, setErrorMessage] = useState(''); // State for error messages

    useEffect(() => {
        const fetchCartItems = async () => {
            console.log(userId);
            try {
                const response = await ApiService.fetchUserCart(userId); // Fetch cart items from API
                setCartItems(response.data);
                calculateTotal(response.data);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, [userId]);

    const calculateTotal = (items) => {
        console.log('Calculating total for items:', items); // Debug log
        const total = items.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0);
        setTotalPrice(total);
    };

    const handleQuantityChange = (item, quantity) => {
        const updatedQuantity = Math.max(1, quantity); // Ensure quantity is at least 1
        const updatedItems = cartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: updatedQuantity } : cartItem
        );
        setCartItems(updatedItems);
        calculateTotal(updatedItems);
    };

    const handleRemoveItem = (item) => {
        const updatedItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedItems);
        calculateTotal(updatedItems); // Recalculate total after removal
    };

    const handleCheckout = async () => {
        const order = {
            userId: userId, 
            deliveryAddress: deliveryAddress,
            orderItems: cartItems.map(item => ({
                menuItemId: item.id, 
                quantity: item.quantity,
            })),
        };
    
        try {
            await ApiService.checkout(order);
    
            // Clear cart and reset UI states after successful checkout
            setCartItems([]);
            setDeliveryAddress('');
            setErrorMessage('');
            alert('Order placed successfully!');
        } catch (error) {
            console.error('Error during checkout:', error);
            setErrorMessage('Failed to place the order. Please try again.');
        }
    };    
    

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id}>
                        <img src={item.imageUrl} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <input
                            type="number"
                            value={item.quantity}
                            min="1"
                            onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                        />
                        <button onClick={() => handleRemoveItem(item)}>Remove</button>
                    </div>
                ))
            )}
            <h3>Total: {totalPrice}</h3>

            {/* Delivery Address Input */}
            <div>
                <h4>Delivery Address</h4>
                <textarea
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Enter your delivery address"
                    rows="3"
                    style={{ width: '100%' }}
                />
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>

            <button onClick={handleCheckout} disabled={cartItems.length === 0 || !deliveryAddress.trim()}>
                Proceed to Checkout
            </button>
        </div>
    );
};

export default Cart;
