import { TICKET_LIST, MYTICKET_LIST } from "../config/constants";

const initialState = {
  ticket: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${TICKET_LIST}_PENDING`:
    case `${MYTICKET_LIST}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${TICKET_LIST}_FULFILLED`:
    case `${MYTICKET_LIST}_FULFILLED`:
      return {
        ...state,
        ticket: action.payload,
        loading: false
      };
    case `${TICKET_LIST}_REJECTED`:
    case `${MYTICKET_LIST}_REJECTED`:
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
