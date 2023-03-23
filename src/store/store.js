import {compose, createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import {rootReducer} from './root-reducer.js';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './root-saga.js';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
    // blacklist: ['user'] /*We don't want user to persist since it gets its value from AuthListener*/
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [process.env.NODE_ENV === 'development' && logger, sagaMiddleware].filter(Boolean); /*catch actions before hitting reducers*/


const composedEnhancers = compose(applyMiddleware(...middleWares)); /* needed to pass middleWares into createStore*/

//export const store = createStore(rootReducer, undefined, composedEnhancers) /* Without Persist*/
export const store = createStore(persistedReducer, undefined, composedEnhancers)  /* With Persist.  optional second parameter is additional default states*/

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
