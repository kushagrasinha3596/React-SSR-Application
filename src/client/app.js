import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './action/index';

const App = ({ route }) => {
    return (
        <div>
            <Header></Header>
            {renderRoutes(route.routes)}
        </div>
    )
}

export const loadData = (store) => {
    return store.dispatch(fetchCurrentUser());
}

export default {
    component: App,
    loadData: loadData
}