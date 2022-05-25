import React from 'react';
import GoogleMapReact from 'google-map-react';


function Map({lats}) {
    console.log({lats})

    const coord = lats ? lats : {lat: 40.7812,lng: -73.9665}
    const coordinates = coord;

    console.log({coordinates})
    console.log('api key', process.env)
    const API_KEY = process.env.PLACE_API

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: API_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={12}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map;