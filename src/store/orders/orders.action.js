import {ORDERS_ACTION_TYPES} from './orders.types.js';
import { select } from 'redux-saga/effects';


export const setOrderId = (orderId) => ({type: ORDERS_ACTION_TYPES.SET_ORDER_ID, payload: orderId});


export const setOrders = (ordersArray) => ({type: ORDERS_ACTION_TYPES.SET_ORDERS, payload: ordersArray});

export const fetchOrdersStart = () => ({type: ORDERS_ACTION_TYPES.FETCH_ORDERS_START});

export const fetchOrdersSuccess = (ordersArray) => ({type: ORDERS_ACTION_TYPES.FETCH_ORDERS_SUCCESS, payload: ordersArray});

export const fetchOrdersFailed = (error) => ({type: ORDERS_ACTION_TYPES.FETCH_ORDERS_FAILED, payload: error});





export const emailOrdersSuccess = () => ({type: ORDERS_ACTION_TYPES.EMAIL_ORDERS_SUCCESS, payload: true});

export const emailOrdersFailed = (error) => ({type: ORDERS_ACTION_TYPES.EMAIL_ORDERS_FAILED, payload: error});



export const updateFirestoreStart = () => ({type: ORDERS_ACTION_TYPES.UPDATE_FIRESTORE_START});

export const updateFirestoreSuccess = () => ({type: ORDERS_ACTION_TYPES.UPDATE_FIRESTORE_SUCCESS, payload: true});

export const updateFirestoreFailed = (error) => ({type: ORDERS_ACTION_TYPES.UPDATE_FIRESTORE_FAILED, payload: error});
