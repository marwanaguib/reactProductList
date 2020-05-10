import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";
const api = axios.create({
  baseURL: baseURL,
  headers: {
    common: {
      Accept: "application/json",
    },
  },
});

//   api.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default api;
