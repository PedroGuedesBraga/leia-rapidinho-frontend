import { resetReducer } from './resetPasswordReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ reset: resetReducer });

export default rootReducer;