import axios from 'axios'

const api_key="622efd653ff58f023c126354"


export function fetchUser() {
  return (dispatch)=>{
    dispatch({
      type:"FETCH_USERS",
      payload:axios.get
      (`https://${api_key}.mockapi.io/users`).then(res=>res.data)
    })
  }
}