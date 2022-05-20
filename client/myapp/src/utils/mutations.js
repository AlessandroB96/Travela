import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_PLACE = gql`
    mutation savePlace($place: SavePlaceInput!) {
        savePlace(place: $place){
            username
            email
            placeCount
            savedPlaces {
                placeId
                description
                title
                image
            }
        }
    }
`;

export const REMOVE_PLACE = gql`
    mutation removePlace($place: String!) {
        removePlace(placeId: $placeId){
            username
            email
            placeCount
            savedPlace{
                placeId
                description
                title
                image
            }
        }
    }
`;