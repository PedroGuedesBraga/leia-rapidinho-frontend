import { resetReducer } from './resetPasswordReducer';
import { gameReducer } from './gameReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ reset: resetReducer, game: gameReducer });

export default rootReducer;