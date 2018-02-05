import axios from "axios";

export default {
  // gets all profiles
  getProfiles: function() {
return axios.get("https://protected-ridge-22829.herokuapp.com/api/profile");
  },
  // gets profile with given id
  getProfile: function(id) {
    return axios.get("/api/profile/" + id);
  }
};
