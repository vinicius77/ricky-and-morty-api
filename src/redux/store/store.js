import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * The store receives as its arguments the root reducers,
 * which is the combinations of all the reducers of the appliaction.
 * The devToolsEnhancer allows us to use the Redux Devtools in the browser.
 *
 * Note that if you want to add any middleware to the project, for sake of example a logger,
 * you should combinate composeWithDevTools, applyMiddleware and your middleware(s):
 *
 * const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)));
 *
 * otherwise you can create the store just as:
 * const store = createStore(rootReducer, devToolsEnhancer());
 *
 *  THUNK => Redux thunk allows to write action creators that return a function instead of an action,
 *  for example, asyncronous functions*/
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
