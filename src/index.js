import 'babel-polyfill';
import express from 'express';
import { rendererHelper } from './helper/renderer';
import CreateStore from './helper/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Route';
import proxy from 'express-http-proxy';

const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com',{
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));

app.use(express.static('public')); //can be accessed from browser as 'localhost:3000/bundle.js'

app.get('*', (req, res) => {
    const store = CreateStore(req);
    const matchedRoutes = matchRoutes(Routes, req.path);
    //'matchedRoutes' - not used to routing purpose. For that we use 'renderRoutes'
    //'matchedRoutes' is used for getting objects configured for matched routes, so that we can check for any function to load data, or any configured data in tha object
    const promises = matchedRoutes.map(({ route }) => {
        let loadData = route.loadData;
        if(loadData){
            return loadData(store);
        }
    });
    const alwaysResolvedPromises = promises.map((promise) => {
        if(promise){
            return new Promise((res, rej) => {
                promise.then((data) => res(data)).catch((err) => res(err));
            });
        }
    });

    Promise.all(alwaysResolvedPromises)
    .then(() => {
        let context = {};
        let content = rendererHelper(req, store, context);
        if(context.notFound){
            res.status(404);
        }
        res.send(content);
    });
});

app.listen(3000, ()=> {
    console.log("App listening to port 3000");
});