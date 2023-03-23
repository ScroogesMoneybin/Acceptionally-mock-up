import { createSelector } from "reselect";

const selectOrdersReducer = (state) => state.orders;  //This gives access to the orders state listed in orders.reducer.js




//memoization of the categories reducer, so it only runs if the categories change
export const selectOrders = createSelector([selectOrdersReducer],(ordersSlice)=>ordersSlice.orders);

export const selectOrderId = createSelector([selectOrdersReducer],(ordersSlice)=>ordersSlice.orderId);



export const selectIsOrdersLoading = createSelector([selectOrdersReducer],(ordersSlice)=>ordersSlice.isLoading);



export const selectEmailStatus = createSelector([selectOrdersReducer],(ordersSlice)=>ordersSlice.emailStatus);