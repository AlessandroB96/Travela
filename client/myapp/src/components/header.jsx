import React, {useState} from 'react';
import compare from '../images/compare.svg';
import Search from '../images/search.svg';
import flight from '../images/flight.svg';

const Header = () => {

    const [search, setSearch] = useState('');

    return (
        <div className="header-container">

        <div className="logo">
            TRAVELA
        </div>


            <ul className="list-container">
                <li className="header">
                    <input type="text" name="search" id="search" className="search-input" placeholder="search..."  value={search} onChange={(event) => setSearch(event.target.value)}/>
                    <button className="btn2">
                        <img src={Search} className="cart" alt="search"></img>
                    </button>
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