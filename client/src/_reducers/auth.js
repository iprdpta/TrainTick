import { USER_LOGIN, REGISTER_USER } from "../config/constants";

const initialState = {
  auth: [],
  logedIn: false,
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${USER_LOGIN}_PENDING`:
    case `${REGISTER_USER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${USER_LOGIN}_FULFILLED`:
    case `${REGISTER_USER}_FULFILLED`:
      return {
        ...state,
        auth: action.payload,
        logedIn: true,
        loading: false
      };
    case `${USER_LOGIN}_REJECTED`:
    case `${REGISTER_USER}_REJECTED`:
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
