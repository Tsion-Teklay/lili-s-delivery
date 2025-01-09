import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../services/api';

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ username: '', email: '', password: '', confirmPassword: '' });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await ApiService.signup(user);
            alert('User registered successfully!');
            navigate('/login');
        } catch (error) {
            alert(error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" placeholder="Username" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;