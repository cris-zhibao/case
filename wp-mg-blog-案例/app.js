let express=require('express');
let swig = require('swig');
let mongoose=require('mongoose')
let bodyparser=require('body-parser')
let cookie=require('cookie-parser')
let app = express();

//调用cookie中间件
app.use(cookie());



//调用bodyparser中间件
app.use(bodyparser.urlencoded({extended:true}))

//设置模板引擎名称
app.engine('html',swig.renderFile);
//模板路径
app.set('views','./views');
//注册所使用的模板引擎
app.set('view engine','html')

//取消模板缓存
swig.setDefaults({cache:false})

//配置路由
app.use('/',require('./routers/main'));
app.use('/api',require('./routers/api'))

//设置静态资源加载路径
app.use('/public',express.static('./public'))


//连接数据库
mongoose.connect('mongodb://localhost:27017/blog',(err)=>{
    if(err){
        console.log('连接数据库失败')
    }else{
        console.log('连接数据库成功')
        app.listen(8080);
    }
})

