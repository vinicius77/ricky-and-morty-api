const FETCHING_DATA = 'FETCHING_DATA';
const FETCHING_FAILED = 'FETCHING_FAILED';
const FETCHING_SUCCESS = 'FETCHING_SUCCESS';

export default fetchingData = () => {
  return {
    type: FETCHING_DATA,
  };
};

export default fetchingFailed = (error) => {
  return {
    type: FETCHING_FAILED,
    payload: error,
  };
};

export default fetchingSuccess = (characters) => {
  return {
    type: FETCHING_SUCCESS,
    payload: characters,
  };
};
