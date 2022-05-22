import React from 'react';
import Signup from './Signup';

const Sidebar = ({onLogin}) => {
    return (
    <div className="sidebar-container">
        <div className="sidebar">
            <p className="side-text">YOUR ONE STOP SHOP TO TRAVEL PLANS</p>
            <Signup onLogin={onLogin}/>
        </div>
    </div>
    );
}

export default Sidebar;