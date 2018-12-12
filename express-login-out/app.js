let express = require('express');

//解析post请求数据
let bodyParser = require('body-parser');

//导入模板
let nunjucks=require('nunjucks');

//cookie
let cookie = require('cookie-parser');

//开启服务
let app=express();


//使用cookie中间件
app.use(cookie());

//模板配置
nunjucks.configure('views', { autoescape: true, express:app });

//设置POST请求解析
let encoded = bodyParser.urlencoded({extended:false});
app.use(encoded)

//设计分类请求模块
                                                    
app.use('/api/user',require('./router/user.js'))
app.use('/',require('./router/main'));


//使用中间件 读取静态文件
app.use(express.static('./views'))


//处理404
app.use((req, res, next) => {
    res.render('404.html',{
        err:'页面丢了'
    });
    next();
})


//监听端口
app.listen(8080);
