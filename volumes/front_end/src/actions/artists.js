export const Types = {
	GET_ARTISTS_REQUEST: 'artists/get_artists_request',
	GET_ARTISTS_SUCCESS: 'artists/get_artists_success'
}

export const getArtistsRequest = () => ({
	type: Types.GET_ARTISTS_REQUEST
})

export const getArtistsSuccess = ({items}) => ({
	type: Types.GET_ARTISTS_SUCCESS,
	payload: {
		items
	}
})