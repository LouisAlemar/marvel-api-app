import axios from 'axios';

export const getCharacter = (name) => {
	return axios.get('/search/', {
		params: {
			name: name
		}
	})
}