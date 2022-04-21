import axios from "axios";

//const api_key = "622efd653ff58f023c126354";
//const API =`https://${api_key}.mockapi.io/users`
const API ="https://hr-website.herokuapp.com/candidates"


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

export function postUser(name,profession,email,phone,website,adress,data,avatar) {
  return (dispatch) => {
    dispatch({type: "NEW_USER",payload: axios.post(`${API}`,{name,profession,email,phone,website,adress,data,avatar})
    .then((res) => res.data)})
  }
}

