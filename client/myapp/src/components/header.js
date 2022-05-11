import React from 'react';
import compare from '../images/compare.svg';
import search from '../images/search.svg';
import flight from '../images/flight.svg';

const Header = () => {
    return (
        <div class="header-container">

        <div class="logo">
            TRAVELA
        </div>


            <ul class="list-container">
                <li class="header">
                    <a href="https://www.google.com" class="btn2">
                        <img src={search} class="cart" alt="checkout cart"></img>
                    </a>
                </li>
                <li class="header">
                    <a href="https://www.google.com" class="btn2">
                        <img src={flight} class="cart" alt="checkout cart"></img>
                    </a>
                </li>
                <li><a href="https://www.google.com" class="btn2"><img src={compare} class="cart" alt="checkout cart"></img></a></li>
            </ul>
        </div>
    );
}

export default Header;