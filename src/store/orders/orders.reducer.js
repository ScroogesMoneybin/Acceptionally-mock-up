import {ORDERS_ACTION_TYPES} from './orders.types.js';

export const ORDERS_INITIAL_STATE = {
    orders: {},
    orderId: '',
    emailStatus: false,
    isEmailing: false,
    isLoading: false,
    updatedDbStatus: false,
    isUpdating: false,
    error: null
}

export const ordersReducer = (state = ORDERS_INITIAL_STATE, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case ORDERS_ACTION_TYPES.SET_ORDER_ID:
            return {...state, orderId: payload};
        case ORDERS_ACTION_TYPES.SET_ORDERS:
            return {...state, orders: payload};
        case ORDERS_ACTION_TYPES.FETCH_ORDERS_START:
            return {...state, isLoading: true};
        case ORDERS_ACTION_TYPES.FETCH_ORDERS_SUCCESS:
            return {...state, orders: payload, isLoading: false};
        case ORDERS_ACTION_TYPES.FETCH_ORDERS_FAILED:
            return {...state, error: payload, isLoading: false};
        
        case ORDERS_ACTION_TYPES.EMAIL_ORDERS_SUCCESS:
            return {...state, emailStatus: true, isEmailing: false};
        case ORDERS_ACTION_TYPES.EMAIL_ORDERS_FAILED:
            return {...state, emailStatus: false, error: payload, isEmailing: false};


        case ORDERS_ACTION_TYPES.UPDATE_FIRESTORE_START:
            return {...state, isUpdating: true};
        case ORDERS_ACTION_TYPES.UPDATE_FIRESTORE_SUCCESS:
            return {...state, updatedDbStatus: true, isUpdating: false};
        case ORDERS_ACTION_TYPES.UPDATE_FIRESTORE_FAILED:
            return {...state, updatedDbStatus: false, error: payload, isUpdating: false};
        default:
            return state;
    }

};