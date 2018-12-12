/*
    拿到关于处理用户操作的请求
*/

let express=require('express');
//创建一个express路由
let router= express.Router();

let userArr=[
    {
        name:'aaa',
        pass:123
    },
    {
        name:'bbb',
        pass:123
    },
    {
        name:'ccc',
        pass:123
    }
]

//注册
// router.get('/addUser',(req,res)=>{
//     console.log(req.query);
// })

router.post('/addUser',(req,res)=>{
    let data =req.body;
    //验证账号密码是否为空
    if(data.name == '' || data.pass == ''){
        res.write('{"code":1,"msg":"账号或密码为空"}')
        res.end();
    }else{
        let o=userArr.find(e=>e.name==data.name);
        if(o){
            res.write('{"code":2,"msg":"账号已被占用"}')
            res.end();
        }else{
            userArr.push({
                name:data.name,
                pass:data.pass
            });
            res.write('{"code":0,"msg":"注册成功"}')
            res.end();
        }
    }
});


router.post('/login',(req,res)=>{
    let data =req.body;
    //验证账号密码是否为空
    if(data.name == '' || data.pass == ''){
        res.write('{"code":1,"msg":"账号或密码为空"}')
        res.end();
    }else{
        let o=userArr.find(e=>e.name==data.name);
        if(o){
            if(o.pass==data.pass){
                res.cookie('obj',data);
                res.write('{"code":0,"msg":"登录成功"}')
                res.end();

            }else{
                res.write('{"code":2,"msg":"账号或密码错误"}')
                res.end();
            }
        }else{
            userArr.push({
                name:data.name,
                pass:data.pass
            });
            res.write('{"code":3,"msg":"此账号还未注册，请先注册"}')
            res.end();
        }
    }
});

//退出登录
router.get('/logout',(req,res)=>{
    //清除cookie
    console.log(123);
    res.cookie('obj','');
    res.render('logout.html');
    //res.json({"code":0,"msg":"退出成功"});
});

module.exports = router;