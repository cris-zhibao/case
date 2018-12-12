let express=require('express');
let User=require('../models/User')

let router=express.Router();


let resData={ code:0,msg:''};
//声明返回数据
// router.use((req,res,next)=>{
//     resData={
//         code:0,
//         msg:''
//     }
//     next();
// })

router.post('/register',(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    let repass=req.body.repass;

    //注册逻辑
    //用户名为空
    if(username==''){
        resData.code=1;
        resData.msg='用户名不能为空';
        res.json(resData);
        return;
    }

    //密码为空
    if(password==''){
        resData.code=2;
        resData.msg='密码不能为空';
        res.json(resData);
        return;
    }

    //两次输入密码不一致
    if(password!=repass){
        resData.code=3;
        resData.msg='两次输入的密码不一致';
        res.json(resData);
        return;
    }


    //去数据库中查找是否存在相同username的数据
    User.findOne({
        username:username
    }).then((userinfo)=>{
        console.log(userinfo);
        //如果存在
        if(userinfo){
            resData.code=4;
            resData.msg='该用户名已被占用';
            res.json(resData);
            return;
        }
        //不存在 就存入数据库 User.save()
        let userOne=new User({
            username:username,
            password:password
        });
        return userOne.save();
    }).then((newUserInfo)=>{
        console.log(newUserInfo);
        resData.code=0;
        resData.msg='注册成功';
        res.json(resData);
    });
})

router.post('/user/login',(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;

    //验证是账号和密码是否匹配
    User.findOne({
        username:username,
        password:password
    }).then((userinfo)=>{
        console.log(userinfo);
        if(!userinfo){
            resData.code=5;
            resData.msg='用户名或密码错误'
            res.json(resData);
            return;
        }

        

        resData.code=0;
        resData.msg='登录成功';
        resData.userinfo={
            id:userinfo._id,
            name:userinfo.username
        }

        //设置cookie
        res.cookie('name',userinfo.username);
        res.json(resData);
    })
})


router.post('/user/logout',(req,res)=>{
    //删除cookie
    res.cookie('name','');
    resData.msg='退出成功';
    res.json(resData);
});

module.exports=router;