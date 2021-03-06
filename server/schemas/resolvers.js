const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { getPlaces, searchPlaceName } = require("../utils/api")
const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
          return userData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      places: async (parent, args, context) => {
        const {location, radius, keyword} = args;
        console.log({args})
        const results = await getPlaces({loc: location, radius, keyword})
        return results
      },
      searchPlace: async (parent, args, context) => {
        const {searchTerm} = args;
        const result = await searchPlaceName(searchTerm)
        return result
      },
      savedPlaces: async (parent, args, context) => {
        if(context.user) {
          const userData = await User.findOne({ _id: context.user._id }).select('-__v -password')
          if(!userData) {
            return null
          }
          return userData.savedPlaces;
        }
        throw new AuthenticationError("You need to be logged in! 💩")
      }
    },
  
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user found');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      },

      savePlace: async (parent, { newPlace }, context) => {
        if (context.user) {
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { savedPlaces: newPlace }},
            { new: true }
          );
          return newPlace;
        }
        throw new AuthenticationError('You need to be logged in!');
      },

      removePlace: async (parent, { placeId }, context) => {
        if (context.user) {
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $pull: { savedPlaces: { placeId }}},
            { new: true }
          );
          return placeId;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
  

    },

    
};

module.exports = resolvers;