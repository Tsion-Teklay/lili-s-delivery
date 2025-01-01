import axios from "axios";

const BASE_URL = "http://localhost:8080";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Customers API
export const getCustomers = () => api.get("/api/customers");
export const getCustomerById = (id) => api.get(`/api/customers/${id}`);
export const createCustomer = (customer) => api.post("/api/customers", customer);
export const updateCustomer = (id, customer) => api.put(`/api/customers/${id}`, customer);
export const deleteCustomer = (id) => api.delete(`/api/customers/${id}`);

// Menu Items API
export const getMenuItems = () => api.get("/api/menu-items");
export const getMenuItemById = (id) => api.get(`/api/menu-items/${id}`);
export const createMenuItem = (menuItem) => api.post("/api/menu-items", menuItem);
export const updateMenuItem = (id, menuItem) => api.put(`/menu-items/${id}`, menuItem);
export const deleteMenuItem = (id) => api.delete(`/api/menu-items/${id}`);

// Orders API
export const getOrders = () => api.get("/orders");
export const getOrdersByCustomer = (customerId) => api.get(`/api/orders/customer/${customerId}`);
export const createOrder = (order) => api.post("/api/orders", order);
export const updateOrderStatus = (id, status) => api.put(`/api/orders/${id}/status?status=${status}`);
export const deleteOrder = (id) => api.delete(`/api/orders/${id}`);
