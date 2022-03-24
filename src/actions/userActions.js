import axios from "axios";

const api_key = "622efd653ff58f023c126354";
const API =`https://${api_key}.mockapi.io/users`
export const FETCH_USERS = "FETCH_USERS";
export const USER_DETAIL = "USER_DETAIL";

export function fetchUser() {
  return (dispatch) => {
    dispatch({
      type: FETCH_USERS,
      payload: axios
        .get(`${API}`)
        .then((res) => res.data),
    });
  };
}


