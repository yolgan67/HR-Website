import React from 'react'
import {Table} from "react-bootstrap";
export default function UserList(props) {
const userList = props.users.error.response ? (<h3>There is a Problem</h3>):(props.users.users.map(user=>{return <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Full Name</th>
      <th>Profession</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.profession}</td>
      
    </tr>
  
    
  </tbody>
</Table> }))

  return (
    <div>
{/* {userList}  */}
    </div>
  )
}
