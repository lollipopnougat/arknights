const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件
module.exports = {
    mode: 'production',
    entry: {
        './js/main': './src/ts/main.ts'
    },
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/, //正则表达式匹配图片规则
                use: [{
                    loader: 'url-loader',
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images/',
                        publicPath: './images/',
                        esModule: false, // 这里设置为false
                        limit: 8192, //限制打包图片的大小：
                        //如果大于或等于8192Byte，则按照相应的文件名和路径打包图片；如果小于8192Byte，则将图片转成base64格式的字符串。
                        name: '[name].[ext]', //css中的images图片将会打包在build/image下;
                    }
                }]
            }
        ]
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['js/main'],
            filename: 'index.html',
            template: 'src/page/index.ejs'
        })
    ]
};