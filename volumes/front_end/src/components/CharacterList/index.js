import React, {Component} from 'react';
import CharacterItem from '../CharacterItem';

class CharacterList extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="character-list">
				{this.props.characters.map((character, key) => {
					return(
						<CharacterItem key={character.id} character={character} />
					)
				})}
			</div>
		)
	}
}

export default CharacterList;