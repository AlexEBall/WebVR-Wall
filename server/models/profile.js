var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
const Profile = new Schema({
    userID: {
        type: Number
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
    image360: {
        type: String
    },
    backgroundImage360: {
        type: String
    },
    category: {
      clicks: String
    },
    date: {
        type: Date
    }
});

console.log('profile schema created!');
console.log("models created", Profile)
module.exports  = mongoose.model('Profile', Profile);

/*
first and last name for server side not client side 
UserName: {
  first: String,
  last: String
}
Permitted Schema Types:
String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array
*/