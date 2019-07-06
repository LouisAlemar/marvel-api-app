import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

class SearchForm extends Component{
	state = {
		name: ''
	}

	handleSubmit = (e) => {
		e.preventDefault();

		this.props.onSubmit({
			name: this.state.name
		})

		this.setState({
			name: ''
		})
	}

	handleNameChange = (e) => {
		this.setState({
			name: e.target.value
		})
	}

	render(){
		return(
			<Form className="search-form" onSubmit={this.handleSubmit}>
				<FormGroup>
					<Label>Character Search:</Label>
					<Input required placeholder="Name Of Character"  onChange={this.handleNameChange} value={this.state.name} />
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