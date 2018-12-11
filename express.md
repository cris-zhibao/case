express
    官网：http://www.expressjs.com.cn/

初始化项目：
    npm init

安装：
    $ npm install express --save

使用：
    const express = require('express')
    const app = express()

    //get方式
    app.get('/', (req, res) => res.send('Hello World!'))

    app.listen(3000);

静态文件托管
    app.use(express.static('./views'));


GET方式：
    app.get('/get',(req,res)=>{
       console.log(req.query);
    });


POST方式：
    安装并导入  body-parser 中间件  解析来自post请求的数据
    
    //创建编码解析  
    let urlencoded=bodyparser.urlencoded({extended:false});

    app.post('/post',urlencodedParser,(req,res)=>{
         console.log(req.body);
    });

