import React, {Component} from 'react';
import CharacterModal from '../CharacterModal';

class CharacterItem extends Component{
	constructor(props){
		super(props)

		this.state = {
			modal: false
		}

		this.toggle = this.toggle.bind(this);
	}

	toggle(){
		this.setState(prevState => ({
			modal: !prevState.modal
		}))
	}

	render(){
		return(
			<div className="character-item" onClick={this.toggle}>
				<div className="name-container">
					<h3 className="character-name">{this.props.character.name}</h3>
				</div>
				<div className="image-container">
					<div className="character-pic" style={{backgroundImage: `url(${this.props.character.image.url})`}}></div>
				</div>
				<CharacterModal className="character-modal-component" state={this.state} character={this.props.character} toggle={this.toggle} />
			</div>
		)
	}
}

export default CharacterItem;