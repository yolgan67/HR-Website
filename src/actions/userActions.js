import axios from "axios";

const api_key = "622efd653ff58f023c126354";
export const FETCH_USERS = "FETCH_USERS";
export const USER_DETAIL = "USER_DETAIL";

export function fetchUser() {
  return (dispatch) => {
    dispatch({
      type: FETCH_USERS,
      payload: axios
        .get(`https://${api_key}.mockapi.io/users`)
        .then((res) => res.data),
    });
  };
}

export const getUserDetail = (userDetail) => {
  return (dispatch) => {
    dispatch({
      type: "USER_DETAIL",
      payload: userDetail,
    });
  };
};
