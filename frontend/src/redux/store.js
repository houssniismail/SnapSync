// store.js
import { createStore, combineReducers } from "redux";
import postReducer from "./reducers/postReducer";

// Combine reducers if there are multiple reducers
const rootReducer = combineReducers({
  posts: postReducer,
  // Other reducers can be added here
});

// Create Redux store
const store = createStore(rootReducer);

export default store;
