let express=require('express');
let swig=require('swig');
let nunjucks=require('nunjucks')
let mongoose=require('mongoose');
let cookie=require('cookie-parser');

let app=express();

app.use(cookie());

//设置模板引擎名称
// app.engine('html',swig.renderFile);
// app.set('views','./views')
// app.set('view engine','html')
// swig.setDefaults({cache:false})


//app.set('view engine','html');
//app.set('views','./views');
nunjucks.configure('views',{autoescape:true,express:app});


//路由分配
app.use('/',require('./routers/main'));
app.use('/api',require('./routers/api'));

//设置静态资源读取
app.use('/public',express.static(__dirname+'/public'));

mongoose.connect('mongodb://localhost:27018/blog2',(err)=>{
    if(err){
        console.log('数据库连接失败');
    }else{
        console.log('数据库连接成功');
        app.listen(8080);
    }
});

