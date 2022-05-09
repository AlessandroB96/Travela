import React from 'react';
import Login from '../components/Login';

const Sidebar = () => {
    return (
    <div class="sidebar-container">
        <p class="side-text">SIGN UP OR LOG IN TO SAVE AND CHECKOUT</p>
        <Login />
    </div>
    );
}

export default Sidebar;