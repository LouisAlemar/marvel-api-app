import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchForm from '../SearchForm';
import { getCharacterRequest } from '../../actions/character';

class App extends Component{
	render(){
		return(
			<div style={{margin: '0 auto', padding: '20px', maxWidth: '1000px'}}>
				<SearchForm />
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {character: state.character}
}

export default connect(mapStateToProps)(App);