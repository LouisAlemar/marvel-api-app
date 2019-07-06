import {takeEvery, call, fork, put} from 'redux-saga/effects';
import * as actions from '../actions/character';
import * as api from '../api/character';

function* getCharacter(action){
	try{
		const result = yield call(api.getCharacter, {
			name: action.payload.name
		})
		yield put(actions.getCharacterSuccess({
			items: result.data.results
		}))
	}catch(e){

	}
}

function* watchGetCharacterSuccess(){
	yield takeEvery(actions.Types.GET_CHARACTER_REQUEST, getCharacter);
}

const characterSagas = [
	fork(watchGetCharacterSuccess)
]

export default characterSagas;