import React from 'react';
import { FETCH_SAVED_PLACES, REMOVE_PLACE } from '../graphql/places';
import { useQuery, useMutation } from '@apollo/client';


const Itinerary = () => {

    const {data} = useQuery(FETCH_SAVED_PLACES);

    const [removePlace] = useMutation(REMOVE_PLACE, {
        refetchQueries: ["savedPlaces"]
    })

    const { savedPlaces } = data || {savedPlaces : []}
    console.log({savedPlaces})
    return (
        <div className="itinerary container">
            <div className="places-container">
                <div className="places-text">
                <div className="generated-places">

                <div className="saved-places-title">
                    SAVED PLACES 
                </div>
                {savedPlaces.map((savedPlace) => {
                    return(
                    <div className="card">
                        <div className="places-name">{savedPlace.name}</div>
                        <div className="rating">{savedPlace.rating} <i>Stars</i></div>
                        <div className="button-container">
                        <button onClick={e => {
                            e.preventDefault();
                            removePlace({ variables: {
                                placeId: savedPlace.placeId,
                            }
                            })
                        }} className="star">
                        <span class="material-symbols-outlined" id="trash">
                            delete
                        </span>
                        </button>
                        </div>
                    </div>
                    )
                })}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Itinerary;