import axios from "axios";

const LOGIN_API = "http://localhost:4500/login/";

export function login(user) {
  return axios.post(LOGIN_API, user);
}
