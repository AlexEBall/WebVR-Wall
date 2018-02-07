import axios from "axios";

export default {
  // gets all profiles
  getProfiles: function() {
<<<<<<< HEAD
return axios.get("/api/profile");
=======
    return axios.get("/api/profile");
>>>>>>> bd39083925b4e6ea3b1f4bcac42ace29af24b028
  },
  // gets profile with given id
  getProfile: function(id) {
    return axios.get("/api/profile/" + id);
  }
};
