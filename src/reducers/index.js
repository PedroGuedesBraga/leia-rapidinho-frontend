import { registerReducer } from './registerReducer';
import { loginReducer } from './loginReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ register: registerReducer, login: loginReducer })

export default rootReducer;