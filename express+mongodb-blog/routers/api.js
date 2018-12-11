let express=require('express');

let router=express.Router();

//
let resData={};


//注册请求
router.get('/user/register',(req,res)=>{
  
    let val=req.query;
    console.log(val);
    //设置cookie
    res.cookie('name',val);
    res.end();
});

//注册请求
router.get('/user/login',(req,res)=>{
    console.log(req.cookies,123);
  
    console.log(req.cookies.name.name)
    res.send(req.cookies.name);
});

module.exports=router;