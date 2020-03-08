import { GET_USER } from "../config/constants";

const initialState = {
  user: [],
  logedIn: false,
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload,
        logedIn: true,
        loading: false
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
