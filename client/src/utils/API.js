import axios from "axios";

// eslint-disable-next-line
export default {
  getGuest: function (guest) {
    return axios.post("/api/guests/", guest);
  },

  updateGuest: function (guest) {
    return axios.put("/api/guests/", guest);
  },

  updateGuestPlus1: function (guest) {
    return axios.put("/api/guests/plus1", guest);
  },

  adminLogin: function (cred) {
    return axios.post("/api/auth/login");
  },

  adminSignUp: function (cred) {
    return axios.post("/api/auth/signup");
  },
};
