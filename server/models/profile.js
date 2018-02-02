const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const ProfileSchema = new Schema({
    userID: {
        type: String
    },
    storyInterview: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    socialMedia: {
        type: String
    },
    profileImage: {
        type: String
    },
    VR360Image: {
        type: String
    },
    category: {
      type: String
    },
    date: {
      type: Date, default: Date.now 
    }
});

console.log('profile schema created!');

module.exports = mongoose.model('Profile', ProfileSchema);


/*
Permitted Schema Types: String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array

// we can add these properties to our profile schema

  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },
  user: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  lastUpdated: Date,
  fullName: String
});

*/
