import { all, call } from 'redux-saga/effects';
import {categoriesSaga} from './categories/categories.saga.js'
import {ordersSaga} from './orders/orders.saga.js'

//generator function
export function* rootSaga() {
    yield all([call(categoriesSaga), call(ordersSaga)]);
}