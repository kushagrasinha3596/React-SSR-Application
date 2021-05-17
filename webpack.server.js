const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const nodeExternals = require('webpack-node-externals');

const config = {
    // Building bundle for server, not for browser
    target: 'node',

    //Tell webpack the entry point
    entry: './src/index.js',

    //Tell webpack, where to put the bundle file after its generation
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [nodeExternals()]
}

module.exports = merge(baseConfig, config);