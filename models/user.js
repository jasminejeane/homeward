var mongoose = require('mongoose');

var User = mongoose.model('User', {
  fb: {
    id: String,
    access_token: String,
    firstName: String,
    lastName: String,
    email: String
  },
  lostDogs: [],
  foundDogs: []
});


module.exports = User;
