import React from 'react';
import GoogleMapReact from 'google-map-react';


function Map() {

    const coordinates = {lat: 40.7812,lng: -73.9665};
    const API_KEY = process.env.REACT_APP_MAPSAPI_KEY
    
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={12}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map;