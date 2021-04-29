import {combineReducers} from 'redux';
import headerReducer from './header';
import authReducer from './auth';

export default combineReducers ({
header: headerReducer,
auth: authReducer
});