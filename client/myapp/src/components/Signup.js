import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const Signup = () => {
    
    return (

<form class="form" action="" method="post">

    <h1 class="sign-up-heading">SIGNUP</h1>
    <div class="signup">
        <div class="username-container">
            <label for="first_name" class="c-label">USERNAME: </label>
            <input type="text" name="first_name" id="username" class="username-input" />
        </div>
        <div class="email-container">
            <label for="email" class="c-label">EMAIL: </label>
            <input type="email" name="email" id="email" class="email-input" />
        </div>
        <div class="password-container">
            <label for="password" class="c-label">PASSWORD: </label>
            <input type="password" name="password" id="password" class="password-input" />
        </div>
    </div>
    </form>
    );
}

export default Signup;