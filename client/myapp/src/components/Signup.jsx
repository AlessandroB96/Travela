import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

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
            username: '',
            email: '',
            password: '',
        });
        const [addUser, { error }] = useMutation(ADD_USER);
        
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
            const { data } = await addUser({
                variables: { ...formState },
            });
        
            Auth.login(data.addUser.token);
            } catch (e) {
            console.error(e);
            }
        };
    
    return (
        <div>
            <form className="form" action="" method="post" onSubmit={handleFormSubmit}>

                <h1 className="sign-up-heading">SIGNUP</h1>
                <div className="signup">
                    <div className="username-container">
                        <label for="username" className="c-label">USERNAME: </label>
                        <input type="username" name="username" id="username" className="username-input" value={formState.username} onChange={handleChange} />
                    </div>
                    <div className="email-container">
                        <label for="email" className="c-label">EMAIL: </label>
                        <input type="email" name="email" id="email" className="email-input" value={formState.email} onChange={handleChange} />
                    </div>
                    <div className="password-container">
                        <label for="password" className="c-label">PASSWORD: </label>
                        <input type="password" name="password" id="password" className="password-input" value={formState.password} onChange={handleChange} />
                    </div>
                    <button className="btn" type="submit">
                        SIGNUP
                    </button>
                </div>
                {Auth.loggedIn() ? (               
                    <a href="/" onClick={logout}>
                    Logout
                    </a> 
                ) : (
                    <p className="login"><a className="login-link" alt="login-button" onClick={() => setLoginSelected(true)}>Click here to login</a></p> 
                )}
            </form>
            {error && <div className="sign-up-heading">Signup failed</div>}
        </div>
    );
}

export default Signup;

// import React from 'react';

// const Signup = ({onLogin}) => {
    
//     return (

// <form className="form" action="" method="post">

//     <h1 className="sign-up-heading">SIGNUP</h1>
//     <div className="signup">
//         <div className="username-container">
//             <label htmlFor="first_name" className="c-label">USERNAME: </label>
//             <input type="text" name="first_name" id="username" className="username-input" />
//         </div>
//         <div className="email-container">
//             <label htmlFor="email" className="c-label">EMAIL: </label>
//             <input type="email" name="email" id="email" className="email-input" />
//         </div>
//         <div className="password-container">
//             <label htmlFor="password" className="c-label">PASSWORD: </label>
//             <input type="password" name="password" id="password" className="password-input" />
//         </div>
//         <button className="login-link" href="https://www.google.com" alt="login-button" onClick={(e) => {
//             e.preventDefault();
//             onLogin(true)
//             }}>Click here to login</button>

//     </div>
//     </form>
//     );
// }

// export default Signup;