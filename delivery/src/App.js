import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Menu from './components/Menu';
import Cart from './components/Cart';
import OrderHistory from './components/OrderHistory';
import WelcomePage from './components/WelcomePage';

const App = () => {
    const [userId, setUserId] = useState(null);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login setUser={setUserId} />} />
                <Route path="/menu/:userId" element={<Menu />} />
                <Route path="/cart/users/:userId" element={<Cart />} />
                <Route path="/orders/users/:userId" element={<OrderHistory />} />
            </Routes>
        </Router>
    );
};

export default App;