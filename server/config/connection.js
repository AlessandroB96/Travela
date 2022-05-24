const mongoose = require('mongoose');
require('dotenv').config()

console.log({uri: process.env.MONGODB_URI})
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/travela', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
