import {gql} from "@apollo/client";


const GET_PLACES = gql`
query GetPlaces($lat: Float!, $lng: Float!) {
    places(location: {lat:$lat, lng:$lng}, radius:1500){
      link
      name
      rating
      types
      placeId
      location {
        lat
        lng
      }
    }
  }

`

const SAVE_PLACE = gql`
mutation savePlace($placeId: String!, $name: String!, $rating: Float) {
  savePlace(newPlace: {
    placeId: $placeId,
    name: $name
    rating: $rating
  }) {
    name
  }
}
`

const FETCH_SAVED_PLACES = gql`
query savedPlaces {
  savedPlaces {
    placeId
    name
    rating
  }
}
`

const REMOVE_PLACE = gql`
mutation removePlace($placeId: String!) {
	removePlace(placeId: $placeId) 
}
`

export {GET_PLACES, SAVE_PLACE, FETCH_SAVED_PLACES, REMOVE_PLACE}