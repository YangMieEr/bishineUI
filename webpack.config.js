const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.tsx', '.jsx', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        filename: 'index.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            oneOf: [{
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.scss$/,
                    use: ["style-loader", "css-loader", "sass-loader"]
                },
                {
                    test: /\.tsx?$/,
                    use: ["awesome-typescript-loader"]
                },
                {
                    test: /\.html$/,
                    use: ["html-loader"]
                },
                {
                    exclude: [/\.(js|jsx|mjs)$/, /\.json$/],
                    use: ["file-loader"]
                }
            ]
        }]
        // rules: [
        //     {
        //         test: /\.tsx?$/,
        //         loader: 'awesome-typescript-loader'
        //     }
        // ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'bishineUI',
            template: 'index.html',
            inject: true
        })
    ]
}