import {
  ADD_TICKET,
  TICKET_LIST,
  MYTICKET_LIST,
  DETAIL_TICKET
} from "../config/constants";

const initialState = {
  ticket: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${TICKET_LIST}_PENDING`:
    case `${MYTICKET_LIST}_PENDING`:
    case `${DETAIL_TICKET}_PENDING`:
    case `${ADD_TICKET}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${TICKET_LIST}_FULFILLED`:
    case `${MYTICKET_LIST}_FULFILLED`:
    case `${DETAIL_TICKET}_FULFILLED`:
    case `${ADD_TICKET}_FULFILLED`:
      return {
        ...state,
        ticket: action.payload,
        waiting: true,
        loading: false
      };
    case `${TICKET_LIST}_REJECTED`:
    case `${MYTICKET_LIST}_REJECTED`:
    case `${DETAIL_TICKET}_REJECTED`:
    case `${ADD_TICKET}_REJECTED`:
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
