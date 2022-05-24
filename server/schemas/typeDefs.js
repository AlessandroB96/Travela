const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
  }
type Auth {
    token: ID!
    user: User
  }



  # Latitutdes and longituteds are floating point values
  type Location {
    lat: Float!
    lng: Float!
  }

<<<<<<< HEAD
  input InputPlace {
    placeId: String
    name: String
    image: String
    link: String
    type: String
    rating: Number
  }

=======
  input LocationInput {
    lat: Float!
    lng: Float!
  }
  type Query {
    me: User
    places(location: LocationInput!, radius: Int!, keyword: String): [Place]!
    searchPlace(searchTerm: String!): Location!
    savedPlaces: [Place]!
  }
  input InputPlace {
    placeId: String!
    name: String!
    image: String
    link: String
    type: String
    rating: Float
  }
>>>>>>> 480efce4bfda4922fbbebe7bf39b1816bc8856d9
  type Place {
    placeId: ID!
    name: String
    image: String
    link: String
<<<<<<< HEAD
    Type: String
    rating: Number
  }


type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savePlace(newBook: InputPlace!): User
    removePlace(placeId: ID!): User

=======
    types: [String]
    rating: Float
    location: Location!
  }
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savePlace(newPlace: InputPlace!): Place
    removePlace(placeId: String!): String
>>>>>>> 480efce4bfda4922fbbebe7bf39b1816bc8856d9
  }

`;



module.exports = typeDefs;