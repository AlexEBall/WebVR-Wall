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
    profileImage: {
        type: String
    },
    backgroundImage: {
        type: String
    },
    VR360Image: {
        type: String
    },
    VR360Materials: {
        type: String
    },
    VR360Obj: {
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
