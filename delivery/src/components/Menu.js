import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import ApiService from '../services/api';

const Menu = () => {
    const { userId } = useParams(); // Get userId from URL parameters
    const [menuItems, setMenuItems] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchMenuItems = async () => {
            const response = await ApiService.fetchMenuItems();
            setMenuItems(response.data);
        };
        fetchMenuItems();
    }, []);

    const addToCart = async (menuItemId) => {
        console.log(userId); // Log the userId
        await ApiService.addToCart(userId, menuItemId, 1); // Default quantity to 1
        alert('Item added to cart!');
    };

    const goToCart = () => {
      navigate(`/cart/users/${userId}`); // Navigate to the cart page
    };

    return (
        <div>
            <h1>Menu</h1>
            <button onClick={goToCart}>Go to Cart</button> {/* Cart button */}
            {menuItems.length === 0 ? (
                <p>Loading menu items...</p>
            ) : (
                menuItems.map(item => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <button onClick={() => addToCart(item.id)}>Add to Cart</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Menu; 