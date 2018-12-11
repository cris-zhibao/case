#node.js 
    基于JavaScript语言来实现服务端

    node是做服务器端的，支持数据库操作

    不支持相关js操作浏览器端
------------------------------
安装node  
    官网： http://nodejs.cn/

验证是否安装成功

    node -v
    npm -v  包管理器
        
    安装淘宝镜像映射 
        https://npm.taobao.org/
            $ npm install -g cnpm --registry=https://registry.npm.taobao.org 

    安装nrm 切换npm源
        npm install nrm -g --save 

        nrm ls 查看当前源列表

        nrm test cnpm 测试源下载速度

        nrm use taobao 切换源

---------------------------------
全栈 大前端 前后端都搞
node特点：
    事件驱动
    非阻塞式 I/O
    单线程


==============================
创建后端服务
    node 模块化加载方式

导入模块
    require(''模块路径)

导出模块
    module.exports.模块名 = {}

--------------------------------
node 内置了模块
    http 模块  创建服务模块 

    fs   读取文件模块 

    queryString 将字符串解析成对象

get请求
    从地址栏中获取值
    使用 queryString.parse(str) 解析数据

post请求
    从事件中获取
    let str='';
    res.on('data',(d)=>{
        str+=d;
    })
    res.on('end',()=>{
        //数据接收完毕执行
    })
        
注册

    验证输入框内容是否为空

    验证是否被注册

登录
    验证内容是否为空

    验证是否被注册

    验证密码是否一致

-----------------------------------------








    


