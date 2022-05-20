import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';
import Map from './Map';

const Places = () => {
    return (

        <div className="entire-places">
            <div className="places-container">
                <div className="places-text">
                    <p className="place-header">PLACES</p>
                    <br />
                    <input type="text" name="search" id="search" className="searchbox" placeholder="search for a city..." />

                    <p className="recommended">RECOMMENDED SPOTS</p>
                    {/* <ul>
                        <li>Spot 1</li>
                        <li>Spot 2</li>
                        <li>Spot 3</li>
                        <li>Spot 4</li>
                        <li>Spot 5</li>   
                    </ul> */}
                </div>
            </div>
            <div className="map-container">
                <Map />
            </div>
                        
        </div>
    );
}

export default Places;