let express=require('express');

let router=express.Router();

let arr=[
    {name:'aaa',age:18},
    {name:'bbb',age:18},
    {name:'ccc',age:18}
];

router.get('/index.html',(req,res)=>{

    let name=req.cookies.name;
    res.render('index',{
        title:'哈哈哈',
        arr:arr,
        isLogin:name
    });
});

router.get('/register',(req,res)=>{
    console.log('成功了');
});

//登录
router.post('/login',(req,res)=>{
    console.log(req.body)
    res.cookie('name',req.body.val);
    res.end();
});

module.exports = router;