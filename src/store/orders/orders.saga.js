import { select, takeLatest, all, call, put } from 'redux-saga/effects';
import {getOrdersCollectionDocuments, getOrderDocument, updateCategoriesAndDocumentsQuantity, getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.js';
import {fetchOrdersSuccess, fetchOrdersFailed, emailOrdersSuccess, emailOrdersFailed, emailOrdersStart, updateFirestoreSuccess, updateFirestoreFailed} from './orders.action.js';
import { ORDERS_ACTION_TYPES } from './orders.types.js';
import {selectOrderId, selectOrders} from './orders.selector.js'
import {selectorCategoriesMap} from '../categories/category.selector.js'
import {selectCurrentUser} from '../user/user.selector.js'
import {emailOrderReply} from '../../utils/email/email.utils.js'

export function* fetchOrdersAsync() {
    
    try {
        const id = yield select(selectOrderId);
        const allItems = yield select(selectorCategoriesMap)
        const orderArray = yield call(getOrderDocument, `${id}`);  /* Call() turns a function into an effect. First argument is the function, followed by parameters of that function */
        
        
        yield put(fetchOrdersSuccess(orderArray)); /* Instead of dispatch, use put inside of a generator */
        
        yield call(emailOrdersAsync); //triggers email of order success to customer and us
        const orders = yield orderArray.order.items
        

       yield call(updateFirestoreAsync, orders);

    }
    catch (error){
        put(fetchOrdersFailed(error))
    }
}

export function* onFetchOrders() {
    yield takeLatest(ORDERS_ACTION_TYPES.FETCH_ORDERS_START, fetchOrdersAsync)  /* the rest of the code won't run until all the generators in all() run */
}

// generator function Saga
export function* ordersSaga() {
    yield all([call(onFetchOrders)])  /* the rest of the code won't run until all the generators in all() run */
}





export function* emailOrdersAsync() {
    
    try {
        const order = yield select(selectOrders);
        const user = yield select(selectCurrentUser);
        const userEmail = yield user.email;
        const userName = yield user.displayName;
        const created = yield order.createdAt;
        const cost = yield order.totalCost;

        const info = yield {
            reply_to: userEmail,
            order_date: created,
            order_total: cost,
            user_name: userName,
            

        }
        
        /*The following line works to send emails, but it uses up email allocation.  Only activate it when we want to send emails.*/
        yield call(emailOrderReply, info);  /* Call() turns a function into an effect. First argument is the function, followed by parameters of that function */
        
        
        yield put(emailOrdersSuccess());
    }
    catch (error){
        yield console.log("error sending email")
        yield put(emailOrdersFailed(error));
    }
}




export function* updateFirestoreAsync(orders) {
   
    try {   
    const allItems = yield call(getCategoriesAndDocuments);    
    yield call(updateCategoriesAndDocumentsQuantity, orders, allItems); 
    
    yield put(updateFirestoreSuccess());
}
catch (error){
    console.log("error updating Firestore")
    yield put(updateFirestoreFailed(error));
}

}

