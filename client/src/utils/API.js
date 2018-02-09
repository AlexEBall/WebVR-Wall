import axios from "axios";
import cors from 'cors';

export default {
  // gets all profiles
  getProfiles: function() {
    return axios.get("https://sheltered-badlands-98413.herokuapp.com/api", cors());
  },
  // gets profile with given id
  getProfile: function(id) {
return axios.get("https://sheltered-badlands-98413.herokuapp.com/api/" + id, cors());
  }
};
