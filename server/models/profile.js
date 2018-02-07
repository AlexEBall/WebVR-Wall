const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const ProfileSchema = new Schema({
    userID: {
        type: String
    },
    fullName: {
        type: String
    },
    briefStory: {
        type: String
    },
    story: {
        type: String
    },
    country: {
        type: String
    },
    backgroundImage: {
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
