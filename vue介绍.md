#Vue
    MVVM
        model
        view
        controller
        
    双向数据绑定
    声明式渲染
    操作数据

1. Vue官网 介绍
     下载vue.js
     案例演示 
        实例化vue对象
        指令
        事件

    v-text  -> innerText
    v-html  -> innerHTML

    v-bind -> :src  :style  :class

    v-on ->   @click.stop  @mouseover.enter  @mousedown.prevent

    v-if 
    v-else-if
    v-else
    v-show
    v-for

2. vue选项卡

3. computed 计算属性 用来计算处理数据并返回 （在view层展现处理后的数据格式）   100.00￥ 

4. watch 
        name{
            handler:fn,
            deep:true
        }

5. todo

6. 组件 template 、data(必须return)  component

7. 单向数据流

8. 组件数据传递
     父传子  props:[]
     子传父  this.$emit

9. slot 插槽
    template
        <slot name="name1"></solt>

    <tpm>
        <div slot="name1"></div>
    </tpm>

10. vue-cli
        npm install -g @vue/cli 
                vue --version

        vue-create

11. vue-router
        SPA 单页面应用
            前后端分离，前端关注界面，后端关注数据处理和存储
            减轻服务器压力，服务器只需要返回接口
            用户体验好，快，内容修改不需要重新加载整个页面


        缺点：不利于SEO，首次加载耗时较多，导致首屏会出现空白现象

12. vuex
        1. 安装  npm i vuex -S

        2. 导入 import vuex from 'vuex';
        3. 调用 vue.Store({});

        vuex 构成
            state
            mutaions
            actions
            getters
        
        购物车

        

13. 生命周期

14. axios 
        easy-moke  https://www.easy-mock.com/login

        

        




    