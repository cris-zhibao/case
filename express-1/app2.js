//导入express
let express=require('express');
let app=express();

app.get('/',(req,res)=>{
    //res.send('成功了');
});

//静态资源读取
app.use(express.static('./public'));

app.listen(80);

