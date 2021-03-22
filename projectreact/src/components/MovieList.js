import React, { Component } from "react";
import Movie from "./Movie";
import { Container, Row } from "react-bootstrap";

class MovieList extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center">
            {this.props.movies.map((movie, index) => (
              <li key={index}>
                <Movie movie={movie} />
              </li>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default MovieList;
