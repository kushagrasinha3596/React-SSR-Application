import React from 'react';

const Home = (props) => {
    return(
        <div>
            <div>I'm best home component</div>
            <button onClick={() => console.log("Hii There")}>Press Me!</button>
        </div>
    );
}

export default {
    component: Home
};