var path = require('path');

module.exports = {
    entry: {
        app: [
            'webpack/hot/dev-server',
            './src/app.jsx'
        ]
    },
    output: {
        path: './build',
        publicPath: '/entry',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'babel-loader' }
        ]
    },
    devServer: {
        contentBase: './public'
    }
};
