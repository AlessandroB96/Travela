import React from 'react';
import GoogleMapReact from 'google-map-react';



function Map({lats, onChangeBounds}) {
    console.log({lats})
    const firstCoord = lats?.[0]?.geocode;
    console.log(firstCoord)
    const coord = firstCoord ? {lat: firstCoord.latitude, lng: firstCoord.longitude} : {lat: 40.7812,lng: -73.9665}
    const coordinates = coord;

    console.log({coordinates})
    const API_KEY = process.env.REACT_APP_MAPSAPI_KEY

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: API_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={12}
                onChange={(event) => {
                    console.log('event', event);
                    onChangeBounds(event.bounds)
                }}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map;