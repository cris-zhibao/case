//导入express
let express=require('express');
let bodyparser=require('body-parser');
let app=express();

let urlencoded=bodyparser.urlencoded({extended:false});

app.use(urlencoded);

//get方式 地址栏请求
// app.get('/get',(req,res)=>{
//     res.send(req.query);
// });

// app.post('/post',(req,res)=>{
//     console.log(req.body)
// });


/**
 * 1. 资源模块 admin
 * 2. api 接口模块
 * 3. 前端模块
 */

//分模块管理
app.use('/user',require('./router/user.js'));
app.use('/data',require('./router/data.js'));

//静态资源读取
app.use(express.static('./public'));

app.listen(80);

