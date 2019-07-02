import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

class SearchForm extends Component{
	render(){
		return(
			<Form>
				<FormGroup>
					<Label>Character Search:</Label>
					<Input required placeholder="Name Of Character"  />
				</FormGroup>
				<FormGroup>
					<Button block outline type="submit" color="primary">
						Search
					</Button>
				</FormGroup>
			</Form>
		)
	}
}

export default SearchForm;