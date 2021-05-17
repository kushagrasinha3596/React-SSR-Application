import { FETCH_ADMINS } from '../action/index';

let initialState = [];

export const adminsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_ADMINS:
            let actionData = [];
            if(action.payload && action.payload.data){
                actionData = action.payload.data;
            }
            return [...initialState, ...actionData];
        
        default:
            return state;
    }
}