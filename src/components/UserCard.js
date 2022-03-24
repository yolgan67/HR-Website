import React from 'react'
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap'
import {useParams} from "react-router-dom"
import { useSelector } from 'react-redux'

export default function UserCard() {
  let params =useParams()
  const users =useSelector(state=>state.userReducer.users)
  // console.log("PARAMS",params)
  // console.log("USERCARD",users)
  const user = users.filter(data=> data.id === params.id)
  //  console.log(user)
   const { name, email, phone, website, profession,avatar } = user[0]
   
  return (
   
    <Card style={{  marginBottom:"10px" }}> 
    
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Title></Card.Title>
      <Card.Text>
      {profession}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem><span className="">Email:</span> {email}</ListGroupItem>
      <ListGroupItem><span>Phone:</span> {phone}</ListGroupItem>
      <ListGroupItem><span>Website:</span>  {website} </ListGroupItem>
    </ListGroup>
  </Card>
  )
}
