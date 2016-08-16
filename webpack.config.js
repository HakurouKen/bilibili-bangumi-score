var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'index.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        },{
            test: /\.scss$/,
            loaders: ['style','css','sass']
        }]
    }
}
