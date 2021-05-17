export const FETCH_USERS = 'fetch-users';
export const FETCH_CURRENT_USER = 'fetch-current-users';
export const FETCH_ADMINS = 'fetch-admins';

export const fetchUsers = () => {
    return async (dispatch, getState, axiosInstance) => {
        let data = await axiosInstance.get('/users');
        dispatch({
            type:FETCH_USERS,
            payload: data 
        });
    }
}

export const fetchCurrentUser = () => {
    return async (dispatch, getState, axiosInstance) => {
        let data = await axiosInstance.get('/current_user');
        dispatch({
            type:FETCH_CURRENT_USER,
            payload: data 
        });
    }
}

export const fetchAdmins = () => {
    return async (dispatch, getState, axiosInstance) => {
        let data = [];
        try{
            data = await axiosInstance.get('/admins');
        }
        catch(err){
            console.log("Unable to fetch admins list, seems user is not logged in");
        }
        dispatch({
            type:FETCH_ADMINS,
            payload: data 
        });
    }
}