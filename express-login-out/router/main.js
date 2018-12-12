/**
 * 处理模板请求 
 * 操作模板
 * 
 */

 let express=require('express');

 let router = express.Router();

router.get('/',(req,res)=>{
    res.render('post-ajax.html',{
        obj:req.cookies.obj
    });
})

 module.exports = router;
