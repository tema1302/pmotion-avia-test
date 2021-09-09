const path = require('path');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
require('babel-polyfill');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: ['babel-polyfill', './index.js'],
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    plugins: [
        new vueLoaderPlugin()
    ],
    devServer: {
        static: './dist'
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
   }
}