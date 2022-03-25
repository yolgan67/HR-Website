import axios from "axios";

const api_key = "622efd653ff58f023c126354";
const API =`https://${api_key}.mockapi.io/users`


export function fetchUser() {
  return (dispatch) => {
    dispatch({
      type: "FETCH_USERS",
      payload: axios
        .get(`${API}`)
        .then((res) => res.data),
    });
  };
}


