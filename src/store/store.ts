import { applyMiddleware, createStore } from "redux";
import promise from 'redux-promise-middleware';
import { reducer } from "./reducers";

const store = createStore(reducer, undefined, applyMiddleware(promise));

export default store;