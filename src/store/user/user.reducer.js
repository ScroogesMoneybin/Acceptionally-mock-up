import {USER_ACTION_TYPES} from './user.types.js';

const INITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => { /* Need to give state the default state*/
    
    const {type, payload} = action;
    //return the object with values of the state
;    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,  /*Spread through previous state to retain the existing values and only update relevant values in payload in action that we care about*/
                currentUser: payload
            }
        case USER_ACTION_TYPES.SIGN_OUT_USER:
            return {
                ...state,  /*Spread through previous state to retain the existing values and only update relevant values in payload in action that we care about*/
                currentUser: null
            }
        default:
            return state;
            //Redux requires reducers to default return original state

    }
};
