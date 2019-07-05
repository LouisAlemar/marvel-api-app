import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import '@babel/polyfill/noConflict';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import reducers from './reducers';
import rootSaga from './sagas';

axios.defaults.baseURL = `https://superheroapi.com/api.php/${ACCESS_TOKEN}`;

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

render(<Provider store={store}><App /></Provider>, document.getElementById(APP_MOUNT_ID));