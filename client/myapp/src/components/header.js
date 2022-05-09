import React from 'react';
import cart from '../images/cart.svg';

const Header = () => {
    return (
        <div class="header-container">

        <div class="logo">
            WeSHOP
        </div>


            <ul class="list-container">
                <li><a href="https://www.google.com" class="btn">home</a></li>
                <li><a href="https://www.google.com" class="btn">test</a></li>
                <li><a href="https://www.google.com" class="btn">test</a></li>
                <li><a href="https://www.google.com" class="btn">test</a></li>
                <li><a href="https://www.google.com" class="btn2"><img src={cart} class="cart" alt="checkout cart"></img></a></li>
            </ul>
        </div>
    );
}

export default Header;