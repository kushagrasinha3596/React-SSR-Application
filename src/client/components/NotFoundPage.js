import React from 'react';

const NotFoundPage = ({ staticContext }) => {
    staticContext.notFound = true;
    return <h1>Oops, not found page</h1>
}

export default {
    component: NotFoundPage
}