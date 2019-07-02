import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers);

console.log(store.getState())

render(<App />, document.getElementById(APP_MOUNT_ID));