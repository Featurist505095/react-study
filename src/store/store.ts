import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducers";
import promise from 'redux-promise-middleware';

export const store = createStore(reducer, undefined, applyMiddleware(promise));