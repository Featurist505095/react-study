import { applyMiddleware, createStore } from "redux";
import promise from 'redux-promise-middleware';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { reducer } from "./reducers";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['sortBy', 'searchBy']
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, undefined, applyMiddleware(promise));

export const persistor = persistStore(store);

export default store;