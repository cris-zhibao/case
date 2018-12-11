//http模块 开启并监听服务
const http=require('http');
//导入读取文件模块
const fs=require('fs')

//解析字符串数据
const queryString =require('querystring')


let arr=[
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
    },
];


const app=http.createServer((req,res)=>{
    console.log(req.url);
    let url=req.url;

    if(url !== '/favicon.ico'){
        if(url.includes('/api')){

            //获取用户列表
            if(url.includes('/getUserList')){
                res.write(JSON.stringify(arr));
                res.end();
            }else{
                 //登录注册
                 //get方式
                // let dataStr=url.split('?')[1];
                // let Obj =queryString.parse(dataStr)

                //post方式
                let Obj='';
                req.on('data',(d)=>{
                    Obj+=d;
                })
                req.on('end',()=>{
                    Obj=JSON.parse(Obj);
                    if(!Obj.name || !Obj.pass){
                        res.write('用户名或密码为空');
                        res.end();
                        return ;
                    }
                    let O=arr.find(e=>e.name==Obj.name);
                    switch(Obj.act){
                        case 'add':
                            //console.log('注册');
                            if(O){
                                res.write('已被注册');
                                res.end();
                            }else{
                                arr.push({
                                    name:Obj.name,
                                    pass:Obj.pass
                                });
                                res.write('注册成功');
                                res.end();
                            }
                        break;
                        case 'login':
                           //验证用户名是否存在
                           if(O){
                               if(O.pass==Obj.pass){
                                    res.write('登录成功');
                               }else{
                                   res.write('账号或密码错误');
                               }
                           }else{
                               res.write('账号未注册,请先注册');
                           }
                           res.end();
                    }
                })

                
               

            }

        }else{
            //走静态资源
            let path='./views'
            try{
                let data = fs.readFileSync(path+url);
                res.write(data);
                res.end();
            }catch(err){
                fs.readFile(path+'/404.html',(err,data)=>{
                    res.write(data);
                    res.end();
                })
            }
        }
    }

    
});

//监听端口
app.listen(8080)
