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

// import React, {useState, useEffect} from 'react';
// import compare from '../images/compare.svg';
// import Search from '../images/search.svg';
// import flight from '../images/flight.svg';
// import {useSearch} from "../api"
// const Header = ({onSubmit}) => {

//     const [search, setSearch] = useState(undefined);
//     console.log({search})
//     const [input, setInput] = useState("")
//     const {isLoading, data}  = useSearch(search);
//     useEffect(() => {
//         if(data){
//             onSubmit(data)
//             console.log("Running")
//         }
//     }, [isLoading])
//     return (
//         <div className="header-container">

//         <div className="logo">
//             TRAVELA
//         </div>


//             <ul className="list-container">
//                 <li className="header">
//                     <input type="text" name="search" id="search" className="search-input" placeholder="search..."  value={input} onChange={(event) => setInput(event.target.value)}/>
//                     <button className="btn2" onClick={(e) => {
//                         e.preventDefault();
//                         setSearch(input)
//                     }}>
//                         <img src={Search} className="cart" alt="search"></img>
//                     </button>
//                 </li>
//                 <li className="header">
//                     <a href="https://www.google.com" className="btn2">
//                         <img src={flight} className="cart" alt="checkout cart"></img>
//                     </a>
//                 </li>
//                 <li><a href="https://www.google.com" className="btn2"><img src={compare} className="cart" alt="checkout cart"></img></a></li>
//             </ul>
//         </div>
//     );
// }

// export default Header;