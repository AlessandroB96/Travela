import {gql} from "@apollo/client";


const GET_SEARCH = gql`
query SearchPlace($searchTerm: String!) {
    searchPlace(searchTerm: $searchTerm) {
      lat
      lng
    }
  }

`

export {GET_SEARCH}