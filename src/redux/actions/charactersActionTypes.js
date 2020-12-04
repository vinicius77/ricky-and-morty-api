import { FETCHING_DATA, FETCHING_FAILED, FETCHING_SUCCESS } from './index';

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
