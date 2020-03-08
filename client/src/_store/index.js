import { createStore, combineReducers, applyMiddleware } from "redux";

import auth from "../_reducers/auth";
import ticket from "../_reducers/ticket";
import user from "../_reducers/user";
import order from "../_reducers/order";
import { logger, promise } from "../middleware";

// Global state
const rootReducers = combineReducers({
  auth,
  ticket,
  user,
  order
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
