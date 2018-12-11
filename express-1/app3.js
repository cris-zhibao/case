//导入express
let express=require('express');
let app=express();

//get方式 地址栏请求
app.get('/get',(req,res)=>{
    res.send(req.query);
});

//静态资源读取
app.use(express.static('./public'));

app.listen(80);

