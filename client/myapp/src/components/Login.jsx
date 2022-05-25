import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const Signup = (props) => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    const {
        loginSelected,
        setLoginSelected
    } = props;

        const [formState, setFormState] = useState({
            email: '',
            password: '',
        });
        const [login, { error }] = useMutation(LOGIN_USER);
        
        // update state based on form input changes
        const handleChange = (event) => {
            const { name, value } = event.target;
        
            setFormState({
            ...formState,
            [name]: value,
            });
        };
        
        // submit form
        const handleFormSubmit = async (event) => {
            event.preventDefault();
        
            try {
            const { data } = await login({
                variables: { ...formState },
            });
        
            Auth.login(data.login.token);
            } catch (e) {
            console.error(e);
            }
        };
    
    return (
        <div className="form-container">
            <form className="form" action="" method="post" onSubmit={handleFormSubmit}>

                <h1 className="sign-up-heading">LOGIN</h1>
                <div className="signup">
                    <div className="email-container">
                        <label for="email" className="c-label" id="email">EMAIL: </label>
                        <input type="email" name="email" id="email" className="email-input" value={formState.email} onChange={handleChange} />
                    </div>
                    <div className="password-container">
                        <label for="password" className="c-label" id="password">PASSWORD: </label>
                        <input type="password" name="password" id="password" className="password-input" value={formState.password} onChange={handleChange} />
                    </div>
                    <button className="btn" type="submit">
                        LOGIN
                    </button>
                </div>
                {Auth.loggedIn() ? (               
                    <a href="/" onClick={logout}>
                    Logout
                    </a> 
                ) : (
                <p className="login"><a className="login-link" alt="login-button" onClick={() => setLoginSelected(false)}>Click here to signup</a></p>
                )}
            </form>
            {error && <div className="sign-up-heading">Login failed</div>}
        </div>
    );
}

export default Signup;