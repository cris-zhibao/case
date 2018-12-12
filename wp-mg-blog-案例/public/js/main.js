$(function(){
    $('#registerBtn').on('click',function(){
        $('#loginBox').hide();
        $('#registerBox').show();
    })

    $('#loginBtn').on('click',function(){
        $('#loginBox').show();
        $('#registerBox').hide();
    })

    //发送注册请求
    $('#registerBtn1').on('click',function(){
            $.ajax({
                url:'/api/register',
                data:{
                    username:$('input[name=username]').val(),
                    password:$('input[name=password]').val(),
                    repass:$('input[name=repassword]').val()
                },
                type:'post',
                success:function(result){
                    console.log(result)

                    $('#registerTxt').html(result.msg);
                    if(!result.code){
                        setTimeout(function(){
                            $('#loginBox').show();
                            $('#registerBox').hide();
                        },1000);
                    }
                }
            })
    })


    $('#loginBtn1').on('click',function(){
        $.ajax({
            url:'/api/user/login',
            data:{
                username:$('input[name=name_log]').val(),
                password:$('input[name=pass_log]').val()
            },
            type:'post',
            success:function(result){
               // console.log(result)
               $('#loginTxt').html(result.msg);
               if(!result.code){
                window.location.reload();
               }
            }
        })

    })

    //退出
    $('#logoutBtn').on('click',function(){
        $.ajax({
            url:'/api/user/logout',
            type:'post',
            success:function(res){
                console.log(res);

                window.location.reload();
            }
        });
    })
})