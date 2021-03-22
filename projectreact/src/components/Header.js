import React from 'react';
import {Container, Row, Jumbotron } from "react-bootstrap";


const Header = (props) => {
	return (
		<Container >
		<Row className="justify-content-md-center">
			<h1 className="header">{props.header}</h1>
			</Row>
			</Container>
	);
};

export default Header;