import React, {useState, useEffect} from 'react';
import compare from '../images/compare.svg';
import Search from '../images/search.svg';
import {useQuery} from "@apollo/client"
import { GET_SEARCH } from '../graphql/searchTerm';
// import {useSearch} from "../api"
const Header = ({onSubmit, toggleMapVisible, toggleItineraryVisible}) => {

    const [search, setSearch] = useState("");
    const [input, setInput] = useState("");
    // const {isLoading, data}  = useSearch(search);
    const {isLoading} = useQuery(GET_SEARCH, {
        variables: {
            searchTerm: search
        },
        skip: search.length === 0,
        onCompleted: (data) => {
            onSubmit(data.searchPlace)
        }
    });

    return (
        <div className="header-container">

        <div className="logo">
            TRAVELA
        </div>


            <ul className="list-container">
                <li className="header">
                    <input type="text" name="search" id="search" className="search-input" placeholder="search city..."  value={input} onChange={(event) => setInput(event.target.value)}/>
                    <button disabled={isLoading} className="searchbtn" onClick={(e) => {
                        e.preventDefault();
                        setSearch(input);
                        toggleMapVisible(true);
                    }}>
                        <img src={Search} className="cart" alt="search"></img>
                    </button>
                </li>

                <li>
                    <button className="btn2" className="itinerary-btn" onClick={(e) => {
                        e.preventDefault();
                        toggleItineraryVisible(true);


                    }}>
                    <img src={compare} className="cart" alt="checkout cart"></img></button>
                </li>
            </ul>
        </div>
    );
}

export default Header;