      let path=require('path')
// 载入html-webpack-plugin
let HTMLWebpackPlugin=require('html-webpack-plugin');

let CleanWebpackPlugin=require('clean-webpack-plugin');

//抽离css插件
let miniCssExtractPlugin=require('mini-css-extract-plugin')
const webpack=require('webpack');

let obj={
    mode:'development',
    entry:{
        home:'./src/js/1.js'
    },
    output:{
        filename:'js/[name].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    miniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        outputPath:'/images',
                        publicPath:'../images' //项目使用路径
                    }
                }
             ]
            },
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            }
        ]
    },
    plugins:[
        new miniCssExtractPlugin({
            filename:'css/[name].css'
        }),
        new HTMLWebpackPlugin({
            filename:'index.html',
            title:'webpackDemo',
            template:path.resolve(__dirname,'./src/1.html'),
            minify:{
                removeAttributeQuotes:true,
                collapseWhitespace:true
            }
        }),
        new CleanWebpackPlugin([path.join(__dirname),'dist']),
        //自动开启浏览器
        //new OpenBrowserPlugin({ url: 'http://localhost:3000'}),
        //热加载
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
        hot:true
    },
}

module.exports=obj;