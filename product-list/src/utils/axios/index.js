import axios from "axios";

var api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    common: {
      Accept: "application/json",
    },
  },
});

//   api.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default api;
