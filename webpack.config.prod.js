const base = require('./webpack.config');
module.exports = Object.assign({}, base, {
    mode: 'production',
    externals: {// 为了打包时候将react、react-dom排除出去
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React'
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM'
        }
    }
});