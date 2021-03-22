import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row } from "react-bootstrap";



const Footer = (props) => {
    return ( 
        <div className='footer'>
        <Container>
        <Row className="justify-content-md-center">
            <div>
        <h1> { props.footer } </h1> 
        <h5 className='foot'>Copyright 2021 by Ali & Alex & Daniyal All Rights Reserved </h5>
        </div>
        </Row >
        </Container>
        
        </div>
    );
};

export default Footer;