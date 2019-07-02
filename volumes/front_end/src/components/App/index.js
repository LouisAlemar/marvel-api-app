import React, { Component } from 'react';

import SearchForm from '../SearchForm';

class App extends Component{
	render(){
		return(
			<div style={{margin: '0 auto', padding: '20px', maxWidth: '1000px'}}>
				<SearchForm />
			</div>
		)
	}
}

export default App;