import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const Signup = () => {
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
    //     <form onSubmit={handleFormSubmit}>
    //     <h1 className="sign-up-heading">SIGNUP</h1>
    //     <input
    //       className="form-input"
    //       placeholder="Your username"
    //       name="username"
    //       type="username"
    //       id="username"
    //       value={formState.username}
    //       onChange={handleChange}
    //     />
    //     <input
    //       className="form-input"
    //       placeholder="Your email"
    //       name="email"
    //       type="email"
    //       id="email"
    //       value={formState.email}
    //       onChange={handleChange}
    //     />
    //     <input
    //       className="form-input"
    //       placeholder="******"
    //       name="password"
    //       type="password"
    //       id="password"
    //       value={formState.password}
    //       onChange={handleChange}
    //     />
    //     <button className="btn d-block w-100" type="submit">
    //       Submit
    //     </button>
    //   </form>

    //   {error && <div>Signup failed</div>}
        <div>
            <form className="form" action="" method="post" onSubmit={handleFormSubmit}>

                <h1 className="sign-up-heading">SIGNUP</h1>
                <div className="signup">
                    {/* <div className="username-container">
                        <label for="first_name" className="c-label">USERNAME: </label>
                        <input type="username" name="first_name" id="username" className="username-input" value={formState.username} onChange={handleChange}/>
                    </div> */}
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
                        Submit
                    </button>
                </div>
            </form>
            {error && <div className="sign-up-heading">Signup failed</div>}
        </div>
    );
}

export default Signup;