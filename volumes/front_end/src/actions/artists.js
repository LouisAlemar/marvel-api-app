export const Types = {
	GET_ARTISTS_REQUEST: 'artists/get_artists_request'
}

export const getArtistsRequest = (artistId) => ({
	type: Types.GET_ARTISTS_REQUEST,
	payload: {
		artistId
	}
})