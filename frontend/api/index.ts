import axios from "axios";

axios.defaults.baseURL = "http://localhost:4400";

axios.defaults.withCredentials = true;

/**
 * Auth
 */

export const signup = (payload) => {
  return axios
    .post("/auth/signup", payload)
    .then((response) => [undefined, response])
    .catch((error) => [error, undefined]);
};

export const signin = (payload) => {
  return axios
    .post("/auth/signin", payload)
    .then((response) => [undefined, response])
    .catch((error) => [error, undefined]);
};

export const signout = () => {
  return axios
    .post("/auth/logout")
    .then((response) => [undefined, response])
    .catch((error) => [error, undefined]);
};

export const getUser = () => {
  return axios
    .get("/auth/user")
    .then((response) => [undefined, response])
    .catch((error) => [error, undefined]);
};
