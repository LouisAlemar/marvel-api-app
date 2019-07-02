import {Types} from '../actions/character';

const INITIAL_STATE = {
	items: []
}

export default function character(state = INITIAL_STATE, action){
	switch(action.type){
		case Types.GET_CHARACTER_SUCCESS:{
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