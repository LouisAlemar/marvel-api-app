import React, {Component} from 'react';

class CharacterItem extends Component{
	constructor(props){
		super(props)
	}

	render(){
		console.log(this.props.character)
		return(
			<div className="character-item">
				<h3>{this.props.character.name}</h3>
				<img src={this.props.character.image.url} alt="" style={{width: '20%'}} />
			</div>
		)
	}
}

export default CharacterItem;