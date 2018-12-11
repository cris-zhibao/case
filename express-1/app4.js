//导入express
let express=require('express');
let bodyparser=require('body-parser');
let app=express();

let urlencoded=bodyparser.urlencoded({extended:false});

app.use(urlencoded);

//get方式 地址栏请求
app.get('/get',(req,res)=>{
    res.send(req.query);
});

app.post('/post',(req,res)=>{
    console.log(req.body)
});

//静态资源读取
app.use(express.static('./public'));

app.listen(80);

