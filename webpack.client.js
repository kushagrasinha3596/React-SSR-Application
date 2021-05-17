const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {

    //Tell webpack the entry point
    entry: './src/client/client.js',

    //Tell webpack, where to put the bundle file after its generation
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}

module.exports = merge(baseConfig, config);