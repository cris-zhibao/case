//导入express
let express=require('express');
let bodyparser=require('body-parser');
let cookie=require('cookie-parser');
let swig=require('swig');
let app=express();

//配置模板

//模板保存目录
app.set('views',__dirname+'/public');
//读取模板引擎
app.set('view engine','html');
//读取方式采用swig
app.engine('html',swig.renderFile);
//不缓存
swig.setDefaults({cache:false});

let urlencoded=bodyparser.urlencoded({extended:false});

//调用cookie
app.use(cookie());

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
//app.use('/data',require('./router/data.js'));

//静态资源读取
app.use(express.static('./public'));

app.listen(80);

