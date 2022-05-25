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
  type Place {
    placeId: ID!
    name: String
    image: String
    link: String
    types: [String]
    rating: Float
    location: Location!
  }
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savePlace(newPlace: InputPlace!): Place
    removePlace(placeId: String!): String
  }

`

module.exports = typeDefs