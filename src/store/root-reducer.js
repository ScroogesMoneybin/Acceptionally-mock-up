import {combineReducers} from 'redux';
import {userReducer} from './user/user.reducer.js'
import {categoriesReducer} from './categories/category.reducer.js'
import {cartReducer} from './cart/cart.reducer.js'
import {ordersReducer} from './orders/orders.reducer.js'

//root reducer almalgamates our other reducers from other files
export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    orders: ordersReducer

});
