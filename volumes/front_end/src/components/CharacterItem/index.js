import React, {Component} from 'react';

class CharacterItem extends Component{
	constructor(props){
		super(props)
	}

	render(){
		console.log(this.props.character)
		return(
			<div className="character-item">
				<div className="name-container">
					<h3 className="character-name">{this.props.character.name}</h3>
				</div>
				<div className="image-container">
					<div className="character-pic" style={{backgroundImage: `url(${this.props.character.image.url})`}}></div>
				</div>
			</div>
		)
	}
}

export default CharacterItem;