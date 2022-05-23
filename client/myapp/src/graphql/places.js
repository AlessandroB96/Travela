import {gql} from "@apollo/client";


const GET_PLACES = gql`
query GetPlaces($lat: Float!, $lng: Float!) {
    places(location: {lat:$lat, lng:$lng}, radius:1500){
      link
      name
      rating
      types
      location {
        lat
        lng
      }
    }
  }

`

export {GET_PLACES}