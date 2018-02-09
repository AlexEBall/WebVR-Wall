import axios from "axios";

export default {
  // gets all profiles
  getProfiles: function() {
<<<<<<< HEAD
    return axios.get("/api");
  },
  // gets profile with given id
  getProfile: function(id) {
    return axios.get("/api/" + id);
=======
    return axios.get("https://sheltered-badlands-98413.herokuapp.com/api");
  },
  // gets profile with given id
  getProfile: function(id) {
return axios.get("https://sheltered-badlands-98413.herokuapp.com/api/" + id);
>>>>>>> ff9a568a0c02e15cb219cf07dab678f17896fef2
  }
};
