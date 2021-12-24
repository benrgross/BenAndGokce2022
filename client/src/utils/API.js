import axios from "axios";

// eslint-disable-next-line react/jsx-no-bind
export default {
  getGuest: function (guest) {
    return axios.post("/api/guests", guest);
  },
};
