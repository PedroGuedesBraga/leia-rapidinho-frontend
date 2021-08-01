import { registerReducer } from './registerReducer';
import { loginReducer } from './loginReducer';
import { resetReducer } from './resetPasswordReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ register: registerReducer, login: loginReducer, reset: resetReducer });

export default rootReducer;