import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';

const rootReducer = combineReducers({
  characters: charactersReducer,
});

export default rootReducer;
