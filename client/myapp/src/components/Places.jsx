import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import Map from './Map';
import Card from './Card';
import {GET_PLACES} from "../graphql/places"
const Places = ({lats}) => {

    const [type, setType] = useState('hotels');
    const [rating, setRating] = useState('all');
    const {data, loading } = useQuery(GET_PLACES, {
        variables : {
            lat: lats.lat,
            lng: lats.lng
        }
    });

    console.log({data, loading})
    const {places } = data || { places: []}

    return (
        <div className="entire-places">
            <div className="places-container">
                <div className="places-text">
            
                    {/* <input type="text" name="search" id="search" className="searchbox" placeholder="search for a city..." /> */}
                    
                    <br />

                    {/* <div className="type-container">
                    <label className="type-title" htmlFor="types">Type: </label>
                        <select name="all-types" id="type" value={type} onChange={(event) => setType(event.target.value)}>
                            <option value="hotels">Hotels</option>
                            <option value="restaurants">Restaurants</option>
                            <option value="attractions">Attractions</option>
                        </select>
                    </div>

                    <br /> */}
                    {/* <div className="rating-container">
                    <label className="rating-title" htmlFor="rating">Rating: </label>
                        <select name="ratings" id="ratings" value={rating} onChange={(event) => setRating(event.target.value)}>
                            <option value="all">All</option>
                            <option value="plus3">+3.0</option>
                            <option value="plus4">+4.0</option>
                            <option value="plus4.5">+4.5</option>
                        </select>
                    </div> */}

                    <div className="generated-places">
                        {/* if there is no places, do not map array of values */}
                    {loading && <b className="loading">Loading...</b>}
                    {places.map((p) => (
                    <div className="card">
                        <div className="places-name"><a href="https://www.google.com" className="placeurl">{p.name}</a></div>
                        <div className="rating">{p.rating && <i>{p.rating} Stars</i>}</div>
                        <div className="button-container">
                        <button className="star">
                        <span class="material-symbols-outlined">
                            grade
                        </span>
                        </button>
                        </div>
                    </div>
                    )
                    )}
                    </div>

         
                </div>
            </div>
            <div className="map-container">
                <Map lats={lats}/>
            </div>
                        
        </div>
    );
}

export default Places;