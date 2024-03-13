import axios from "axios";
import queryString from "query-string";

const baseApi = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: "300",
  headers: {
    "Content-Type": "application/json",
  },
  params: (params) => queryString.stringify(params),
});

baseApi.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

baseApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default baseApi;
