import { FETCHING_DATA, FETCHING_FAILED, FETCHING_SUCCESS } from '../actions';

/** This is the initial (characters) state of the appliaction */
const initialState = {
  loading: false,
  data: [],
  error: '',
};

/** Reducer functions change the state of the appliaction using dispatched action types */
const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return { loading: true, data: [], error: '' };
    case FETCHING_FAILED:
      return { loading: false, data: [], error: action.payload };
    case FETCHING_SUCCESS:
      return { loading: false, data: action.payload, error: '' };
    default:
      return state;
  }
};

export default charactersReducer;
