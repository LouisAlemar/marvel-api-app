import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchForm from '../SearchForm';
import { getCharacterRequest } from '../../actions/character';

class App extends Component{
	constructor(props){
		super(props);

		console.log(props)
	}

	handleSubmit = ({name}) => {
		this.props.getCharacterRequest({
			name
		})
	}

	render(){
		return(
			<div style={{margin: '0 auto', padding: '20px', maxWidth: '1000px'}}>
				<SearchForm onSubmit={this.handleSubmit} />
			</div>
		)
	}
}


export default connect(({character}) => ({character}),{
	getCharacterRequest
})(App);