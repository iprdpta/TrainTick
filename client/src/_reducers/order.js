import {
  ORDER_DETAIL,
  UPLOAD_PROOF,
  ORDER_TICKET,
  ORDERS_INDEX,
  PUT_STATUS
} from "../config/constants";

const initialState = {
  order: [],
  loading: true,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ORDER_DETAIL}_PENDING`:
    case `${UPLOAD_PROOF}_PENDING`:
    case `${ORDER_TICKET}_PENDING`:
    case `${ORDERS_INDEX}_PENDING`:
    case `${PUT_STATUS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${ORDER_DETAIL}_FULFILLED`:
    case `${UPLOAD_PROOF}_FULFILLED`:
    case `${ORDER_TICKET}_FULFILLED`:
    case `${ORDERS_INDEX}_FULFILLED`:
    case `${PUT_STATUS}_FULFILLED`:
      return {
        ...state,
        order: action.payload,
        loading: false
      };
    case `${ORDER_DETAIL}_REJECTED`:
    case `${UPLOAD_PROOF}_REJECTED`:
    case `${ORDER_TICKET}_REJECTED`:
    case `${ORDERS_INDEX}_REJECTED`:
    case `${PUT_STATUS}_REJECTED`:
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
