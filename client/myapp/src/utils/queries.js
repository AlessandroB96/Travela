import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
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