import axios from "axios";
export default {
  // gets all profiles
  getProfiles: function() {
    return axios.get("/api/profile");
  },
  // gets profile with given id
  getProfile: function(id) {
    return axios.get("/api/profile/" + id);
  }
};
