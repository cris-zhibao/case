let express=require('express');

let router=express.Router();

router.get('/',(req,res)=>{
    //console.log('进来了');
    res.render('index.html',{
        title:888
    });
});

module.exports=router;