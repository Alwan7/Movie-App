import React, { Component } from 'react';
import {Form} from "react-bootstrap";


class Formm extends Component {
constructor(props) {
    super(props)

    this.state = {
            keyword: 'batman'
    }
}

    updateFilterForm = () => {
        this.props.updateFilterForm()
    }
    
    render(){
    return(
            <div>
<Form>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>Select Type</Form.Label>
    <Form.Control as="select" custom value={this.props.selectValue} onChange={this.props.updateFilterForm}>
          <option value="">all</option>
          <option value="game">game</option>
          <option value="series">series</option>
          <option value="movie">movie</option>
    </Form.Control>
  </Form.Group>
</Form>
        
        
</div>
    )
        }}
        export default Formm;