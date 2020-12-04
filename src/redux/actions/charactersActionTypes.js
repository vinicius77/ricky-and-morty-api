import { FETCHING_DATA, FETCHING_FAILED, FETCHING_SUCCESS } from './index';

/** Those are the actions types that will be dispatched to the reducer
 ** using the dispatch function placed on CharactersContainer component */
export const fetchingData = () => {
  return {
    type: FETCHING_DATA,
  };
};

export const fetchingFailed = (error) => {
  return {
    type: FETCHING_FAILED,
    payload: error,
  };
};

export const fetchingSuccess = (characters) => {
  return {
    type: FETCHING_SUCCESS,
    payload: characters,
  };
};
