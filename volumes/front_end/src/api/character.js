import axios from 'axios';

export const getCharacter = ({name}) => {
	return axios.get(`/search/${name}`)
}