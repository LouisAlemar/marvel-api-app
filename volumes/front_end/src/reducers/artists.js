import {Types} from '../actions/artists';

const INITIAL_STATE = {
	items: [],
	error: ''
}

export default function artists(state = INITIAL_STATE, action){
	switch(action.type){
		case Types.GET_ARTISTS_SUCCESS:{
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