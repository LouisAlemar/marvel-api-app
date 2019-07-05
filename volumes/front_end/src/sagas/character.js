import {takeEvery, call, fork, put} from 'redux-saga/effects';
import * as actions from '../actions/character';
import * as api from '../api/character';

function* getCharacter(action){
	try{
		console.log('saga', action)
		const result = yield call(api.getCharacter, {
			name: action.payload.name
		})
		console.log(result.data.results)
		yield put(actions.getCharacterSuccess({
			items: result
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