import {Types} from '../actions/characters';

const INITIAL_STATE = {
	items: []
}

export default function characters(state = INITIAL_STATE, action){
	switch(action.type){
		case Types.GET_CHARACTERS_SUCCESS:{
			return {
				...state,
				items: action.payload.items
			}
		}
		default: {
			return state;
		}
	}
}