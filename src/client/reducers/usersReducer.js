import { FETCH_USERS } from '../action/index';

let initialState = [];

export const userReducers = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS:
            let actionData = [];
            if(action.payload && action.payload.data){
                actionData = action.payload.data;
            }
            return [...initialState, ...actionData];
        
        default:
            return state;
    }
}