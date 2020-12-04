import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';

/** The root reducer receives a object containing all the reducers of the application
 ** since the Redux store accepts only one reducer */
const rootReducer = combineReducers({
  characters: charactersReducer,
});

export default rootReducer;
