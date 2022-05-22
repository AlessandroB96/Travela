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

  type Query {
    me: User
  }

  input InputPlace {
    placeId: String
    name: String
    image: String
    link: String
    type: String
    rating: Number
  }

  type Place {
    placeId: ID!
    name: String
    image: String
    link: String
    Type: String
    rating: Number
  }


type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savePlace(newBook: InputPlace!): User
    removePlace(placeId: ID!): User

  }

`;



module.exports = typeDefs;