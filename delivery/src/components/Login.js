import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ApiService from '../services/api';

const Login = ({ setUser }) => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ApiService.login(credentials);
            const userId = response.data.userId; // Get user ID from response
            setUser(response.data.token); // Store token in state or local storage
            console.log(userId);
            localStorage.setItem('userId', userId); // Optionally store user ID in local storage
            alert('Login successful!');
            navigate(`/menu/${userId}`); 
        } catch (error) {
            alert(error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" placeholder="Username" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;