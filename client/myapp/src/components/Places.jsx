import React, {useState} from 'react';
// import { Autocomplete } from '@react-google-maps/api';
import Map from './Map';
import Card from './Card';
import { useSearch } from '../api';
const Places = ({lats}) => {

    const [type, setType] = useState('hotels');
    const [rating, setRating] = useState('all');
    console.log({lats})

    // const places = [
    //     {name: 'place1'},
    //     {name: 'place2'},
    //     {name: 'place3'},
    //     {name: 'place4'},
    //     {name: 'place5'},
    //     {name: 'place6'},
    //     {name: 'place7'},
    //     {name: 'place8'},
    //     {name: 'place9'},
    //     {name: 'place10'},

    // ]

    return (
        <div className="entire-places">
            <div className="places-container">
                <div className="places-text">
                    <p className="place-header">Search for Hotels, Restuarants, and Attractions:</p>
                    <br />
                    {/* <input type="text" name="search" id="search" className="searchbox" placeholder="search for a city..." /> */}
                    
                    <br />

                    <div className="type-container">
                    <label className="type-title" htmlFor="types">Type: </label>
                        <select name="all-types" id="type" value={type} onChange={(event) => setType(event.target.value)}>
                            <option value="hotels">Hotels</option>
                            <option value="restaurants">Restaurants</option>
                            <option value="attractions">Attractions</option>
                        </select>
                    </div>

                    <br />
                    <div className="rating-container">
                    <label className="rating-title" htmlFor="rating">Rating: </label>
                        <select name="ratings" id="ratings" value={rating} onChange={(event) => setRating(event.target.value)}>
                            <option value="all">All</option>
                            <option value="plus3">+3.0</option>
                            <option value="plus4">+4.0</option>
                            <option value="plus4.5">+4.5</option>
                        </select>
                    </div>

                    <div className="generated-places">
                        {/* if there is no places, do not map array of values */}
                    {!lats && <b>loading...</b>}
                    {
                        lats && lats.map(info => <div>{info?.geocode?.latitude},{info?.geocode?.longitude}</div>)
                    }

                    </div>

                    {/* <p className="recommended">RECOMMENDED SPOTS</p>
                    <ul>
                        <li>Spot 1</li>
                        <li>Spot 2</li>
                        <li>Spot 3</li>
                        <li>Spot 4</li>
                        <li>Spot 5</li>   
                    </ul> */}
                </div>
            </div>
            <div className="map-container">
                <Map lats={lats}/>
            </div>
                        
        </div>
    );
}

export default Places;