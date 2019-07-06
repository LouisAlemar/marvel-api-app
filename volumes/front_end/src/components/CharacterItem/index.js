import React, {Component} from 'react';

class CharacterItem extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div>
				<h3>{this.props.character.name}</h3>
			</div>
		)
	}
}

export default CharacterItem;