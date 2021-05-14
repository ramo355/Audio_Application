import {combineReducers} from 'redux';
import headerReducer from './header';
import authReducer from './auth';
import audioReducer from './audio';

export default combineReducers ({
header: headerReducer,
auth: authReducer,
audio: audioReducer
});