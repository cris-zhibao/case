let express=require('express');

//调用router方法
let router =express.Router();

router.get('/',(req,res)=>{
    res.render('index',{
        username:req.cookies.name
    })
})

module.exports=router;


