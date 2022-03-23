import axios from 'axios'
const api_key="622efd653ff58f023c126354"

export  const fetch_API =()=>{
axios.get(`https://${api_key}.mockapi.io/users`).then(res=>console.log(res.data))
}