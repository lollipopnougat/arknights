const path = require('path');
module.exports = {
    mode: 'production',
    entry: './ts/main.ts',
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.tsx?$/,
                // ts-loader是官方提供的处理tsx的文件
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
        ]
    },

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}