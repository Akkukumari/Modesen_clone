import axios from "axios";
import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes";

export const login = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axios
    .get(
      // `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users?email=${userData.email}&password=${userData.password}`
      `https://warm-uneven-neighbor.glitch.me/users?email=${userData.email}&password=${userData.password}`
    )
    .then((res) => {
      if (res.data.length > 0) {
        return dispatch({ type: LOGIN_SUCCESS, payload: "hjhgg" });
        
      } else {
        return dispatch({ type: LOGIN_FAILURE });
      }
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: LOGIN_FAILURE });
    });
};

// 1. get users
// 2. you are getting email, password now compare email and password in that array of object.. filter, some
// 3. if you find any object then login is successful otherwise login is failed.
