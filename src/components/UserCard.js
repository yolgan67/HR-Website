import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserCard() {
  let params = useParams();
  const users = useSelector((state) => state.userReducer.users);
  // console.log("PARAMS",params)
  // console.log("USERCARD",users)
  const user = users.filter((data) => data.id === params.id);
  //  console.log(user)
  const { name, email, phone, website, profession ,adress} = user[0];

  return (
    <Card style={{ marginBottom: "10px" }}>
      <Card.Body>
        <Card.Title className="fs-1 fw-bold">{name}</Card.Title>
        <Card.Text className="text-muted fs-3">{profession}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <span className="badge bg-primary text-wrap ">Email:</span> {email}
        </ListGroupItem>
        <ListGroupItem>
          <span className="badge bg-primary text-wrap">Phone:</span> {phone}
        </ListGroupItem>
        <ListGroupItem>
          <span className="badge bg-primary text-wrap">Website:</span> <a href={website}>{website}</a>
        </ListGroupItem>
        <ListGroupItem>
          <span className="badge bg-primary text-wrap">City:</span> {adress}
        </ListGroupItem>
        <ListGroupItem>
          <span className="badge bg-primary text-wrap">CV:</span><span className="cv"> {name}CV.pdf</span>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}
