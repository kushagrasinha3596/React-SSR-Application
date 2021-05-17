import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import CombinedReducers from '../client/reducers/index';

export default (req) => {
    const cookie = req.get('cookie');
    const axiosInstance = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: {
            cookie: cookie || ''
        }
    });
    const store = createStore(CombinedReducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
    return store;
}