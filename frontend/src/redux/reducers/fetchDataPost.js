import { FETCH_DATA_FAILURE ,FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS} from "../type/fetchActionTypes";



const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  
  const fetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: null,
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          data: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export  {fetchDataReducer};
  