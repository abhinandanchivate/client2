import axios from "axios";
import { setAuthToken } from "../../utils/setAuthToken";
import {
  CLEAR_PROFILE,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "../types";
import { setAlert } from "./alertAction";

// action can't access the content from store directly whatever the data
// it will get it from the component it will use it.

export const loadUser = () => async (dispatch) => {
  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.token);
  }
  // to retrieve the current user details /api/auth
  try {
    const res = await axios.get("/api/auth");
    console.log(JSON.stringify(res.data));
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {}
};

export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password });
    try {
      // rest call
      const res = await axios.post("/api/users", body, config);
      // success response
      // response will bring token
      // this response do we need to share it with reducer then it will be stored inside the redux store.
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
      // this one will retrieve the user details & will hold it into the store.
      dispatch(setAlert("user created successfully", "success"));
    } catch (err) {
      console.log(JSON.stringify(err.response.data.errors));
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => {
          dispatch(setAlert(error.msg, "danger"));
        });
      }
    }
  };

// login action

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  // clear ur profile
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
  // logout
};
