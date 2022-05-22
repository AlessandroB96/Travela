import React from 'react';
import Signup from './Signup';

const Sidebar = () => {
    return (
    <div className="sidebar-container">
        <div className="sidebar">
            <p className="side-text">YOUR ONE STOP SHOP TO TRAVEL PLANS</p>
            <Signup />
            <p className="login"><a className="login-link" href="https://www.google.com" alt="login-button">Click here to login</a></p>
        </div>
    </div>
    );
}

export default Sidebar;