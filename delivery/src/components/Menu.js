import React, { useEffect, useState } from 'react';
import ApiService from '../services/api';

const Menu = ({ userId }) => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            const response = await ApiService.fetchMenuItems();
            setMenuItems(response.data);
        };
        fetchMenuItems();
    }, []);

    const addToCart = async (menuItemId) => {
        console.log(userId);
        await ApiService.addToCart(userId, menuItemId, 1);  // default quantity to 1
        alert('Item added to cart!');
    };

    return (
        <div>
            {menuItems.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <button onClick={() => addToCart(item.id)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default Menu;