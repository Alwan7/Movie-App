import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col } from "react-bootstrap";
import Form from './Form';
import MovieList from "./MovieList";



class SearchMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: 'batman',
      movies: [],
      errorMessage: null,
      selectValue: "",
    };
  }

  handleDropdownChange = (e) => {
    this.setState({
      selectValue: e.target.value,
    });
  };

  keywordChanged = (event) => {
    const value = event.target.value;
    this.setState({
      keyword: value,
    });
  };

  updateFilter = (event) => {
    this.setState({
      selectValue: event.target.value,
    });
  };

  componentDidMount() {
    this.searchMovie();
  }

  searchMovie = () =>
    fetch(
      `http://www.omdbapi.com/?s=${this.state.keyword}&apikey=379d4cde&type=${this.state.selectValue}`
    )
      .then((response) => response.json())
      .then(this.renderMovies)
      .catch((err) => console.log("ERROR:", err.message));

  renderMovies = (response) => {
    if (response.Response === "True") {
      this.setState({
        movies: response.Search,
        errorMessage: null
      });
    } else {
      this.setState({
        errorMessage: response.Error,
        movies: [],
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.keyword !== prevState.keyword) {
      this.searchMovie();
    }
    if (this.state.selectValue !== prevState.selectValue) {
      this.searchMovie();
    }
  }

  render() {
    return (
      <Container id="content-wrap">
        <Row className="justify-content-md-center">
        
        <div className="input-group">
          <input
            text={this.state.keyword}
            value={this.state.keyword}
            onChange={this.keywordChanged}
            className="form-control"
            placeholder="Search.."
          />
          <div className="input-group-append"></div>
        </div>
        <Form updateFilterForm={this.updateFilter} keywordChangedForm={this.keywordChanged}/>
       <Container fluid>
        </Container>
        <ul className="list-group">
          <MovieList movies={this.state.movies}/>
          
        {this.state.errorMessage}
        </ul>
        
        </Row>
      </Container>
    );
  }
}
export default SearchMovie;
