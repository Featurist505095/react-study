import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { reducer } from "./reducers";
import { watchLoadData, watchLoadDataByGenre, watchLoadDataById } from "./sagas";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['sortBy', 'searchBy']
}

const persistedReducer = persistReducer(persistConfig, reducer);
const sagaMiddleware = createSagaMiddleware();
//  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const store = createStore(persistedReducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(watchLoadData);
sagaMiddleware.run(watchLoadDataById);
sagaMiddleware.run(watchLoadDataByGenre);
export const persistor = persistStore(store);

export default store;