import React from 'react';
import compare from '../images/compare.svg';
import search from '../images/search.svg';
import flight from '../images/flight.svg';

const Header = () => {
    return (
        <div className="header-container">

        <div className="logo">
            TRAVELA
        </div>


            <ul className="list-container">
                <li className="header">
                    <a href="https://www.google.com" className="btn2">
                        <img src={search} className="cart" alt="checkout cart"></img>
                    </a>
                </li>
                <li className="header">
                    <a href="https://www.google.com" className="btn2">
                        <img src={flight} className="cart" alt="checkout cart"></img>
                    </a>
                </li>
                <li><a href="https://www.google.com" className="btn2"><img src={compare} className="cart" alt="checkout cart"></img></a></li>
            </ul>
        </div>
    );
}

export default Header;