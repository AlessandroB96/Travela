import React from 'react';

const Signup = ({onLogin}) => {
    
    return (

<form className="form" action="" method="post">

    <h1 className="sign-up-heading">SIGNUP</h1>
    <div className="signup">
        <div className="username-container">
            <label htmlFor="first_name" className="c-label">USERNAME: </label>
            <input type="text" name="first_name" id="username" className="username-input" />
        </div>
        <div className="email-container">
            <label htmlFor="email" className="c-label">EMAIL: </label>
            <input type="email" name="email" id="email" className="email-input" />
        </div>
        <div className="password-container">
            <label htmlFor="password" className="c-label">PASSWORD: </label>
            <input type="password" name="password" id="password" className="password-input" />
        </div>
        <button className="login-link" href="https://www.google.com" alt="login-button" onClick={(e) => {
            e.preventDefault();
            onLogin(true)
            }}>Click here to login</button>

    </div>
    </form>
    );
}

export default Signup;