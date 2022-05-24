import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';


const Sidebar = (props) => {
   
    const {
        loginSelected,
        setLoginSelected
    } = props;

    return (
    <div className="sidebar-container">
        <div className="sidebar">
            <p className="side-text">YOUR ONE STOP SHOP TO TRAVEL PLANS</p>
            {!loginSelected ? (
            <Signup 
                
                loginSelected={loginSelected}
                setLoginSelected={setLoginSelected}
                setIsLoggedIn={setIsLoggedIn}
            />
            ) : (
            <Login 
                loginSelected={loginSelected}
                setLoginSelected={setLoginSelected}

            />
            )}
        </div>
    </div>
    );
}

export default Sidebar;
