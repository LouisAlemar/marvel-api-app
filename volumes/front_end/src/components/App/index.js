import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchForm from '../SearchForm';
import CharacterList from '../CharacterList';
import { getCharacterRequest } from '../../actions/character';

class App extends Component{
	constructor(props){
		super(props);
	}

	handleSubmit = ({name}) => {
		this.props.getCharacterRequest({
			name
		})
	}

	render(){
		return(
			<div className="app-container">
				<SearchForm onSubmit={this.handleSubmit} />
				<CharacterList characters={this.props.characters.items} />
			</div>
		)
	}
}


export default connect(({characters}) => ({characters}),{
	getCharacterRequest
})(App);