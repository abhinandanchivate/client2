import { v4 as uuid } from "uuid";
import { REMOVE_ALERT, SET_ALERT } from "../types";
export const setAlert =
  (msg, alertType, timeout = 5000) =>
  (dispatch) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id },
    });

    // i want to remove the alerts after 5 sec / customized value
    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
        payload: id,
      });
    }, timeout);
  };
