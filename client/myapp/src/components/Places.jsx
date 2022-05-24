import React, {useState} from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Map from './Map';
import Itinerary from './Itinerary';
import {GET_PLACES, SAVE_PLACE} from "../graphql/places"
import Auth from '../utils/auth';

const Places = ({lats, toggleItinerary}) => {
    const loggedIn = Auth.loggedIn();
    const [type, setType] = useState('hotels');
    const [rating, setRating] = useState('all');
    const {data, loading } = useQuery(GET_PLACES, {
        variables : {
            lat: lats.lat,
            lng: lats.lng
        }
    });


    const [savePlace] = useMutation(SAVE_PLACE, {
        refetchQueries: ["savedPlaces"]
    })
    console.log({data, loading})
    const {places } = data || { places: []}

    return (
        <div className="entire-places">
            <div className="places-container">
                <div className="places-text">
            
                    <div className="generated-places">
                        {/* if there is no places, do not map array of values */}
                    {loading && <b className="loading">Loading...</b>}
                    {places.map((p) => (
                    <div className="card">
                        <div className="places-name"><a href="https://www.google.com" className="placeurl">{p.name}</a></div>
                        <div className="rating">{p.rating && <i>{p.rating} Stars</i>}</div>
                        <div className="button-container">
                        <button onClick={e => {
                            e.preventDefault();
                            savePlace({ variables: {
                                placeId: p.placeId,
                                name: p.name,
                                rating: p.rating
                            }
                            })
                        }} className="star">
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
        {loggedIn && <Itinerary />}
                        
        </div>
    );
}

export default Places;