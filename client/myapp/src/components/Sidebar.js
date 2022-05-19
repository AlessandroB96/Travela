import React from 'react';
import Signup from './Signup';

const Sidebar = () => {
    return (
    <div class="sidebar-container">
        <div class="sidebar">
            <p class="side-text">YOUR ONE STOP SHOP TO TRAVEL PLANS</p>
            <Signup />
            <p class="login"><a class="login-link" href="https://www.google.com" alt="login-button">Click here to login</a></p>
        </div>
    </div>
    );
}

export default Sidebar;