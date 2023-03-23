import {CART_ACTION_TYPES} from './cart.types.js';

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id===productToAdd.id);
    
    //if cart item is found, increase quantity by 1. Otherwise, leave quantity of item unchanged. 
    if(existingCartItem) {
        if(productToAdd.quantity <= existingCartItem.quantity){
            alert("We are sorry, but that is the limit of available inventory for that product.");
            return [...cartItems];
        }
        return cartItems.map((cartItem)=> cartItem.id===productToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem);
    }
    if (!existingCartItem && productToAdd.quantity===0) {
        alert("We are sorry, but that is the limit of available inventory for that product.");
            return [...cartItems];
    }
    //return new array wih modified cart items quantity or new cart item
    
    return [...cartItems,{...productToAdd, quantity: 1}];
    
};

const removeCartItem = (cartItems, productToRemove) => {
    //find if cartItems contains productToRemove
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id===productToRemove.id);
    
    //if cart item is found with quantity of 1, remove item. 
    if(existingCartItem.quantity===1) {
        return cartItems.filter(cartItem => cartItem.id!==productToRemove.id);
    }
   
    //if cart item is found with quantity above 1, reduce item by 1. 
    return cartItems.map((cartItem)=> cartItem.id===productToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem);
    
    
};

const clearCartItem = (cartItems, productToClear) => cartItems.filter((cartItem) => cartItem.id!==productToClear.id);

const emptyCart = (cartItems) => cartItems.filter((cartItem) => false);

export const setIsCartOpen = (bool) => ({type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool});

export const addItemToCart = (cartItems, product) => {
    const newCartItems = addCartItem(cartItems, product);
    return ({type: CART_ACTION_TYPES.SET_CART_ITEMS , payload: newCartItems});
}

export const removeItemFromCart = (cartItems, product) => {
    const newCartItems = removeCartItem(cartItems, product);
    return ({type: CART_ACTION_TYPES.SET_CART_ITEMS , payload: newCartItems});
}

export const clearItemFromCart = (cartItems, product) => {
    const newCartItems = clearCartItem(cartItems, product);
    return ({type: CART_ACTION_TYPES.SET_CART_ITEMS , payload: newCartItems});
};

export const emptyItemsFromCart = (cartItems) => {
    const newCartItems = emptyCart(cartItems);
    return ({type: CART_ACTION_TYPES.SET_CART_ITEMS , payload: newCartItems});
};
