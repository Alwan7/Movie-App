import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Movie = ({ movie }) => {
  return (
    <div>
      <Col>
        <Card style={{ width: "15rem", height: "32rem", margin: "5px" }}>
          <Card.Img
            style={{ height: "23rem" }}
            variant="top"
            src={movie.Poster}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "medium" }} className="card-text">
              {movie.Title}
            </Card.Title>
            <Card.Text className="card-text">{movie.Year}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{movie.Type}</ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </div>
  );
};

export default Movie;
