import React from 'react'
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function UserCard({userDetail}) {
  console.log("AZSASDEFRRTT",userDetail)
  return (
   
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={userDetail.avatar} />
    <Card.Body>
      <Card.Title>{userDetail.name}</Card.Title>
      <Card.Title></Card.Title>
      <Card.Text>
      {userDetail.profession}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>Email: {userDetail.email}</ListGroupItem>
      <ListGroupItem>Phone: {userDetail.phone}</ListGroupItem>
      <ListGroupItem>Website:  {userDetail.website} </ListGroupItem>
    </ListGroup>
  </Card>
  )
}
