import { ORDER_DETAIL, UPLOAD_PROOF, ORDER_TICKET } from "../config/constants";

const initialState = {
  order: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ORDER_DETAIL}_PENDING`:
    case `${UPLOAD_PROOF}_PENDING`:
    case `${ORDER_TICKET}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${ORDER_DETAIL}_FULFILLED`:
    case `${UPLOAD_PROOF}_FULFILLED`:
    case `${ORDER_TICKET}_FULFILLED`:
      return {
        ...state,
        order: action.payload,
        loading: false
      };
    case `${ORDER_DETAIL}_REJECTED`:
    case `${UPLOAD_PROOF}_REJECTED`:
    case `${ORDER_TICKET}_REJECTED`:
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
