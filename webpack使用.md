#webpack
  * 项目，编译压缩文件打包工具（less、sass/js/css/img）扩展语法 * 
    首先保证本地有node环境
----
   * import name from '/2.js'; *  es6语法现役浏览器没有全部支持
   演示： 新建index.html、1.js、2.js 采用模块化方式导入js，并用浏览器打开
  
   - 初始化项目 npm init
   - 下载 webpack 和 webpack-cli  -D
   - 创建 webpack.config.js 文件
        - entry  入口
        - output 出口
            -filename
            -path
        - module 处理非js文件（css/img...）
          -rules []
              -test 匹配文件规则 
              -use 对应使用的loader []
                loader 
                options
        - plugins 插件 可以执行代码打包、压缩等更广范围的功能[]

        - mode 定义webpack相应模式 
            -production  生产模式
            -development 开发模式 √

   - 在package.json 中 script  添加 'dev':"webpack"

---
install 

  loader
      style-loader  处理css
      css-loader
      file-loader   处理图片 或者是url-loader
          outputPath 输出保存路径
          publicPath 与css路径一致

      html-withimg-loader 解决html中img标签图片打包
          

  抽离css
     extract-text-webpack-plugin  3.0

     mini-css-extract-plugin   4.0

        <code>
          test:/\.css$/,
          use:[
              miniCssExtractPlugin.loader,
              'css-loader'
          ]
        </code>

plugin
  install html-webpack-plugin  自动生成index.html文件
     <code>
       new HtmlWebpackPlugin({
          filename:'index.html',
          title:'webpackDemo',
          template:'./src/index.html',
          minify:{
                removeAttributeQuotes:true,
                collapseWhitespace:true
            }
        })
     </code>

  抽离css调用插件：
       new miniCssExtractPlugin({
            filename:'[name]_[contenthash:8].css'
        })


清除文件：
new CleanWebpackPlugin([path.join(__dirname),'dist']),


devserver 热加载
    install  webpack-dev-server

----
热加载服务器
devServer:{
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  hot: true,
  port: 3000
} 

---
plugins
  开启热加载插件
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
---

修改package.json 中 script  start: 'webpack-dev-server --open'

  --open 浏览器自动打开

webpack默认只会处理js文件

   ##下载cssloader 解析css

   ##分离css文件

   ##开启服务器  webpack-dev-server 

   ##自动开启浏览器 open-browser-webpack-plugin

   ##设置热更新 webpack  hot

   ##图片打包 webpack-fileloader







   





