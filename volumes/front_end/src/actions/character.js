export const Types = {
	GET_CHARACTER_REQUEST: 'character/get_character_request',
	GET_CHARACTER_SUCCESS: 'character/get_character_success'
}

export const getCharacterRequest = ({name}) => ({
	type: Types.GET_CHARACTER_REQUEST,
	payload: {
		name
	}
})

export const getCharacterSuccess = ({items}) => ({
	type: Types.GET_CHARACTER_SUCCESS,
	payload: {
		items
	}
})