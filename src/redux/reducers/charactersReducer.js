const initialState = {
  loading: false,
  data: [],
  error: '',
};

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
