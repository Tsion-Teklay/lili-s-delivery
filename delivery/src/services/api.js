import axios from 'axios';

const API_URL = 'http://localhost:8080/api';  // Adjust to your backend URL

const ApiService = {
    signup: (user) => axios.post(`${API_URL}/auth/signup`, user),
    login: (user) => axios.post(`${API_URL}/auth/login`, user),
    fetchMenuItems: () => axios.get(`${API_URL}/menu`),
    addToCart: (userId, menuItemId, quantity) => axios.post(`${API_URL}/cart/add`, null, { params: { userId, menuItemId, quantity } }),
    fetchUserCart: (userId) => axios.get(`${API_URL}/cart/user/${userId}`),
    checkout: (userId, deliveryAddress) => axios.post(`${API_URL}/orders/checkout`, null, { params: { userId, deliveryAddress } }),
    fetchUserOrders: (userId) => axios.get(`${API_URL}/orders/user/${userId}`)
};

export default ApiService;