import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
    // axios object which is available in browser's memory.
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
    // delete only from axios
  }
};
