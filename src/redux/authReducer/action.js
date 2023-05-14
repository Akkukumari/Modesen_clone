import axios from "axios";
import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes";

export const login = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return dispatch({ type: LOGIN_SUCCESS, payload: "hjhgg" });
//   axios
//     .post("https://reqres.in/api/login", userData)
//     .then((res) => {
//       console.log(res);
     
    // })
    // .catch(() => {
      dispatch({ type: LOGIN_FAILURE });
    // });
};
