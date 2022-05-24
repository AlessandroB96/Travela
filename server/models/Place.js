const { Schema, model, Types } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const placeSchema = new Schema({
  
  name: {
    type: String,
    required: true,
  },
  // saved place id from GoogleMaps
  placeId: {
    type: String,
    required: true,
  },
//Location, Restaurant, Museum, Nature, Hotel...
  type:
  {
      type: String,
  },

  image: {
    type: String,
  },
  link: {
    type: String,
  },

  rating:
  {
    type: String,

  },


});

module.exports = placeSchema;