export const Types = {
	GET_CHARACTERS_REQUEST: 'characters/get_characters_request',
	GET_CHARACTERS_SUCCESS: 'characters/get_characters_success'
}

export const getCharactersRequest = () => ({
	type: Types.GET_CHARACTERS_REQUEST
})

export const getCharactersSuccess = ({items}) => ({
	type: Types.GET_CHARACTERS_SUCCESS,
	payload: {
		items
	}
})