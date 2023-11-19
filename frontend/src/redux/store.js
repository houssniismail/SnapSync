// store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import { postReducer, fetchDataReducer } from "./reducers";
import thunk from 'redux-thunk';
// Combine reducers if there are multiple reducers
const rootReducer = combineReducers({
  posts: postReducer,
  fetchDataReducer
});

// Create Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
